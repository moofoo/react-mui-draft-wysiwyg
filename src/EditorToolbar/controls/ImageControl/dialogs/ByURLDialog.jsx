import React from 'react';
import PropTypes from 'prop-types';

import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import ImageToUpload from './image/ImageToUpload';
import SizeInputs from './inputs/SizeInputs';

import { useTranslate } from '../../../../store';


function ByUrlDialog({ open, onClose, onSubmit }) {
    const translate = useTranslate();


    const [imageURL, setImageURL] = React.useState('');
    const [imageWidth, setImageWidth] = React.useState(0);
    const [imageOriginalWidth, setImageOriginalWidth] = React.useState(0);
    const [imageHeight, setImageHeight] = React.useState(0);
    const [imageOriginalHeight, setImageOriginalHeight] = React.useState(0);
    const [isUploading, setIsUploading] = React.useState(false);
    const [isValidImage, setIsValidImage] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);
    const [changeTimeout, setChangeTimeout] = React.useState(null);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        onSubmit({ imageURL, imageWidth, imageHeight });
    };

    const resetForm = () => {
        setIsValidImage(false);
        setImageURL('');
    };

    const handleURLChange = (url) => {
        setImageURL(url);
        if (changeTimeout) {
            clearTimeout(changeTimeout);
            setChangeTimeout(null);
        }

        if (url === '') {
            setHasError(false);
            setIsValidImage(false);
            return;
        }

        const to = setTimeout(() => {
            setIsUploading(true);
            // eslint-disable-next-line no-undef
            const image = new Image();
            image.onload = function () {
                setImageWidth(this.width);
                setImageOriginalWidth(this.width);
                setImageHeight(this.height);
                setImageOriginalHeight(this.height);
                setIsUploading(false);
                setIsValidImage(true);
                setHasError(false);
            };
            image.onerror = function () {
                setIsUploading(false);
                setIsValidImage(false);
                setHasError(true);
            };
            image.src = url;
            setChangeTimeout(null);
        }, 1000);
        setChangeTimeout(to);
    };

    let content = null;

    if (isUploading) content = <CircularProgress />;
    else if (isValidImage && imageURL)
        content = <ImageToUpload src={imageURL} height={imageHeight} width={imageWidth} />;
    else if (hasError && !isValidImage && imageURL)
        content = (
            <Typography variant="subtitle1" color="error" gutterBottom>
                {translate('controls.image.errorMessages.notValidImage')}
            </Typography>
        );

    return (
        <Dialog
            open={open}
            onClose={onClose}
            TransitionProps={{
                onEnter: resetForm
            }}>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    {isValidImage && imageURL !== '' && (
                        <SizeInputs
                            width={imageWidth}
                            onChangeHeight={setImageHeight}
                            height={imageHeight}
                            originalWidth={imageOriginalWidth}
                            originalHeight={imageOriginalHeight}
                            onChangeWidth={setImageWidth}
                        />
                    )}
                    <Grid container alignItems="center" justifyContent="center">
                        {content}
                    </Grid>
                    <TextField
                        autoFocus
                        label={translate('controls.image.labels.url')}
                        value={imageURL}
                        onChange={(ev) => handleURLChange(ev.currentTarget.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button type="button" onClick={onClose} color="primary">
                        {translate('controls.image.actions.cancel')}
                    </Button>
                    <Button type="submit" color="primary" disabled={!isValidImage}>
                        {translate('controls.image.actions.add')}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

ByUrlDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default ByUrlDialog;
