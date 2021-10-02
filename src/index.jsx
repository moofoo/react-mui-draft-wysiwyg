import React from 'react';
import PropTypes from 'prop-types';
import { Editor, EditorState, RichUtils } from 'draft-js';
import EditorFactories from './utils/EditorFactories';
import EditorToolbar from './EditorToolbar';
import Paper from '@mui/material/Paper';
import { defaultConfig } from './types/config';
import Translator from './lang/Translator';
import makeStyles from '@mui/styles/makeStyles';
import toHTML from './conversion/toHTML';
import { useStore} from './store';

export { LANG_PREFIX } from './types/lang';
export { fileToBase64 } from './utils/fileUtils';
export { toHTML};

export {toolbarControlTypes} from './types/editorToolbar';

export const MUIEditorState = {
    createEmpty: (config) => {
        const editorFactories = new EditorFactories(config);
        return EditorState.createEmpty(editorFactories.getCompositeDecorator());
    },
    createWithContent: (config, contentState) => {
        const editorFactories = new EditorFactories(config);
        return EditorState.createWithContent(contentState, editorFactories.getCompositeDecorator());
    },
};

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

 const getCachedConfigItem = (editorFactories, type, key) => {
    return React.useMemo(() => editorFactories.getConfigItem(type, key), [editorFactories]);
}

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

let editorFactories;

let showResizeImageDialog;
let hideResizeImageDialog;

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

const setStateSelector = state => state.setState;
const setStuffSelector = state => state.setStuff;
const editorStateSelector = state => state.editorState;

function MUIEditor({
    onChange = function(){},
    onFocus = function(){},
    onBlur = function(){},
    config = defaultConfig,
}) {

    const editorState = useStore(editorStateSelector);
    const setState = useStore(setStateSelector);
    const setStuff = useStore(setStuffSelector)

    editorFactories = editorFactories || new EditorFactories(config);
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

    const toolbar = <Toolbar isToolbarVisible={isToolbarVisible} editorFactories={editorFactories} />;


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

MUIEditor.displayName = 'MUIEditor';

MUIEditor.propTypes = {
    /** Immutable object that represents the entire state of the editor */
    editorState: PropTypes.object.isRequired,
    /** The function to be executed by the Editor when edits and selection changes occur. The new editor state is passed by parameter. */
    onChange: PropTypes.func.isRequired,
    /** The function to be executed by the Editor when a focus event is triggered. The new editor state is passed by parameter. */
    onFocus: PropTypes.func,
    /** The function to be executed by the Editor when a blur event is triggered. The new editor state is passed by parameter. */
    onBlur: PropTypes.func,
    /** All the editor configuration options */
    config: PropTypes.object,
};

MUIEditor.defaultProps = {
    config: defaultConfig,
};

export { MUIEditor };
