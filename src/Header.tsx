import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { AppContext } from "./AppContext";
import React, { useContext } from "react";

const Header: React.FC = () => {
  const { isEditing, setIsEditing } = useContext(AppContext);
  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };
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
        <Typography variant="h6">Mon CV</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
