import React from 'react';
import { EditorState } from 'draft-js';
import ButtonControl from '../core/ButtonControl';
import RedoIcon from '@mui/icons-material/Redo';
import { useTranslate, useEditorRef, useOnChange, getEditorState} from '../../../store';

function RedoControl() {
    const onChange = useOnChange();
    //const editorState = useEditorState();
    const translate = useTranslate();
    const editorRef = useEditorRef();

    const onClick = () => {
        onChange(EditorState.redo(getEditorState()));
        editorRef.current.focus();
    };

    return (
        <ButtonControl onClick={onClick} text={translate('controls.redo.title')}>
            <RedoIcon />
        </ButtonControl>
    );
}

export default RedoControl;
