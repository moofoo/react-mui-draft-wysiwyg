import React from 'react';
import ToggleInlineStyleButtonControl from '../core/ToggleInlineStyleButtonControl';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import inlineStyles from '../../../types/inlineStyles';
import { useTranslate, useStore } from '../../../store';


function BoldControl() {
    const state = useStore();
    console.log("STATE", state);
    // const translate = useTranslate();

    return (
        <ToggleInlineStyleButtonControl
            inlineStyle={inlineStyles.BOLD}
            text={state.translate('controls.bold.title')}>
            <FormatBoldIcon />
        </ToggleInlineStyleButtonControl>
    );
}

export default BoldControl;
