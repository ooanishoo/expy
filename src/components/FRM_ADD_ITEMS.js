import React from "react";
import { Button, Menu, MenuItem } from "react-mdl";
import { Link } from "react-router-dom";
import {
  Avatar,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemIcon
} from "@material-ui/core";

const style = {
  color: "grey",
  textDecoration: "none"
};

function FRM_ADD_ITEMS() {
  return (
    <div style={{ position: "relative" }}>
      <Button
        raised
        ripple
        style={{ lineHeight: 0, color: "white" }}
        id="add-item"
      >
        Add
      </Button>
      <Menu target="add-item" align="right">
        <MenuItem>
          <Link to="/add-internship" style={style}>
            <ListItemText primary="Internship" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/host-company" style={style}>
            <ListItemText primary="Company" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/add-internship" style={style}>
            <ListItemText primary="Person" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/add-internship" style={style}>
            <ListItemText primary="Internship Template" />
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default FRM_ADD_ITEMS;
