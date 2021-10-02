import React from 'react';
import draftJs from 'draft-js';
import EditorToolbar from './EditorToolbar';
import Paper from '@mui/material/Paper';
import { defaultConfig } from './types/config';
import Translator from './lang/Translator';
import makeStyles from '@mui/styles/makeStyles';
import toHTML from './conversion/toHTML';
import { useStore , getStoreState} from './store';

export { LANG_PREFIX } from './types/lang';
export { fileToBase64 } from './utils/fileUtils';
export { toHTML};


import { defaultToolbarControlsConfiguration } from './types/editorToolbar';
import { mergeDeep } from './utils/objectUtils';
import languages from './lang/languages';

export {toolbarControlTypes} from './types/editorToolbar';

let factory;

const { CompositeDecorator, DefaultDraftBlockRenderMap, EditorState, Editor, RichUtils, convertFromRaw}  = draftJs;

export const createWithContent = (config = defaultConfig, contentState) => {
    const editorFactories = new EditorFactories(config);
    console.log("EDITOR STATE", EditorState);
    return draftJs.EditorState.createWithContent(contentState, editorFactories.getCompositeDecorator());
}

export const createEmpty = (config = defaultConfig)  => {
    const editorFactories = new EditorFactories(config);
    console.log("EDITOR STATE", EditorState);
    return draftJs.EditorState.createEmpty(editorFactories.getCompositeDecorator());
}

export const getFactory = (config = defaultConfig) => {
    if (factory) {
        return factory;
    }

    factory = new EditorFactories(config);

    return factory;
}

export {useStore, getStoreState} from './store';


class EditorFactories {
    constructor(config) {
        this.config = config || defaultConfig;
    }

    getCompositeDecorator() {
        let decorators = [];
        for (const control of this.getToolbarControls()) {
            const pluginData = this.getPluginData(control);
            if (pluginData && pluginData.decorators) {
                decorators = decorators.concat(pluginData.decorators);
            }
        }
        return decorators.length > 0 ? new CompositeDecorator(decorators) : null;
    }

    getCustomStyleMap() {
        let customStyleMap = {};
        for (const control of this.getToolbarControls()) {
            const pluginData = this.getPluginData(control);
            if (pluginData && pluginData.customStyleMap) {
                customStyleMap = {
                    ...customStyleMap,
                    ...pluginData.customStyleMap,
                };
            }
        }
        return customStyleMap;
    }

    getBlockRenderMap() {
        let renderMap = DefaultDraftBlockRenderMap;
        for (const control of this.getToolbarControls()) {
            const pluginData = this.getPluginData(control);
            if (pluginData && pluginData.blockRenderMap) {
                renderMap = renderMap.merge(pluginData.blockRenderMap);
            }
        }

        return renderMap;
    }

    getBlockStyleFn() {
        return (contentBlock) => {
            let classNames = '';
            for (const control of this.getToolbarControls()) {
                const pluginData = this.getPluginData(control);
                if (pluginData && pluginData.blockStyleFn) {
                    const result = pluginData.blockStyleFn(contentBlock);
                    if (result) classNames += ' ' + result;
                }
            }
            return classNames.trim();
        };
    }

    getBlockRendererFn() {
        return (contentBlock) => {
            for (const control of this.getToolbarControls()) {
                const pluginData = this.getPluginData(control);
                if (!pluginData || !pluginData.blockRendererFn) continue;
                const result = pluginData.blockRendererFn(contentBlock);
                if (result) return result;
            }
        };
    }

    getToolbarControls() {
        return this.getConfigItem('toolbar', 'controls');
    }

    getToolbarControlComponents() {
        const keyCounter = {};
        return this.getToolbarControls().map((control) => {
            if (!keyCounter[control.name]) keyCounter[control.name] = 0;
            keyCounter[control.name]++;

            return React.createElement(control.component, {
                key: `${control.name}${keyCounter[control.name]}`,
                configuration: this.getToolbarControlConfiguration(control.name),
                defaultConfiguration: defaultToolbarControlsConfiguration[control.name],
                pluginData: this.getPluginData(control),
            });
        });
    }

