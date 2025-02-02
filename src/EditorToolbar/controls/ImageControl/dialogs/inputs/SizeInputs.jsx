import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';


import { useTranslate } from '../../../../../store';


function SizeInputs({
    originalWidth,
    originalHeight,
    width,
    height,
    onChangeWidth,
    onChangeHeight,
}) {
    const translate = useTranslate();


    const [maintainAspectRatio, setMaintainAspectRatio] = React.useState(true);
    const aspectRatio = originalWidth / originalHeight;

    const handleChangeWidth = (ev) => {
        ev.stopPropagation();
        const value = ev.currentTarget.value;
        const w = value === '' || isNaN(value) ? 0 : parseInt(value);
        onChangeWidth(w);
        if (maintainAspectRatio) {
            onChangeHeight(Math.round(w / aspectRatio));
        }
    };

    const handleChangeHeight = (ev) => {
        ev.stopPropagation();
        const value = ev.currentTarget.value;
        const h = value === '' || isNaN(value) ? 0 : parseInt(value);
        onChangeHeight(h);
        if (maintainAspectRatio) {
            onChangeWidth(Math.round(h * aspectRatio));
        }
    };

    const handleClickAspectRatio = () => {
        const newMaintainAspectRatio = !maintainAspectRatio;
        setMaintainAspectRatio(newMaintainAspectRatio);
        if (newMaintainAspectRatio) {
            onChangeHeight(Math.round(width / aspectRatio));
        }
    };

    return (
        <Grid container direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
            <Grid item>
                <TextField
                    type="number"
                    label={translate('controls.image.labels.width')}
                    size="small"
                    value={width}
                    onChange={handleChangeWidth}
                    onClick={(ev) => ev.stopPropagation()}
                    style={{ maxWidth: 90 }}
                />
            </Grid>
            <Grid item>
                <IconButton onClick={handleClickAspectRatio} size="small">
                    {maintainAspectRatio ? <LockIcon /> : <LockOpenIcon />}
                </IconButton>
            </Grid>
            <Grid item>
                <TextField
                    type="number"
                    label={translate('controls.image.labels.height')}
                    size="small"
                    value={height}
                    onChange={handleChangeHeight}
                    onClick={(ev) => ev.stopPropagation()}
                    style={{ maxWidth: 90 }}
                />
            </Grid>
        </Grid>
    );
}

SizeInputs.propTypes = {
    originalWidth: PropTypes.number.isRequired,
    originalHeight: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onChangeWidth: PropTypes.func.isRequired,
    onChangeHeight: PropTypes.func.isRequired,
};

export default SizeInputs;
