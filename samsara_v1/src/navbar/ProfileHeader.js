import React, { useState, useEffect } from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchBar from "./SearchBar";
import SignUpDialog from "./SignUpDialog";
import LogInDialog from "./LogInDialog";
import Avatar from "@material-ui/core/Avatar";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";
import Badge from "@material-ui/core/Badge";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import MessageIcon from "@material-ui/icons/Message";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
const NotificationBadge = withStyles((theme) => ({
  badge: {
    top: "29%",
    right: "25%",
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);
const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },

  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "cornflowerblue",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    top: "0",
    right: "0",
    left: "0",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  notification: {
    display: "flex",
    marginRight: "20px",
  },
  logo_img: {
    height: "32px",
    width: "124px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    border: "1px solid #d5d9dc",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sm_hidden: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  SignUp_button: {
    background: "#fff",
    textTransform: "none",
  },
  logout: {
    background: "#fff",
    textTransform: "none",
    background: "cornflowerblue",
    height: "40px",
    color: "#fff",
    borderRadius: "45%",
    "&:hover": {
      background: "black",
    },
  },
  space_button: {
    marginRight: theme.spacing(1),
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  Login_button: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    textTransform: "none",
  },
  free_chip: {
    position: "relative",
    color: "#068047",
    background: "#ebf6f1",
    fontSize: "9px",
    top: "-1px",
    padding: "5px 7px 4px",
    lineHeight: "1",
    marginLeft: "5px",
    borderRadius: "5px",
    fontWeight: "600",
  },
  fontColor: {
    color: (props) => props.fontColor,
  },
  myHeader: {
    color: "black",
    background: "white",
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    right: "26%",
    bottom: "7%",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);
function avater({
  classes,
  currentUser,
  handelClickOpenSignIn,
  handelClickOpenSignUp,
  url,
}) {
  if (currentUser) {
    return (
      <Link to={{ pathname: "/profile" }}>
        <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar
            alt="Remy Sharp"
            src={url}
            size="medium"
            className={` ${classes.large} ${classes.space_button} ${classes.fontColor}`}
          />
        </StyledBadge>
      </Link>
    );
  } else {
    return (
      <div>
        <Button
          href="/login"
          size="medium"
          className={`${classes.Login_button} ${classes.fontColor} ${classes.sm_hidden}`}
        >
          Log in
        </Button>
        <Button
          href="/signup"
          size="medium"
          variant="contained"
          className={`${classes.SignUp_button} ${classes.sm_hidden}`}
        >
          Sign up
        </Button>
      </div>
    );
  }
}
function ProfileHeader(props) {
  const [url, seturl] = useState("");
  useEffect(() => {
    // Update the document title using the browser API
    async function getphoto() {
      if (currentUser) {
        var storage = firebase.storage();
        var storageRef = storage.ref();
        storageRef
          .child("profile/" + currentUser.uid)
          .getDownloadURL()
          .then((URL) => {
            seturl(URL);
          });
      }
    }
    getphoto();
  });
  const history = useHistory();
  const classes = useStyles(props);

  const searchbar = props.mySearchBar ? <SearchBar /> : null;
  const [openSignUp, isOpenSignUp] = useState(false);
  const handelClickOpenSignUp = () => {
    isOpenSignUp(true);
  };
  const handelCloseSignUp = () => {
    isOpenSignUp(false);
  };

  const [openSignIn, isOpenSignIn] = useState(false);
  const handelClickOpenSignIn = () => {
    isOpenSignIn(true);
  };
  const handelCloseSignIn = () => {
    isOpenSignIn(false);
  };
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }
  const [MessageNotefication, setMessageNotefication] = React.useState(null);

  const handleClickMessage = (event) => {
    setMessageNotefication(event.currentTarget);
  };

  const handleCloseMessage = () => {
    setMessageNotefication(null);
  };
  return (
    <div className={classes.root}>
      <AppBar
        className={classes.myHeader}
        position={props.position != null ? props.position : "static"}
        color={props.color}
      >
        <Toolbar>
          {props.list}

          <IconButton>
            <img alt="myLogo" className={classes.logo_img} src={props.Logo} />
          </IconButton>
          {searchbar}

          <div className={classes.root} />
          <div className={classes.container}>
            <div className={classes.notification}>
              <NotificationBadge badgeContent={4} color="primary">
                <IconButton>
                  <FavoriteIcon style={{ color: "cornflowerblue" }} />
                </IconButton>
              </NotificationBadge>
            </div>
            {props.SwitchToVendor ? (
              <div className={classes.notification}>
                <NotificationBadge badgeContent={4} color="primary">
                  <IconButton>
                    <NotificationsActiveIcon
                      style={{ color: "cornflowerblue" }}
                    />
                  </IconButton>
                </NotificationBadge>
              </div>
            ) : null}
            <div className={classes.notification}>
              <NotificationBadge badgeContent={4} color="primary">
                <IconButton onClick={handleClickMessage}>
                  <MessageIcon style={{ color: "cornflowerblue" }} />
                </IconButton>
              </NotificationBadge>
            </div>
            <Menu
              id="simple-menu"
              anchorEl={MessageNotefication}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              open={Boolean(MessageNotefication)}
              onClose={handleCloseMessage}
            >
              <List className={classes.root}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Summer BBQ"
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Cindy Baker"
                      src="/static/images/avatar/3.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Oui Oui"
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Sandra Adams
                        </Typography>
                        {" — Do you have Paris recommendations? Have you ever…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </Menu>
            <FormControlLabel
              label={props.SwitchToVendor ? "Loueur" : "Membre"}
              control={
                <IOSSwitch
                  checked={props.SwitchToVendor}
                  onChange={props.handleChangeSwitchToVendor}
                  name="VendorOrConsumer"
                />
              }
            />

            {avater({
              classes,
              currentUser,
              handelClickOpenSignIn,
              handelClickOpenSignUp,
              url,
            })}
            {currentUser ? (
              <Button
                onClick={handleLogout}
                variant="contained"
                className={`${classes.logout} ${classes.sm_hidden}`}
              >
                Log out
              </Button>
            ) : (
              <div></div>
            )}

            <SignUpDialog
              open={openSignUp}
              handelClickOpen={handelClickOpenSignUp}
              handelClose={handelCloseSignUp}
            />

            <LogInDialog
              open={openSignIn}
              handelClickOpen={handelClickOpenSignIn}
              handelClose={handelCloseSignIn}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ProfileHeader;