    getToolbarControlConfiguration(controlName) {
        if (
            this.config &&
            this.config.toolbar &&
            this.config.toolbar.controlsConfig &&
            this.config.toolbar.controlsConfig[controlName]
        )
            return this.config.toolbar.controlsConfig[controlName];
        else if (defaultToolbarControlsConfiguration[controlName])
            return defaultToolbarControlsConfiguration[controlName];

        return null;
    }

    getPluginData(control) {
        if (!control.plugin) return null;
        return control.plugin(
            this.getToolbarControlConfiguration(control.name),
            defaultToolbarControlsConfiguration[control.name]
        );
    }

    getTranslations() {
        const lang = this.getConfigItem('lang');
        const langTranslations = languages[lang];
        const customTranslations = this.config.translations || {};
        return mergeDeep(langTranslations, customTranslations);
    }

    getToolbarPosition() {
        return this.getConfigItem('toolbar', 'position').toLowerCase();
    }

    getConfigItem(...keys) {
        let item = { ...this.config };
        for (const key of keys) {
            item = item[key];
            if (item === undefined) break;
        }

        if (item !== undefined) return item;

        item = { ...defaultConfig };
        for (const key of keys) {
            item = item[key];
        }

        return item;
    }
}



const useStyles = makeStyles((theme) => ({
    '@global': {
        '.mui-editor-left-aligned-block': {
            textAlign: 'left !important',
            '& > div': {
                textAlign: 'left !important',
            },
        },
        '.mui-editor-center-aligned-block': {
            textAlign: 'center !important',
            '& > div': {
                textAlign: 'center !important',
            },
        },
        '.mui-editor-right-aligned-block': {
            textAlign: 'right !important',
            '& > div': {
                textAlign: 'right !important',
            },
        },
        '.mui-editor-justify-aligned-block': {
            textAlign: 'justify !important',
            '& > div': {
                textAlign: 'justify !important',
            },
        },
    },
    editorWrapper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(5),
    },
}));

/**
 * Material UI Draft.js editor
 *
 * @version 1.0.3
 * @author [Rubén Albarracín](https://github.com/Kelsier90)
 */
/*
const Toolbar = React.memo((props) => {
const {isToolbarVisible, editorFactories} = props;
return (
<EditorToolbar
    visible={isToolbarVisible}
    style={editorFactories.getConfigItem('toolbar', 'style')}
    className={editorFactories.getConfigItem('toolbar', 'className')}>
    {props.editorFactories.getToolbarControlComponents()}
</EditorToolbar>
);
});
*/
//let editorFactories;

//let showResizeImageDialog;
//let hideResizeImageDialog;

let blockStyleFn;
let customStyleMap;
let blockRenderMap;
let blockRendererFn;

/*

const handleKeyCommand = (command) => {
    console.log("KEY COMMAND", command);
    const newState = RichUtils.handleKeyCommand(getEditorState(), command);
    if (newState) {
        onChange(newState);
        return 'handled';
    }
    return 'not-handled';
};
*/


const initStateSelector = state => state.init;
const setStateSelector = state => state.setEditorState;
const setStuffSelector = state => state.setStuff;
const editorStateSelector = state => state.editorState;



let translateFn;

