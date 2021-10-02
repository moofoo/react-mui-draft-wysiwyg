import React from 'react';
import ButtonControl from '../core/ButtonControl';
import LinkIcon from '@mui/icons-material/Link';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import entities from '../../../types/entities';

import { useTranslate, useEditorRef, applyEntityToSelection, useOnChange, useSelectionCollapsed } from '../../../store';

function LinkAddControl() {

    const translate = useTranslate();
    const editorRef = useEditorRef();
    const onChange = useOnChange();
    const isCollapsed = useSelectionCollapsed();

    const editor = useEditor();




    const editorFocus = editorRef.current.focus.bind(editorRef.current);

    const [isDialogOpened, setIsDialogOpened] = React.useState(false);

    const [link, setLink] = React.useState('');

    const formRef = React.createRef();

    const onClick = React.useCallback(() => {
        setLink('');
        setIsDialogOpened(true);
    }, []);

    const handleCloseDialog = React.useCallback(() => {
        setIsDialogOpened(false);
    }, []);

    const onChangeLink = React.useCallback((ev) => {
        setLink(ev.currentTarget.value);
    }, []);

    const handleSubmit = React.useCallback((ev) => {
        ev.preventDefault();
        if (link === '') return;
        handleCloseDialog();
        onChange(
            applyEntityToSelection(entities.LINK, 'MUTABLE', {url:link})
        );
        editorFocus();
    }, []);

    return (
        <React.Fragment>
            <ButtonControl
                onClick={onClick}
                text={translate('controls.linkAdd.title')}
                disabled={isCollapsed}>
                <LinkIcon />
            </ButtonControl>
            {isDialogOpened ?
            <Dialog open={isDialogOpened} onClose={handleCloseDialog}>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            label={translate('controls.linkAdd.labels.link')}
                            value={link}
                            onChange={onChangeLink}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button type="button" onClick={handleCloseDialog} color="primary">
                            {translate('controls.linkAdd.actions.cancel')}
                        </Button>
                        <Button type="submit" color="primary" disabled={link === ''}>
                            {translate('controls.linkAdd.actions.add')}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog> : null }
        </React.Fragment>
    );
}

export default LinkAddControl;
