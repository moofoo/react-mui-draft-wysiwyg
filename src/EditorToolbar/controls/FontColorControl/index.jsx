import React from 'react';
import PropTypes from 'prop-types';

import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import inlineStyles from '../../../types/inlineStyles';
import ToggleInlineStyleColorSelectorControl from '../core/ToggleInlineStyleColorSelectorControl';

import { useTranslate } from '../../../store';

function FontColorControl({ configuration, defaultConfiguration, pluginData }) {
    const translate = useTranslate();
    return (
        <ToggleInlineStyleColorSelectorControl
            text={translate('controls.fontColor.title')}
            configuration={configuration}
            defaultConfiguration={defaultConfiguration}
            inlineStyle={inlineStyles.FONT_COLOR}
            pluginData={pluginData}
            colorCssProp="color">
            <FormatColorTextIcon />
        </ToggleInlineStyleColorSelectorControl>
    );
}

FontColorControl.propTypes = {
    configuration: PropTypes.object,
    defaultConfiguration: PropTypes.object.isRequired,
    pluginData: PropTypes.object.isRequired,
};

export default FontColorControl;
