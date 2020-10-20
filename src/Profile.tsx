import { Avatar, Grid, Paper, Typography, useTheme } from "@material-ui/core";
import React from "react";

interface ProfileProps {
  nom: string;
  prenom: string;
  description: string;
  age?: number;
}

const Profile: React.FC<ProfileProps> = ({ nom, prenom, description, age }) => {
  const theme = useTheme();
  return (
    <div>
      <Paper style={{ padding: 10 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <Paper style={{ padding: theme.spacing() }}>
              <Avatar>DL</Avatar>
              <Typography>{`${prenom} ${nom}`}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper>
              <Typography>{description}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default Profile;
