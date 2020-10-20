import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme
} from "@material-ui/core";
import React from "react";

interface ProfileEditorProps {
  nom: string;
  prenom: string;
  description: string;
  age?: number;
}

const ProfileEditor: React.FC<ProfileEditorProps> = ({
  nom,
  prenom,
  description,
  age
}) => {
  const theme = useTheme();
  return (
    <div>
      <Paper style={{ padding: 10 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <Paper style={{ padding: theme.spacing() }}>
              <Avatar>DL</Avatar>
              <TextField value={nom} />
              <TextField value={prenom} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper>
              <TextField value={description} multiline rows={4} />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default ProfileEditor;
