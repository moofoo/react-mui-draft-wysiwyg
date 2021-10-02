import React from 'react';
import create from 'zustand';
import { Editor, RichUtils, convertFromRaw} from 'draft-js';
import EditorToolbar from './EditorToolbar';
import Paper from '@mui/material/Paper';
import { defaultConfig } from './types/config';
import Translator from './lang/Translator';
import makeStyles from '@mui/styles/makeStyles';
import toHTML from './conversion/toHTML';
import { useStore, StoreProvider} from './store';
import { EditorFactories }  from './utils/EditorFactories';

export { LANG_PREFIX } from './types/lang';
export { fileToBase64 } from './utils/fileUtils';
export { toHTML};

export {toolbarControlTypes} from './types/editorToolbar';

export { EditorFactories } from './utils/EditorFactories';

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


const initStateSelector = state => state.initEditorState;
const setStateSelector = state => state.setEditorState;
const setStuffSelector = state => state.setStuff;
const editorStateSelector = state => state.editorState;




function _MUIEditor({
    onChange = function(){},
    onFocus = function(){},
    onBlur = function(){},
    config = defaultConfig,
    contentState = null,
}) {

    const editorState = useStore(editorStateSelector);
    const setState = useStore(setStateSelector);
    const setStuff = useStore(setStuffSelector);

    const editorFactories = EditorFactories.getFactory(config);

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
        setIsResizeImageDialogVisible(false);
        setResizeImageEntityKey(null);
    }.bind(null, setIsResizeImageDialogVisible, setResizeImageEntityKey);
*/

    translateRef.current = React.useCallback(function(translations, id) {
        const translator = new Translator(translations);
        return translator.get(id);
    }.bind(null, editorFactories.getTranslations()), []);

    setStuff({ref:editorRef, onChange, translate: React.useCallback(function(translations, id) {
        const translator = new Translator(translations);
        return translator.get(id);
    }.bind(null, editorFactories.getTranslations()), [])
    })

    const classes = useStyles();

    React.useEffect(() => {
        setIsToolbarVisible(toolbarVisibleConfig);
    }, [toolbarVisibleConfig]);

    const toolbar = (
        <EditorToolbar
            visible={isToolbarVisible}
            style={editorFactories.getConfigItem('toolbar', 'style')}
            className={editorFactories.getConfigItem('toolbar', 'className')}>
            {props.editorFactories.getToolbarControlComponents()}
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

    }, []);

    if (editorWrapperElement === Paper) {
        editorWrapperProps.current.elevation = 3;
    }

    blockStyleFn = editorFactories.getBlockStyleFn();
    customStyleMap = editorFactories.getCustomStyleMap();
    blockRenderMap = editorFactories.getBlockRenderMap();
    blockRendererFn = editorFactories.getBlockRendererFn();



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
            {top}
            {EditorWrapper}
            {bottom}
        </div>
    );
}

let createStore;

function MUIEditor(props) {
    createStore = createStore || create(function(set, get){
        return {
            editorState: EditorFactories.createWithContent(props.config, convertFromRaw({
                blocks: [
                    {
                        data: {},
                        depth: 0,
                        entityRanges: [],
                        inlineStyleRanges: [],
                        key: '1aa1a',
                        text: '',
                        type: 'unstyled'
                    },
                ],
                entityMap: {},
            })),
            ref: null,
            onChange: null,
            init: false,
            translate: function () { },
            setEditorState: newState => {
                const { onChange } = get();
                if (typeof onChange === 'function') {
                    onChange(editorState);
                }

                const toSet = { editorState: newState };

                set(toSet);

                return toSet;
            },
            setEditorRef: (ref) => set({ ref }),
            setOnChange: (onChange) => set({ onChange }),
            setTranslate: (translate) => set({ translate }),
            setStuff: (ref, onChange, translate) => set({ ref, onChange, translate }),
        }
    });

    return <StoreProvider createStore={createStore}><_MUIEditor {...props} /></StoreProvider>
}

MUIEditor.displayName = 'MUIEditor';

MUIEditor.defaultProps = {
    config: defaultConfig,
};

export { MUIEditor }
