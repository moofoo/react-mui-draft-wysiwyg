import React from 'react';
import MUIEditor, { MUIEditorState } from 'react-mui-draft-wysiwyg';
import toHTML from 'react-mui-draft-wysiwyg/src/conversion/toHTML';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const useStyles = makeStyles((theme) => ({
    optionsWrapper: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(3),
    },
}));

function App() {
    const [editorState, setEditorState] = React.useState(MUIEditorState.createEmpty());
    const [isReadOnly, setIsReadOnly] = React.useState(false);
    const [lang, setLang] = React.useState('en');
    const [toolbarPosition, setToolbarPosition] = React.useState('top');
    const [html, setHtml] = React.useState('');
    const classes = useStyles();

    const onChange = (newState) => {
        setEditorState(newState);
        setHtml(toHTML(newState.getCurrentContent()));
    };

    return (
        <Container>
            <div className={classes.optionsWrapper}>
                <Grid container alignItems="center" justifyContent="flex-end" spacing={4}>
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={isReadOnly}
                                    onChange={(ev) => setIsReadOnly(ev.target.checked)}
                                />
                            }
                            label="Read only"
                        />
                    </Grid>
                    <Grid item>
                        <InputLabel id="toolbar-position-select-label">Toolbar position</InputLabel>
                        <Select
                            fullWidth
                            labelId="toolbar-position-select-label"
                            id="toolbar-position-select"
                            value={toolbarPosition}
                            onChange={(ev) => setToolbarPosition(ev.target.value)}>
                            <MenuItem value="invisible">Invisible</MenuItem>
                            <MenuItem value="top">Top</MenuItem>
                            <MenuItem value="bottom">Bottom</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item>
                        <InputLabel id="lang-select-label">Language</InputLabel>
                        <Select
                            fullWidth
                            labelId="lang-select-label"
                            id="lang-select"
                            value={lang}
                            onChange={(ev) => setLang(ev.target.value)}>
                            <MenuItem value="en">English</MenuItem>
                            <MenuItem value="es">Spanish</MenuItem>
                            <MenuItem value="ca">Catalan</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </div>

            <MUIEditor
                editorState={editorState}
                onChange={onChange}
                config={{
                    lang,
                    draftEditor: { readOnly: isReadOnly },
                    toolbar: {
                        visible: toolbarPosition !== 'invisible',
                        position: toolbarPosition === 'invisible' ? 'top' : toolbarPosition,
                    },
                }}
            />

            <pre>{html}</pre>
        </Container>
    );
}

export default App;
