import React from "react";
import { Drawer } from "react-mdl";
import { makeStyles } from "@material-ui/core/styles";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SettingsIcon from "@material-ui/icons/Settings";
import BusinessIcon from "@material-ui/icons/Business";
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

const useStyles = makeStyles(theme => ({
  avatarContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8)
  },
  title: {
    padding: theme.spacing(2)
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  icn: {
    opacity: 0.5
  }
}));

function FRM_SIDEBAR() {
  const classes = useStyles();
  return (
    <Drawer>
      <List className={classes.root}>
        <ListItem component="a" href="/">
          <Typography
            gutterBottom
            variant="heading"
            style={{ textDecoration: "none" }}
          >
            INTERNMATCH
          </Typography>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar src="https://www.thispersondoesnotexist.com/image" />
          </ListItemAvatar>
          <ListItemText primary="Anish Maharjan" secondary="View Profile" />
        </ListItem>
        <Divider variant="middle" component="li" />

        <ListItem component="a" href="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component="a" href="/internships">
          <ListItemIcon>
            <BusinessCenterIcon />
          </ListItemIcon>
          <ListItemText primary="Internships" />
        </ListItem>
        <ListItem component="a" href="/contacts">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItem>
        <ListItem component="a" href="/companies">
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Companies" />
        </ListItem>
        <ListItem component="a" href="/preferences">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Preferences" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default FRM_SIDEBAR;
