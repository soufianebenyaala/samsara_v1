import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
  Container,
  Grid,
  Paper,
  Button,
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./DashbordComp/listItems";
import Checkout from "./Checkout/Checkout";

import { useAuth } from "../contexts/AuthContext";
import { db, storage, storageRef } from "../firebase";
import { useHistory } from "react-router-dom";

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
/*var product = {
  buildingName: "",
  urlimage: "",
  urlimage: "",
  adress: "",
  zipcode: "",
  price: "",
  NbrOfRooms: "",
  NbrOfBathRooms: "",
  Cat: "",
  Ami: "",
  files: "",
  images: "",
  discerption: "",
  latitude: "",
  longitude: "",
};*/

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const history = useHistory();
  const { currentUser } = useAuth();

  const [buildingName, setbuildingName] = useState("");
  const [urlfile, seturlfile] = useState([]);
  const [urlimage, seturlimage] = useState([]);
  const [files, setfiles] = useState([]);
  const [images, setimages] = useState([]);
  const [loading, setloading] = useState(true);
  const [adress, setadress] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [price, setprice] = useState(0);
  const [NbrOfRooms, setNbrOfRooms] = useState("Studio");
  const [NbrOfBathRooms, setNbrOfBathRooms] = useState("1");
  const [Cat, setCat] = useState("");
  const [Ami, setAmi] = useState([]);
  const [discerption, setdiscerption] = useState("");
  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState("");

  const handleChangeNbrOfBathRooms = (event, newNbr) => {
    setNbrOfBathRooms(newNbr);
  };

  const handleChangeNbrOfRooms = (event, newNbr) => {
    setNbrOfRooms(newNbr);
  };
  /*seturlfile, 
  seturlimage, 
  setloading, 
  setadress, 
  setzipcode, 
  setprice, 
  setNbrOfRooms, 
  setNbrOfBathRooms,
  setCat
  setAmi
  setfiles
  setimages
  setdiscerption*/
  const uploadimage = () => {
    var urlF = [];
    var urlI = [];
    if (files != []) {
      files.map(async (file) => {
        // Upload file and metadata to the object 'images/mountains.jpg'
        await storageRef.child("files/" + file.name).put(file);
        var DownloadURL = await storage
          .ref("files")
          .child(file.name)
          .getDownloadURL();
        urlF.push(DownloadURL);
        seturlimage(urlI);
      });
    }
    if (images != []) {
      images.map(async (image) => {
        // Upload image and metadata to the object 'images/mountains.jpg'
        await storageRef.child("images/" + image.name).put(image);
        var DownloadURL = await storage
          .ref("images")
          .child(image.name)
          .getDownloadURL();
        urlI.push(DownloadURL);
        seturlfile(urlF);
      });
    }
  };
  const submit = async () => {
    await uploadimage();

    console.log(urlfile, urlimage);
    await db
      .collection("users")
      .doc(currentUser.uid)
      .collection("products")
      .add({
        buildingName: buildingName,
        adress: adress,
        zipcode: zipcode,
        price: price,
        NumberOfRooms: NbrOfRooms,
        NumberOfBathRooms: NbrOfBathRooms,
        categorie: Cat,
        aminities: Ami,
        urlimage: urlimage,
        urlfile: urlfile,
        discerption: discerption,
        latitude: latitude,
        longitude: longitude,
      });

      await db.collection("users")
      .doc(currentUser.uid)
      .collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (doc) => {
        if (doc.exists) {
          // Convert to City object
          await db.collection("Allproduct").doc(doc.id).set({
            userUid:currentUser.uid,
            buildingName: doc.data().buildingName,
            adress: doc.data().adress,
            zipcode: doc.data().zipcode,
            price: doc.data().price,
            NumberOfRooms:doc.data().NumberOfRooms,
            NumberOfBathRooms: doc.data().NumberOfBathRooms,
            categorie: doc.data().categorie,
            aminities: doc.data().aminities,
            urlimage: doc.data().urlimage,
            urlfile: doc.data().urlfile,
            discerption: doc.data().discerption,
            latitude: doc.data().latitude,
            longitude: doc.data().longitude,
          });
        }
      });
    });
   }

  console.log({
    urlfile,
    urlimage,
    loading,
    adress,
    zipcode,
    price,
    NbrOfRooms,
    NbrOfBathRooms,
    Cat,
    Ami,
    files,
    images,
    discerption,
    longitude,
    latitude,
    loading,
  });
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
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
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Checkout
            setbuildingName={setbuildingName}
            seturlfile={seturlfile}
            seturlimage={seturlimage}
            setloading={setloading}
            setadress={setadress}
            setzipcode={setzipcode}
            setprice={setprice}
            NbrOfBathRooms={NbrOfBathRooms}
            handelNbrOfBathRooms={handleChangeNbrOfBathRooms}
            NbrOfRooms={NbrOfRooms}
            handelNbrOfRooms={handleChangeNbrOfRooms}
            setCat={setCat}
            setAmi={setAmi}
            setfiles={setfiles}
            setimages={setimages}
            setdiscerption={setdiscerption}
            Ami={Ami}
            setlatitude={setlatitude}
            setlongitude={setlongitude}
            buildingName={buildingName}
            urlfile={urlfile}
            urlimage={urlimage}
            adress={adress}
            zipcode={zipcode}
            price={price}
            Cat={Cat}
            files={files}
            images={images}
            discerption={discerption}
            latitude={latitude}
            longitude={longitude}
            submit={submit}
            //product={product}
          />
        </Container>
      </main>
    </div>
  );
}