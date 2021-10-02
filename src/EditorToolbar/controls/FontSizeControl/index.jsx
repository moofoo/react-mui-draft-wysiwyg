import React from 'react';
import PropTypes from 'prop-types';

import DropdownControl from '../core/DropdownControl';
import inlineStyles from '../../../types/inlineStyles';

import { useEditorState, useOnChange, useEditorRef, getCurrentMappedStyle, toggleMappedStyle, useTranslate } from '../../../store';



FontSizeControl.propTypes = {
    pluginData: PropTypes.object.isRequired,
};

function FontSizeControl({ pluginData }) {

    const translate = useTranslate();
    const editorState = useEditorState();
    const onChange = useOnChange();
    const editorRef = useEditorRef();


    const [selectedFontSizeStyle, setSelectedFontSizeStyle] = React.useState(
        `${inlineStyles.FONT_SIZE}-default`
    );
    const styleKeys = Object.keys(pluginData.customStyleMap);

    React.useEffect(() => {
        setSelectedFontSizeStyle(
            getCurrentMappedStyle(
                styleKeys,
                `${inlineStyles.FONT_SIZE}-default`
            )
        );
    }, [editorState, styleKeys]);

    const handleChange = (newInlineStyle) => {
        setSelectedFontSizeStyle(newInlineStyle);
        const newEditorState = toggleMappedStyle(

            styleKeys,
            newInlineStyle
        );
        onChange(newEditorState);
        editorRef.current.focus();
    };

    return (
        <DropdownControl
            options={styleKeys.map((inlineStyle) => ({
                text: pluginData.customStyleMap[inlineStyle].fontSize ? (
                    <span style={{ fontSize: pluginData.customStyleMap[inlineStyle].fontSize }}>
                        {pluginData.customStyleMap[inlineStyle].fontSize}
                    </span>
                ) : (
                    'default'
                ),
                value: inlineStyle,
            }))}
            onChange={handleChange}
            renderValue={(style) =>
                pluginData.customStyleMap[style].fontSize ||
                translate('controls.fontSize.labels.default')
            }
            value={selectedFontSizeStyle}
            minWidth={50}
        />
    );
}

export default FontSizeControl;
