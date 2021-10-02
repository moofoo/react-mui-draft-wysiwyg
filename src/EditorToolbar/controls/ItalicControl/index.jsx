import React from 'react';
import ToggleInlineStyleButtonControl from '../core/ToggleInlineStyleButtonControl';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import inlineStyles from '../../../types/inlineStyles';
import { useTranslate } from '../../../store';

function ItalicControl() {
    const translate = useTranslate();


    return (
        <ToggleInlineStyleButtonControl
            inlineStyle={inlineStyles.ITALIC}
            text={translate('controls.italic.title')}>
            <FormatItalicIcon />
        </ToggleInlineStyleButtonControl>
    );
}

export default ItalicControl;
