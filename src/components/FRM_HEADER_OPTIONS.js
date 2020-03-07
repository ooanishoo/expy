import React from "react";
import { IconButton, Menu, MenuItem } from "react-mdl";
import { Link } from "react-router-dom";
import { ListItemText, Divider } from "@material-ui/core";

const style = {
  color: "grey",
  textDecoration: "none"
};

function FRM_HEADER_OPTIONS() {
  return (
    <div style={{ position: "relative" }}>
      <IconButton
        name="person"
        id="demo-menu-lower-right"
        style={{ backgroundColor: "white", color: "#223A4D" }}
      />
      <Menu target="demo-menu-lower-right" align="right">
        <MenuItem>
          <Link to="/profile" style={style}>
            <ListItemText primary="Profile" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/settings" style={style}>
            <ListItemText primary="Settings" />
          </Link>
        </MenuItem>
        <Divider/>
        <MenuItem>
          <Link to="/logout" style={style}>
            <ListItemText primary="Logout" />
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default FRM_HEADER_OPTIONS;
