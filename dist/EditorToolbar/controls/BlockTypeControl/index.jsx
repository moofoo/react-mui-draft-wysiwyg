import React from 'react';
import PropTypes from 'prop-types';
import DropdownControl from '../core/DropdownControl';

import {  useEditorRef, useOnChange, useCurrentBlockType, getBlockTypeToggle } from '../../../store';

function BlockTypeControl({ configuration, defaultConfiguration }) {

    const onChange = useOnChange();
    const editorRef = useEditorRef();


    const options = configuration.options || defaultConfiguration.options;

    const [value, setValue] = React.useState('default');

    const currentBlockType = useCurrentBlockType(options.map(option => option.value));

    React.useEffect(() => {
        setValue(currentBlockType);
    }, [currentBlockType]);

    const handleChange = React.useCallback((newValue) => {
        setValue(newValue);
        onChange(getBlockTypeToggle(newValue));
        editorRef.current.focus();
    }, []);

    return <DropdownControl options={options} onChange={handleChange} value={value} />;
}

BlockTypeControl.propTypes = {
    configuration: PropTypes.any,
    defaultConfiguration: PropTypes.any.isRequired,
};

export default BlockTypeControl;
