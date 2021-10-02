import React from 'react';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import makeStyles from '@mui/styles/makeStyles';

import { translateLiteralWithPrefix } from '../../../utils/translateUtils';

import { useTranslate } from '../../../store';

const useStyles = makeStyles((theme) => ({
    selectControl: {
        margin: theme.spacing(1),
    },
}));

function DropdownControl({ value, onChange, options, minWidth = 120, ...rest }) {
    const classes = useStyles();
    const translate = useTranslate();

    return (
        <Select
            value={value}
            onChange={(ev) => onChange(ev.target.value)}
            className={classes.selectControl}
            style={{ minWidth }}
            {...rest}>
            {options.map((option) => (
                <MenuItem key={option.value || 'empty'} value={option.value}>
                    {option.text ? translateLiteralWithPrefix(option.text, translate) : ''}
                </MenuItem>
            ))}
        </Select>
    );
}

DropdownControl.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    minWidth: PropTypes.number,
};

export default DropdownControl;
