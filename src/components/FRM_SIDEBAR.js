import React from "react";
import { Drawer, Navigation, ListItem, ListItemContent } from "react-mdl";
import { Link } from "react-router-dom";
import { Avatar, Grid, Divider, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const style = {
  color: "grey",
  textDecoration: "none"
};

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: "auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  title:{
    padding: theme.spacing(2)
  }
}));

function FRM_SIDEBAR() {
  const classes = useStyles();
  return (
    <Drawer className="drawer">
      <Grid container justify={"center"} className={classes.title}>
        <Typography variant="h5">Internmatch</Typography>
      </Grid>
      <Divider />
      <Grid justify={"center"} direction={"column"} >
        <Grid item>
          <Avatar
            alt="Remy Sharp"
            src="https://www.thispersondoesnotexist.com/image"
            className={classes.avatar}
          />
        </Grid>
        
      </Grid>
      <Divider />
      <Navigation>
        <ListItem>
          <Link to="/dashboard" style={style}>
            <ListItemContent icon="dashboard">Dashboard</ListItemContent>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/internships" style={style}>
            <ListItemContent icon="business_center">
              Internships
            </ListItemContent>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/contacts" style={style}>
            <ListItemContent icon="people">Contacts</ListItemContent>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/companies" style={style}>
            <ListItemContent icon="business">Companies</ListItemContent>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/preferences" style={style}>
            <ListItemContent icon="settings">Preferences</ListItemContent>
          </Link>
        </ListItem>
      </Navigation>
    </Drawer>
  );
}

export default FRM_SIDEBAR;
