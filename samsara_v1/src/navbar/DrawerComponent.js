import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailIcon from "@material-ui/icons/Mail";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import ApartmentSharpIcon from "@material-ui/icons/ApartmentSharp";
import { connect } from "react-redux";
import { logOut } from "../store/action/authActions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 271,
  },
  listStyle: {
    padding: "16px",
  },
  menuButton: {
    color: (props) => props.color,
  },
  bottomPush: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 10,
    width: 271,
  },
  iconStyle: {
    color: "#c9d1d4",
  },
}));
const DrawerComponent = (props) => {
  const history = useHistory();
  const classes = useStyles(props);
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const [error, setError] = useState("");

  async function handleLogout() {
    setError("");

    try {
      await props.logOut();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }
  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className={classes.listStyle}>
        <ListItem button key="Favorites">
          <ListItemIcon>
            <FavoriteIcon className={classes.iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Favorites" />
        </ListItem>
        <ListItem button key="Alerts">
          <ListItemIcon>
            <NotificationsIcon className={classes.iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Alerts" />
        </ListItem>
        <ListItem button key="Messaged">
          <ListItemIcon>
            <MailIcon className={classes.iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Messaged" />
        </ListItem>
      </List>
      <Divider />
      <List className={classes.listStyle}>
        <ListItem button key="Manage Rentals">
          <ListItemIcon>
            <HomeSharpIcon className={classes.iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="Manage Rentals"
            secondary="Landlord and Agent Tools"
          />
        </ListItem>
        <ListItem button key="Advertise">
          <ListItemIcon>
            <ApartmentSharpIcon className={classes.iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="Advertise"
            secondary="Multifamily Communities"
          />
        </ListItem>
      </List>

      <div className={classes.bottomPush}>
        <Divider />
        <List className={classes.listStyle}>
          {props.loggedIn ? (
            <ListItem button onClick={handleLogout} key="Manage Rentals">
              <ListItemText primary="Log out" />
            </ListItem>
          ) : (
            <div>
              <ListItem
                button
                onClick={props.handelClickOpenSignIn}
                key="Manage Rentals"
              >
                <ListItemText primary="Log In" />
              </ListItem>
              <ListItem
                button
                onClick={props.handelClickOpenSignUp}
                key="Advertise"
              >
                <ListItemText primary="Sign Up" />
              </ListItem>
            </div>
          )}
        </List>
      </div>
    </div>
  );
  return (
    <React.Fragment>
      <IconButton
        onClick={toggleDrawer(true)}
        disableFocusRipple
        edge="start"
        className={classes.menuButton}
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    loggedIn: state.firebase.auth.uid,
    emailVerified: state.firebase.auth.emailVerified,
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);
