import React from 'react';
import PropTypes from 'prop-types';

import ButtonControl from '../core/ButtonControl';
import ImageIcon from '@mui/icons-material/Image';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PublishIcon from '@mui/icons-material/Publish';
import LinkIcon from '@mui/icons-material/Link';
import entities from '../../../types/entities';

import { EditorState, AtomicBlockUtils } from 'draft-js';
import ByUrlDialog from './dialogs/ByURLDialog';
import UploadDialog from './dialogs/UploadDialog';
import ResizeImageDialog from './dialogs/ResizeImageDialog';

import { useEditorState, useOnChange, useEditorRef,   useTranslate } from '../../../store';


function ImageControl({ configuration, defaultConfiguration }) {

    const translate = useTranslate();
    const editorState = useEditorState();
    const onChange = useOnChange();
    const editorRef = useEditorRef();


    const menuId = Math.random().toString(36).substring(8);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isUploadDialogOpened, setIsUploadDialogOpened] = React.useState(false);
    const [isUrlDialogOpened, setIsUrlDialogOpened] = React.useState(false);
    const uploadCallback = configuration.uploadCallback || defaultConfiguration.uploadCallback;

    const setAnchorHandler = React.useCallback((ev) => {
        setAnchorEl(ev.currentTarget)
    }, []);

    const unsetAnchorHandler = React.useCallback(() => {
        setAnchorEl(null);
    }, []);

    const imageEntityToResize = editor.resizeImageEntityKey
        ? editorState.getCurrentContent().getEntity(editor.resizeImageEntityKey)
        : null;

    const handleSubmitImage = ({ imageURL, imageWidth, imageHeight }) => {
        if (imageURL === '') return;
        setIsUrlDialogOpened(false);
        setIsUploadDialogOpened(false);

        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(entities.IMAGE, 'IMMUTABLE', {
            src: imageURL,
            width: imageWidth,
            height: imageHeight,
        });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.push(
            editorState,
            contentStateWithEntity,
            'apply-entity'
        );
        editor.onChange(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '));
        editorFocus();
    };

    const handleResizeImage = (width, height) => {
        editor.hideResizeImageDialog();
        const contentState = editorState.getCurrentContent();
        const newEditorState = EditorState.push(
            editorState,
            contentState.mergeEntityData(editor.resizeImageEntityKey, { width, height }),
            'apply-entity'
        );
        onChange(newEditorState);
        editorRef.current.focus();
    };

    const clickItemHandler = React.useCallback(() => {
        setIsUploadDialogOpened(true);
        setAnchorEl(null);
    }, []);


const onCloseHandler = React.useCallback(() => {
    setIsUrlDialogOpened(false)
    }, []);

    const resizeOnCloseHandler = React.useCallback(() => {
    //    editor.hideResizeImageDialog()
    }, [])

    return (
        <React.Fragment>
            <ButtonControl
                onClick={setAnchorHandler}
                text={translate('controls.image.title')}
                aria-controls={menuId}
                aria-haspopup="true">
                <ImageIcon />
            </ButtonControl>

            <Popover
                id={menuId}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={unsetAnchorHandler}>
                <List
                    component="nav"
                    aria-label={translate('controls.image.labels.insertOptions')}>
                    <ListItem
                        button
                        onClick={clickItemHandler}>
                        <ListItemIcon>
                            <PublishIcon />
                        </ListItemIcon>
                        <ListItemText primary={translate('controls.image.actions.upload')} />
                    </ListItem>
                    <ListItem
                        button
                        onClick={clickItemHandler}>
                        <ListItemIcon>
                            <LinkIcon />
                        </ListItemIcon>
                        <ListItemText primary={translate('controls.image.actions.url')} />
                    </ListItem>
                </List>
            </Popover>

            <ByUrlDialog
                onSubmit={handleSubmitImage}
                onClose={onCloseHandler}
                open={isUrlDialogOpened}
            />

            <UploadDialog
                onSubmit={handleSubmitImage}
                onClose={onCloseHandler}
                open={isUploadDialogOpened}
                uploadCallback={uploadCallback}
            />

            <ResizeImageDialog
                open={editor.isResizeImageDialogVisible}
                onClose={resizeOnCloseHandler}
                src={imageEntityToResize ? imageEntityToResize.getData().src : ''}
                originalWidth={imageEntityToResize ? imageEntityToResize.getData().width : 0}
                originalHeight={imageEntityToResize ? imageEntityToResize.getData().height : 0}
                onSave={handleResizeImage}
            />
        </React.Fragment>
    );
}

ImageControl.propTypes = {
    configuration: PropTypes.object.isRequired,
    defaultConfiguration: PropTypes.object.isRequired,
};

export default ImageControl;
