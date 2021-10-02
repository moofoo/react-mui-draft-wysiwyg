import React from 'react';
import ToggleInlineStyleButtonControl from '../core/ToggleInlineStyleButtonControl';
import CodeIcon from '@mui/icons-material/Code';
import inlineStyles from '../../../types/inlineStyles';

import { useTranslate } from '../../../store';

function CodeControl() {
    const translate = useTranslate();


    return (
        <ToggleInlineStyleButtonControl
            inlineStyle={inlineStyles.CODE}
            text={translate('controls.code.title')}>
            <CodeIcon />
        </ToggleInlineStyleButtonControl>
    );
}

export default CodeControl;
