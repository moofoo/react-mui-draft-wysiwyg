import React from 'react';
import PropTypes from 'prop-types';
import ColorSelectorControl from '../core/ColorSelectorControl';

import { useSelectionCollapsed, useOnChange, useEditorRef, getCurrentMappedStyle, toggleMappedStyle } from '../../../store';


function ToggleInlineStyleColorSelectorControl({
    configuration,
    defaultConfiguration,
    pluginData,
    colorCssProp,
    inlineStyle,
    text,
    children,
}) {

    const isCollapsed = useSelectionCollapsed();
    const onChange = useOnChange();
    const editorRef = useEditorRef();


    const [selectedColor, setSelectedColor] = React.useState(null);
    const options = configuration.options || defaultConfiguration.options;

    React.useEffect(() => {
        const selectededInlineStyle = getCurrentMappedStyle(
            Object.keys(pluginData.customStyleMap),
            null
        );
        setSelectedColor(
            selectededInlineStyle && pluginData.customStyleMap[selectededInlineStyle]
                ? {
                      color: pluginData.customStyleMap[selectededInlineStyle][colorCssProp],
                      value: selectededInlineStyle,
                  }
                : null
        );
    }, [editorState, pluginData.customStyleMap, colorCssProp]);

    const handleSelectColor = (selectedColorData) => {
        setSelectedColor(selectedColorData);
        const newEditorState = toggleMappedStyle(
            Object.keys(pluginData.customStyleMap),
            selectedColorData ? selectedColorData.value : ''
        );
        onChange(newEditorState);
        editorRef.current.focus();
    };

    return (
        <ColorSelectorControl
            text={text}
            onSelectColor={handleSelectColor}
            selectedColor={selectedColor}
            colorsPerRow={configuration.colorsPerRow || defaultConfiguration.colorsPerRow}
            disabled={isCollapsed}
            colors={options.map((option) => ({
                text: option.text,
                color: option.value,
                value: `${inlineStyle}-${option.value}`,
            }))}>
            {children}
        </ColorSelectorControl>
    );
}

ToggleInlineStyleColorSelectorControl.propTypes = {
    configuration: PropTypes.object,
    defaultConfiguration: PropTypes.object.isRequired,
    pluginData: PropTypes.object.isRequired,
    colorCssProp: PropTypes.string.isRequired,
    inlineStyle: PropTypes.string.isRequired,
    text: PropTypes.string,
    children: PropTypes.any,
};

export default ToggleInlineStyleColorSelectorControl;
