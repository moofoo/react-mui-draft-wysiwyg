import React from 'react';
import { EditorState } from 'draft-js';
import ButtonControl from '../core/ButtonControl';
import UndoIcon from '@mui/icons-material/Undo';

import {  useStore} from '../../../store';
//useTranslate, useEditorRef, useOnChange, getEditorState,

export default function UndoControl() {

    const state = useStore();

    console.log("STATE",state);

    //const onChange = useOnChange();
    //const editorState = useEditorState();
    //const translate = useTranslate();
    //const editorRef = useEditorRef();

    // const editorFocus = useEditorFocus();


    const onClick = () => {
        //    onChange(EditorState.undo(editorState));
        state.onChange(EditorState.undo(state.editorState)); //getEditorState()));
        state.editorRef.current.focus();
    };

    return (
        <ButtonControl onClick={onClick} text={state.translate('controls.undo.title')}>
            <UndoIcon />
        </ButtonControl>
    );
}