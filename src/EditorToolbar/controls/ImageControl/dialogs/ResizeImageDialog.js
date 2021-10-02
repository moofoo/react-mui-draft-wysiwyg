import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import SizeInputs from './inputs/SizeInputs';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ImageToUpload from './image/ImageToUpload';

import { useTranslate } from '../../../../store';

function ResizeImageDialog({ open, onClose, src, originalWidth, originalHeight, onSave }) {


    const translate = useTranslate();


    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);

    React.useEffect(() => {
        setWidth(originalWidth);
        setHeight(originalHeight);
    }, [originalWidth, originalHeight]);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        onSave(width, height);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <SizeInputs
                        width={width}
                        height={height}
                        onChangeWidth={setWidth}
                        onChangeHeight={setHeight}
                        originalWidth={originalWidth}
                        originalHeight={originalHeight}
                    />
                    <Grid container alignItems="center" justifyContent="center">
                        <ImageToUpload src={src} width={width} height={height} />
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button type="button" onClick={onClose}>
                        {translate('controls.image.actions.cancel')}
                    </Button>
                    <Button type="submit">
                        {translate('controls.image.actions.resize')}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

ResizeImageDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    originalWidth: PropTypes.number.isRequired,
    originalHeight: PropTypes.number.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default ResizeImageDialog;
