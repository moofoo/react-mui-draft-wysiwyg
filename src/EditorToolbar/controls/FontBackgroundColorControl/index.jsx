import React from 'react';
import PropTypes from 'prop-types';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import inlineStyles from '../../../types/inlineStyles';
import ToggleInlineStyleColorSelectorControl from '../core/ToggleInlineStyleColorSelectorControl';

import { useTranslate, } from '../../../store';

function FontBackgroundColorControl({ configuration, defaultConfiguration, pluginData }) {

    const translate = useTranslate();



    return (
        <ToggleInlineStyleColorSelectorControl
            text={translate('controls.fontBackgroundColor.title')}
            configuration={configuration}
            defaultConfiguration={defaultConfiguration}
            inlineStyle={inlineStyles.FONT_BACKGROUND}
            pluginData={pluginData}
            colorCssProp="backgroundColor">
            <BorderColorIcon />
        </ToggleInlineStyleColorSelectorControl>
    );
}

FontBackgroundColorControl.propTypes = {
    configuration: PropTypes.object,
    defaultConfiguration: PropTypes.object.isRequired,
    pluginData: PropTypes.object.isRequired,
};

export default FontBackgroundColorControl;
