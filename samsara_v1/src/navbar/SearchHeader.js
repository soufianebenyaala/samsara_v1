import React, { useState, useRef, useEffect, useContext } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DrawerComponent from "./DrawerComponent";
import SearchBar from "./SearchBar";
import SignUpDialog from "./SignUpDialog";
import LogInDialog from "./LogInDialog";
import Avatar from "@material-ui/core/Avatar";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../store/action/authActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    top: "0",
    right: "0",
    left: "0",
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
}));
function avater({
  classes,
  props,
  handelClickOpenSignIn,
  handelClickOpenSignUp,
}) {
  if (props.uid) {
    return (
      <Link to={{ pathname: "/profile/account" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2015/12/23/14/56/man-profile-1105761_960_720.jpg"
          size="medium"
          className={` ${classes.large} ${classes.space_button} ${classes.fontColor}`}
        />
      </Link>
    );
  } else {
    return (
      <div>
        <Button
          onClick={handelClickOpenSignIn}
          size="medium"
          className={`${classes.Login_button} ${classes.fontColor} ${classes.sm_hidden}`}
        >
          Log in
        </Button>
        <Button
          onClick={handelClickOpenSignUp}
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
function Header(props) {
  const classes = useStyles(props);
  const searchbar = props.mySearchBar ? (
    <SearchBar setSearch={props.setSearch} />
  ) : null;
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

  async function handleLogout() {
    await props.logOut();
  }

  return (
    <div className={classes.root}>
      <AppBar
        position={props.position != null ? props.position : "static"}
        color={props.color}
      >
        <Toolbar>
          <DrawerComponent
            handelClickOpenSignIn={handelClickOpenSignIn}
            handelClickOpenSignUp={handelClickOpenSignUp}
            color={props.fontColor}
          />

          <IconButton>
            <img alt="myLogo" className={classes.logo_img} src={props.Logo} />
          </IconButton>
          {searchbar}

          <div className={classes.root} />

          <Button
            size="medium"
            className={`${classes.space_button} ${classes.fontColor}`}
          >
            Manage Rentals
            <div className={classes.free_chip}>FREE</div>
          </Button>

          {avater({
            classes,
            props,
            handelClickOpenSignIn,
            handelClickOpenSignUp,
          })}
          {props.uid ? (
            <Button
              onClick={handleLogout}
              variant="contained"
              className={`${classes.SignUp_button} ${classes.sm_hidden}`}
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
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (creds) => dispatch(logOut(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
