import React from 'react';
import { EditorState } from 'draft-js';
import ButtonControl from '../core/ButtonControl';
import UndoIcon from '@mui/icons-material/Undo';

import { useTranslate, useEditorRef, useOnChange, getEditorState} from '../../../store';

export default function UndoControl() {

    const onChange = useOnChange();
    //const editorState = useEditorState();
    const translate = useTranslate();
    const editorRef = useEditorRef();

    // const editorFocus = useEditorFocus();


    const onClick = () => {
    //    onChange(EditorState.undo(editorState));
        onChange(EditorState.undo(getEditorState()));
        editorRef.current.focus();
    };

    return (
        <ButtonControl onClick={onClick} text={translate('controls.undo.title')}>
            <UndoIcon />
        </ButtonControl>
    );
}