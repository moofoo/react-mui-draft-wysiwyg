import React from 'react';
import ButtonControl from '../core/ButtonControl';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import { useOnChange, useSelectionCollapsed , useTranslate, getToggleLink} from '../../../store';


function LinkRemoveControl() {
    const isCollapsed = useSelectionCollapsed();
    const translate = useTranslate();
const onChange = useOnChange();

    const onClick = React.useCallback(() => {
        onChange(getToggleLink());
    }, []);

    return (
        <ButtonControl
            onClick={onClick}
            text={translate('controls.linkRemove.title')}
            disabled={isCollapsed}>
            <LinkOffIcon />
        </ButtonControl>
    );
}

export default LinkRemoveControl;
