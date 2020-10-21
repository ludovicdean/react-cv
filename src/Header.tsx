import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from '@material-ui/icons/Add';
import { AppContext } from "./AppContext";
import React, { useContext } from "react";
import ExperienceEditor from "./ExperienceEditor";

const Header: React.FC = () => {
  const { isEditing, setIsEditing } = useContext(AppContext);
  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };
  const addExperienceEditor = () => {
    return (
      ExperienceEditor
    )
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleIsEditing}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={addExperienceEditor}
        >
          <AddIcon />
        </IconButton>
        <Typography variant="h6">Mon CV</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
