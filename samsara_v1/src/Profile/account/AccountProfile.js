import { useAuth } from '../../contexts/AuthContext';
import 'firebase/storage';
import firebase from "../../firebase"
import React, { useState, useEffect } from 'react'


import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';



function AccountProfile(props) {
  const [url, seturl] = useState("")

  const state = {

    image: null,
    progress: 0,
    downloadURL: null,
    user: {
      avatar: "asba",
      city: 'Los Angeles',
      country: 'USA',
      jobTitle: 'Senior Developer',
      name: 'Katarina Smith',
      timezone: 'GTM-7'
    }
  }

  const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
  };
  const { currentUser } = useAuth()



  useEffect(() => {
    // Update the document title using the browser API
    var storage = firebase.storage();
    var storageRef = storage.ref();
    storageRef.child('profile/' + currentUser.uid).getDownloadURL().then((URL) => {


      seturl(URL)

    });


  }, [url]);


  const handleChange = (e) => {
    if (e.target.files[0]) {

      state.image = e.target.files[0]
    }
  }
  // console.log(e.target.files[0])




  const handleUpload = () => {

    let file = state.image;
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var uploadTask = storageRef.child('profile/' + currentUser.uid).put(file);

    uploadTask.then((_) => {

      storageRef.child('profile/' + currentUser.uid).getDownloadURL().then((URL) => {

        seturl(URL)

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
  }







  return (

    <Card {...props}>
      <CardContent>

        <Box
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar


            src={url}
            style={{
              height: 100,
              width: 100
            }}
          />
          <input
            type='file'
            id='file'

            onChange={handleChange} >

          </input>








          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${moment().format('hh:mm A')} ${user.timezone}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          onClick={handleUpload}
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  )
};

export default AccountProfile;
