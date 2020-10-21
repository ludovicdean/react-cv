// import React from "react"
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { AppContext } from "./AppContext";
import React, { useContext, useState } from "react";

interface ExperienceProps {
    entreprise:string;
    poste:string;
    poste_description:string;
}

const Experience: React.FC<ExperienceProps> = ({ entreprise, poste, poste_description }) => {
    const [isEditing, setIsEditing] = useState(false);
    const toggleIsEditing = () => {
        setIsEditing(!isEditing);
    };
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
                        <Typography>Entreprise : {entreprise}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <Typography>Poste : {poste}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <Typography>Description : {poste_description}</Typography>
                    </Paper>
                </Grid>
            </Grid>
            </Paper>
        </div>
    )
}
    export default Experience
