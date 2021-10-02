import React from 'react';
import PropTypes from 'prop-types';
import DropdownControl from '../core/DropdownControl';
import inlineStyles from '../../../types/inlineStyles';

import {  useOnChange, useEditorRef, getCurrentMappedStyle, toggleMappedStyle} from '../../../store';


function FontFamilyControl({ pluginData }) {

    const onChange = useOnChange();
const editorRef = useEditorRef();

    const [selectedFontFamilyStyle, setSelectedFontFamilyStyle] = React.useState(
        `${inlineStyles.FONT_FAMILY}-default`
    );
    const styleKeys = Object.keys(pluginData.customStyleMap);

    React.useEffect(() => {
        setSelectedFontFamilyStyle(
            getCurrentMappedStyle(styleKeys,   `${inlineStyles.FONT_FAMILY}-default`)
        );
    }, [styleKeys.toString()]);

    const handleChange = (newInlineStyle) => {
        setSelectedFontFamilyStyle(newInlineStyle);



        const newEditorState = toggleMappedStyle(styleKeys, newInlineStyle);

        onChange(newEditorState);
        editorRef.current.focus();

    };

    return (
        <DropdownControl
            options={styleKeys.map((inlineStyle) => ({
                value: inlineStyle,
                text: pluginData.customStyleMap[inlineStyle].fontFamily ? (
                    <span
                        style={{
                            fontFamily: pluginData.customStyleMap[inlineStyle].fontFamily,
                        }}>
                        {pluginData.customStyleMap[inlineStyle].fontFamily}
                    </span>
                ) : (
                    'default'
                ),
            }))}
            onChange={handleChange}
            value={selectedFontFamilyStyle}
        />
    );
}

FontFamilyControl.propTypes = {
    pluginData: PropTypes.any.isRequired,
};

export default FontFamilyControl;
