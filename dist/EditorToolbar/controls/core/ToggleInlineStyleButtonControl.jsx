import React from 'react';
import PropTypes from 'prop-types';
import { RichUtils } from 'draft-js';
import ButtonControl from './ButtonControl';

import { useEditorRef,  useOnChange, getEditorState, hasSelectionStyle, useSelectionCollapsed} from '../../../store';


ToggleInlineStyleButtonControl.propTypes = {
    inlineStyle: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    text: PropTypes.any,
};

function ToggleInlineStyleButtonControl({ inlineStyle, children, text }) {
    const editorRef = useEditorRef();
    const isCollapsed = useSelectionCollapsed();
    const onChange = useOnChange();

    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
        setIsActive(hasSelectionStyle(inlineStyle));
    }, [inlineStyle]);

    const onClick = () => {
        const newEditorState = RichUtils.toggleInlineStyle(getEditorState(), inlineStyle);
        onChange(newEditorState);
        editorRef.current.focus();
    };

    return (
        <ButtonControl
            text={text}
            onClick={onClick}
            active={isActive}
            disabled={isCollapsed}>
            {children}
        </ButtonControl>
    );
}

export default ToggleInlineStyleButtonControl;
