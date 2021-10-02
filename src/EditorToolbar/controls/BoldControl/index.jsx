import React from 'react';
import ToggleInlineStyleButtonControl from '../core/ToggleInlineStyleButtonControl';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import inlineStyles from '../../../types/inlineStyles';
import { useTranslate } from '../../../store';

function BoldControl() {
    const translate = useTranslate();

    return (
        <ToggleInlineStyleButtonControl
            inlineStyle={inlineStyles.BOLD}
            text={translate('controls.bold.title')}>
            <FormatBoldIcon />
        </ToggleInlineStyleButtonControl>
    );
}

export default BoldControl;
