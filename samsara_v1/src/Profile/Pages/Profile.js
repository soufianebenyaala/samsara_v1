
import React , {useState} from "react";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";


import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Box,
  Container,
  Grid,
  IconButton
} from "@material-ui/core";


import AccountProfile from '../../Profile/account/AccountProfile';
import AccountProfileDetails from '../../Profile/account/AccountProfileDetails';




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

export default function Dashboard() {
  
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const [nameUser,setNameUser]=useState("");
  const [country,setCountry]=useState("");
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const list=()=>(
    <>
    <div className={classes.toolbarIcon}>
    <IconButton className={clsx(
        classes.menuButton,
        !open && classes.menuButtonHidden
      )} onClick={handleDrawerClose}>
      <ChevronLeftIcon />
    </IconButton>
  </div>
  <IconButton
    edge="start"
    color="inherit"
    aria-label="open drawer"
    onClick={handleDrawerOpen}
    className={clsx(
      classes.menuButton,
      open && classes.menuButtonHidden
    )}
  >
    <MenuIcon />
  </IconButton>
  </>)

  return (
    <>
    
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Box
            style={{
              backgroundColor: "background.default",
              minHeight: "100%",
              py: 3,
            }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid style={{display: "flex"}} item lg={4} md={6} xs={12}>
                  <AccountProfile country={country} nameUser={nameUser}/>
                </Grid>
                <Grid  item lg={8} md={6} xs={12}>
                  <AccountProfileDetails setCountry={setCountry} setNameUser={setNameUser} />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Container>
      
</>
  );
}
