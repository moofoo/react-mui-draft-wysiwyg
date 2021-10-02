import React from 'react';
import ToggleBlockTypeButtonControl from '../core/ToggleBlockTypeButtonControl';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import blockStyles from '../../../types/blockStyles';

import {  useTranslate} from '../../../store';


function OrderedListControl() {
    const translate = useTranslate();



    return (
        <ToggleBlockTypeButtonControl
            blockType={blockStyles.OL}
            text={translate('controls.orderedList.title')}>
            <FormatListNumberedIcon />
        </ToggleBlockTypeButtonControl>
    );
}

export default OrderedListControl;
