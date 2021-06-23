import { useAuth } from "../../contexts/AuthContext";
import "firebase/storage";
import firebase from "../../firebase";
import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Divider,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));
function AccountProfile(props) {
  const [url, seturl] = useState("");
  const classes = useStyles();

  const state = {
    image: null,
    progress: 0,
    downloadURL: null,
    user: {
      avatar: "asba",
      city: "Los Angeles",
      country: "USA",
      jobTitle: "Senior Developer",
      name: "Mohamed Jed",
      timezone: "GTM-7",
    },
  };

  const user = {
    avatar: "/static/images/avatars/avatar_6.png",
    city: "Los Angeles",
    country: "USA",
    jobTitle: "Senior Developer",
    name: "Mohamed Jed",
    timezone: "GTM-7",
  };
  const { currentUser } = useAuth();

  useEffect(() => {
    // Update the document title using the browser API
    var storage = firebase.storage();
    var storageRef = storage.ref();
    storageRef
      .child("profile/" + currentUser.uid)
      .getDownloadURL()
      .then((URL) => {
        seturl(URL);
      });
  }, [url]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      state.image = e.target.files[0];
    }
  };
  // console.log(e.target.files[0])

  const handleUpload = () => {
    let file = state.image;
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var uploadTask = storageRef.child("profile/" + currentUser.uid).put(file);

    uploadTask.then((_) => {
      storageRef
        .child("profile/" + currentUser.uid)
        .getDownloadURL()
        .then((URL) => {
          seturl(URL);

          document.getElementById("file").value = null;
        });
    });

    /*
    uploadTask.on(firebase.storage.TaskEvent.STATE_,
      (snapshot) =>{
        var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100
        this.setState({progress})
      },(error) =>{
        throw error
      },() =>{
        // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
    
        uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
          this.setState({
            downloadURL: url
          })
        })
      document.getElementById("file").value = null
    
     }
    ) */
  };

  return (
    <Card style={{ display: "flex", flexDirection: "column" }} {...props}>
      <CardContent style={{ flexGrow: 1 }}>
        <Box
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid
            spacing={3}
            justify="center"
            alignItems="center"
            direction="row"
            container
          >
            <Grid xs={12} item>
              <Grid
                justify="center"
                alignItems="center"
                direction="row"
                container
              >
                <Grid xs={3} item>
                  <Avatar
                    src={url}
                    style={{
                      height: 100,
                      width: 100,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} item>
              <Grid
                justify="center"
                alignItems="center"
                direction="row"
                container
              >
                <Grid xs={2} item>
                  <input
                    className={classes.input}
                    id="file"
                    onChange={handleChange}
                    type="file"
                  />
                  <label htmlFor="file">
                    <Button
                      style={{backgroundColor: "cornflowerblue",
                        textTransform: "none",}}
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      Upload
                    </Button>
                  </label>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} item>
              <Grid
                justify="center"
                alignItems="center"
                direction="row"
                container
              >
                <Grid xs={11} item>
                  <Typography color="textPrimary" gutterBottom variant="h3">
                    {props.nameUser}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} item>
              <Grid
                justify="center"
                alignItems="center"
                direction="row"
                container
              >
                <Grid xs={6} item>
                  <Typography color="textSecondary" variant="body1">
                    {props.country}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} item>
              <Grid
                justify="center"
                alignItems="center"
                direction="row"
                container
              >
                <Grid xs={6} item>
                  {" "}
                  <Typography color="textSecondary" variant="body1">
                    {`${moment().format("hh:mm A")} ${user.timezone}`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Divider />
      <CardActions style={{ backgroundColor: "cornflowerblue" }}>
        <Button
          onClick={handleUpload}
          color="primary"
          fullWidth
          variant="text"
          style={{ color: "#fff", textTransform: "none" }}
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
}

export default AccountProfile;
