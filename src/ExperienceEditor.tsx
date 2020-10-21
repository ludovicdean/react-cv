import React from "react"
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";

interface ExperienceEditorProps {
    entreprise:string;
    poste:string;
    poste_description:string;
}

const ExperienceEditor: React.FC<ExperienceEditorProps> = ({
     entreprise, 
     poste, 
     poste_description 
    }) => {
    return (
        <div>
            <Paper elevation={3}>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu">
                        <EditIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={2}>
                    <Paper>
                        <TextField label="Entreprise : " value={entreprise} fullWidth={true}></TextField>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <TextField label ="Poste : " value={poste} fullWidth={true}></TextField>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <TextField label="Description : " value={poste_description} multiline rows={4} fullWidth={true}></TextField>
                    </Paper>
                </Grid>
            </Grid>
            </Paper>
        </div>
    )
}
    export default ExperienceEditor
