import React from 'react';
import ToggleBlockTypeButtonControl from '../core/ToggleBlockTypeButtonControl';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useTranslate } from '../../../store';

function UnorderedListControl() {
    const translate = useTranslate();

    return (
        <ToggleBlockTypeButtonControl
            blockType="unordered-list-item"
            text={translate('controls.unorderedList.title')}>
            <FormatListBulletedIcon />
        </ToggleBlockTypeButtonControl>
    );
}

export default UnorderedListControl;
