import React from 'react';
import PropTypes from 'prop-types';
import ButtonControl from './ButtonControl';

import { useOnChange, getBlockTypeToggle, useEditorRef} from '../../../store';


ToggleBlockTypeButtonControl.propTypes = {
    blockType: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    text: PropTypes.any,
};

function ToggleBlockTypeButtonControl({ blockType, children, text }) {
    const editorRef = useEditorRef();
    const onChange = useOnChange();


    const onClick = () => {
        onChange(getBlockTypeToggle(blockType));
        editorRef.current.focus();
    };

    return (
        <ButtonControl text={text} onClick={onClick}>
            {children}
        </ButtonControl>
    );
}

export default ToggleBlockTypeButtonControl;
