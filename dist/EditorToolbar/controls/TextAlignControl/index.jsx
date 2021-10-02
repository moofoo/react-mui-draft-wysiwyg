import React from 'react';
import { Modifier, EditorState } from 'draft-js';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ButtonControl from '../core/ButtonControl';


import { useEditorState, useOnChange, useEditorRef } from '../../../store';


function TextAlignControl() {
const editorState = useEditorState();
    const onChange = useOnChange();
    const editorRef = useEditorRef();

    const [selectedTextAlign, setSelectedTextAlign] = React.useState(null);

    React.useEffect(() => {
        const selection = editorState.getSelection();
        const currentBlock = editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey());
        const blockData = currentBlock.getData();
        if (blockData && blockData.get('textAlign')) {
            setSelectedTextAlign(blockData.get('textAlign'));
        } else {
            setSelectedTextAlign(null);
        }
    }, [editorState]);

    const toggle = (textAlign)  => {
        setSelectedTextAlign(textAlign);

        const newContentState = Modifier.mergeBlockData(
            editorState.getCurrentContent(),
            editorState.getSelection(),
            { textAlign }
        );
        onChange(EditorState.push(editorState, newContentState, 'change-block-data'));
        editorRef.current.focus();
    };

    const toggleLeft = React.useCallback(() => toggle('left'), []);
    const toggleCenter = React.useCallback(() => toggle('center'), []);
    const toggleRight = React.useCallback(() => toggle('right'), []);
    const toggleJustify = React.useCallback(() => toggle('justify'), []);

    return (
        <React.Fragment>
            <ButtonControl
                active={selectedTextAlign === 'left'}
                onClick={toggleLeft}
                text={translate('controls.textAlign.actions.alignLeft')}>
                <FormatAlignLeftIcon />
            </ButtonControl>
            <ButtonControl
                active={selectedTextAlign === 'center'}
                onClick={toggleCenter}
                text={translate('controls.textAlign.actions.alignCenter')}>
                <FormatAlignCenterIcon />
            </ButtonControl>
            <ButtonControl
                active={selectedTextAlign === 'right'}
                onClick={toggleRight}
                text={translate('controls.textAlign.actions.alignRight')}>
                <FormatAlignRightIcon />
            </ButtonControl>
            <ButtonControl
                active={selectedTextAlign === 'justify'}
                onClick={toggleJustify}
                text={translate('controls.textAlign.actions.justify')}>
                <FormatAlignJustifyIcon />
            </ButtonControl>
        </React.Fragment>
    );
}

TextAlignControl.propTypes = {};

export default TextAlignControl;
