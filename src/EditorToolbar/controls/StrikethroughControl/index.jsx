import React from 'react';
import ToggleInlineStyleButtonControl from '../core/ToggleInlineStyleButtonControl';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import inlineStyles from '../../../types/inlineStyles';

import { useTranslate } from '../../../store';

function StrikethroughControl() {
    const translate = useTranslate();


    return (
        <ToggleInlineStyleButtonControl
            inlineStyle={inlineStyles.STRIKETHROUGH}
            text={translate('controls.strikethrough.title')}>
            <FormatStrikethroughIcon />
        </ToggleInlineStyleButtonControl>
    );
}

export default StrikethroughControl;
