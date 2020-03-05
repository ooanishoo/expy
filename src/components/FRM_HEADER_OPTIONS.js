import React from "react";
import { IconButton, Menu, MenuItem } from "react-mdl";


function FRM_HEADER_OPTIONS() {
  return (
    <div style={{ position: "relative" }}>
      <IconButton name="person" id="demo-menu-lower-right"  style={{backgroundColor: "white", color: '#223A4D'}} />
      <Menu target="demo-menu-lower-right" align="right">
        <MenuItem>Profile</MenuItem>
        <MenuItem>Log out</MenuItem>
      </Menu>
    </div>
  );
}

export default FRM_HEADER_OPTIONS;
