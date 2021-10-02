import React from 'react';
import useEditorState from '../../../hooks/useEditorState';
import useEditor from '../../../hooks/useEditor';
import { RichUtils } from 'draft-js';
import ButtonControl from '../core/ButtonControl';
import LinkOffIcon from '@mui/icons-material/LinkOff';

function LinkRemoveControl() {
    const editor = useEditor();
  const editorState = useEditorState(editor);


    const onClick = () => {
        const selection = editorState.getSelection();
        editor.onChange(RichUtils.toggleLink(editorState, selection, null));
    };

    return (
        <ButtonControl
            onClick={onClick}
            text={editor.translate('controls.linkRemove.title')}
            disabled={editorState.getSelection().isCollapsed()}>
            <LinkOffIcon />
        </ButtonControl>
    );
}

export default LinkRemoveControl;
