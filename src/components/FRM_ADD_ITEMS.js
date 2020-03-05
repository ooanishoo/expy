import React from "react";
import { Button, Menu, MenuItem, Navigation } from "react-mdl";
import { Link } from "react-router-dom";

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
            Internship
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/add-internship" style={style}>
            Company
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/add-internship" style={style}>
            Person
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/add-internship" style={style}>
            Internship Template
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default FRM_ADD_ITEMS;
