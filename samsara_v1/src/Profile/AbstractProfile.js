import React,{useState} from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ProfileHeader from "../navbar/ProfileHeader";
import {
  CssBaseline,
  Drawer,
  List,
  Divider,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MainListItems from "./DashbordComp/MainListItems";
import img from "../Home/blacklogo-01.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Profile from "./Pages/Profile"
import Dashbord from "./Pages/Dashbord"
import Products from "./Pages/Products"
import AddProduct from "./Pages/AddProduct"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function AbstractProfile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const list = () => (
    <>
      <div className={classes.toolbarIcon}>
        <IconButton
          className={clsx(
            classes.menuButton,
            !open && classes.menuButtonHidden
          )}
          onClick={handleDrawerClose}
        >
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
  const [SwitchToVendor, setSwitchToVendor] = useState(false);
  const handleChangeSwitchToVendor = (event) => {
    setSwitchToVendor(event.target.checked);
  };
  return (
    <>
      <Router>
        <ProfileHeader
          SwitchToVendor={SwitchToVendor}
          handleChangeSwitchToVendor={handleChangeSwitchToVendor}
          className={clsx(classes.appBar, open && classes.appBarShift)}
          list={list()}
          fontColor="black"
          color="transparent"
          Logo={img}
        />
        <div className={classes.root}>
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(
                classes.drawerPaper,
                !open && classes.drawerPaperClose
              ),
            }}
            open={open}
          >
            <Divider />
            <List>
              <MainListItems SwitchToVendor={SwitchToVendor} />
            </List>
          </Drawer>

          <CssBaseline />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Switch>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                <Route exact path="/Dashbord">
                    <Dashbord/>
                </Route>
                <Route exact path="/Products">
                    <Products/>
                </Route>
                <Route exact path="/AddProduct">
                    <AddProduct/>
                </Route>
                <Redirect exact path="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    </>
  );
}
