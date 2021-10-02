import React from 'react';

export default function useEditorState(editor) {
    const [state, setState] = React.useState(editor.getEditorState());

    const currentState = editor.getEditorState();

    React.useEffect(() => {
        setState(currentState);
    }, [currentState])

    return state;
}
