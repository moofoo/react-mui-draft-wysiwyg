import React from 'react';
import ToggleInlineStyleButtonControl from '../core/ToggleInlineStyleButtonControl';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import inlineStyles from '../../../types/inlineStyles';
import { useTranslate } from '../../../store';

function UnderlineControl() {

    const translate = useTranslate();


    return (
        <ToggleInlineStyleButtonControl
            inlineStyle={inlineStyles.UNDERLINE}
            text={translate('controls.underline.title')}>
            <FormatUnderlinedIcon />
        </ToggleInlineStyleButtonControl>
    );
}

export default UnderlineControl;
