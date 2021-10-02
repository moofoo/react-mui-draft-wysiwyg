import React from 'react';
import PropTypes from 'prop-types';
import useEditor from '../../../hooks/useEditor';
import useEditorState from '../../../hooks/useEditorState';
import useEditorFocus from '../../../hooks/useEditorFocus';
import { RichUtils } from 'draft-js';
import ButtonControl from './ButtonControl';

ToggleBlockTypeButtonControl.propTypes = {
    blockType: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    text: PropTypes.any,
};

function ToggleBlockTypeButtonControl({ blockType, children, text }) {
    const editor = useEditor();

    const editorFocus = useEditorFocus();

    const onClick = () => {
        const newEditorState = RichUtils.toggleBlockType(editor.getEditorState(), blockType);
        editor.onChange(newEditorState);
        editorFocus();
    };

    return (
        <ButtonControl text={text} onClick={onClick}>
            {children}
        </ButtonControl>
    );
}

export default ToggleBlockTypeButtonControl;
