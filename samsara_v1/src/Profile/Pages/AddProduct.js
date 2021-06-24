import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import Checkout from "../Checkout/Checkout";

import { useAuth } from "../../contexts/AuthContext";
import { db, storage, storageRef } from "../../firebase";
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
export default function Dashboard(props) {

  const classes = useStyles();

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
  const [telephone, settelephone] = useState("");

  const handleChangeNbrOfBathRooms = (event, newNbr) => {
    setNbrOfBathRooms(newNbr);
  };

  const handleChangeNbrOfRooms = (event, newNbr) => {
    setNbrOfRooms(newNbr);
  };
  const uploadfile = async () => {
    var urlF = [];
    if (files !== []) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        // Upload file and metadata to the object 'images/mountains.jpg'
        await storageRef.child("files/" + file.name).put(file);
        var DownloadURL = await storage
          .ref("files")
          .child(file.name)
          .getDownloadURL();
        urlF.push(DownloadURL);
        seturlfile(urlF);
      }
    }
  };
  const uploadimage = async () => {
    var urlI = [];
    if (images !== []) {
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        await storageRef.child("images/" + image.name).put(image);
        var DownloadURL = await storage
          .ref("images")
          .child(image.name)
          .getDownloadURL();
        urlI.push(DownloadURL);
        seturlimage(urlI);
      }
    }
  };
  const addToDataBase = async () => {
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
        telephone: telephone,
      });

    await db
      .collection("users")
      .doc(currentUser.uid)
      .collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (doc) => {
          if (doc.exists) {
            // Convert to City object
            await db.collection("Allproduct").doc(doc.id).set({
              userUid: currentUser.uid,
              buildingName: doc.data().buildingName,
              adress: doc.data().adress,
              zipcode: doc.data().zipcode,
              price: doc.data().price,
              NumberOfRooms: doc.data().NumberOfRooms,
              NumberOfBathRooms: doc.data().NumberOfBathRooms,
              categorie: doc.data().categorie,
              aminities: doc.data().aminities,
              urlimage: doc.data().urlimage,
              urlfile: doc.data().urlfile,
              discerption: doc.data().discerption,
              latitude: doc.data().latitude,
              longitude: doc.data().longitude,
              telephone: doc.data().telephone,
            });
          }
        });
      });
  };
  const submit = async () => {
    await uploadimage();
    await uploadfile();
    await addToDataBase();
    history.push("/profile/Immobilier");
  };
  return (
    <>
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
          settelephone={settelephone}
          telephone={telephone}
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
    </>
  );
}