function MUIEditor({
    onChange = function(){},
    onFocus = function(){},
    onBlur = function(){},
    config = defaultConfig,
}) {


    const init = useStore(initStateSelector);

    const editorState = useStore(editorStateSelector);
    const setState = useStore(setStateSelector);
    const setStuff = useStore(setStuffSelector);

    const editorFactories = getFactory(config);

    const editorRef = React.useRef(null);
    const translateRef = React.useRef(function () {});
    const toolbarVisibleConfig = editorFactories.getConfigItem('toolbar', 'visible');
    const [isToolbarVisible, setIsToolbarVisible] = React.useState(toolbarVisibleConfig);
   /* const [isResizeImageDialogVisible, setIsResizeImageDialogVisible] = React.useState(false);
    const [resizeImageEntityKey, setResizeImageEntityKey] = React.useState(null);

    showResizeImageDialog = showResizeImageDialog || function(setIsResizeImageDialogVisible, setResizeImageEntityKey, entityKey) {
        setIsResizeImageDialogVisible(true);
        setResizeImageEntityKey(entityKey);
    }.bind(null, setIsResizeImageDialogVisible, setResizeImageEntityKey)

    hideResizeImageDialog = hideResizeImageDialog || function(setIsResizeImageDialogVisible, setResizeImageEntityKey){
        setIsResizeImageDialogVisib le(false);
        setResizeImageEntityKey(null);
    }.bind(null, setIsResizeImageDialogVisible, setResizeImageEntityKey);
*/

    translateFn = translateFn || function(translations, id) {
        const translator = new Translator(translations);
        return translator.get(id);
    }.bind(null, editorFactories.getTranslations())


    translateRef.current = React.useCallback(function(translations, id) {
        const translator = new Translator(translations);
        return translator.get(id);
    }.bind(null, editorFactories.getTranslations()), []);

    setStuff({ref:editorRef, onChange, translate: translateFn })

    const classes = useStyles();

    React.useEffect(() => {
        setIsToolbarVisible(toolbarVisibleConfig);
    }, [toolbarVisibleConfig]);

    const toolbar = (
        <EditorToolbar
            visible={isToolbarVisible}
            style={editorFactories.getConfigItem('toolbar', 'style')}
            className={editorFactories.getConfigItem('toolbar', 'className')}>
            {editorFactories.getToolbarControlComponents()}
        </EditorToolbar>
    );


    const top = editorFactories.getToolbarPosition() === 'top' ? toolbar : null;
    const bottom = editorFactories.getToolbarPosition() === 'bottom' ? toolbar : null;


    const wrapperOnClick = React.useCallback((ref) => {
        ref.current.focus()
    }, []);

    const editorWrapperProps = React.useRef({
        style: editorFactories.getConfigItem('editor', 'style'),
        className: `${classes.editorWrapper} ${editorFactories.getConfigItem('editor', 'className')}`,
        onClick: wrapperOnClick
    });

    const editorWrapperElement = editorFactories.getConfigItem('editor', 'wrapperElement');

    const handleKeyCommand = React.useCallback((command) => {

        console.log("KEY COMMAND", command);
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return 'handled';
        }
        return 'not-handled';

    }, [editorState]);

    if (editorWrapperElement === Paper) {
        editorWrapperProps.current.elevation = 3;
    }

    blockStyleFn = editorFactories.getBlockStyleFn();
    customStyleMap = editorFactories.getCustomStyleMap();
    blockRenderMap = editorFactories.getBlockRenderMap();
    blockRendererFn = editorFactories.getBlockRendererFn();

    if(!init){
        console.log("STORE STATE", getStoreState(config));
        useStore.setState(getStoreState(config));
        return null;
    }

    console.log("STORE STORE", useStore.getState());

    setTimeout(() => {
        console.log("STORE STORE", useStore.getState());
        console.log("STORE STORE", useStore.getState());
    }, 1500);



    const EditorWrapper = React.createElement(
        editorWrapperElement,
        editorWrapperProps.current,
        <Editor
            {...editorFactories.getConfigItem('draftEditor')}
            ref={editorRef}
            editorState={editorState}
            onChange={setState}
            onFocus={onFocus}
            onBlur={onBlur}
            handleKeyCommand={handleKeyCommand}
            blockStyleFn={blockStyleFn}
            customStyleMap={customStyleMap}
            blockRenderMap={blockRenderMap}
            blockRendererFn={blockRendererFn}
        />
    );

    return (
<div>
    LOLOLOLOL
            {top}
            {EditorWrapper}
            {bottom}
            </div>

    );
}




export { MUIEditor }
