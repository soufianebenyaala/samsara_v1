import { connect } from "react-redux";
import { reSendVerificationEmail } from "../store/action/authActions";
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
const VerifyEmail = (props) => {
  const handleRe_send = () => {
    props.reSendVerificationEmail();
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
                <Typography color="textPrimary" gutterBottom variant="h5">
                  VERIFY YOUR EMAIL
                </Typography>
              </Grid>
            </Grid>
            <Grid xs={12} item>
              <Grid
                justify="center"
                alignItems="center"
                direction="row"
                container
              >
                <Typography color="textSecondary" variant="body1">
                  Go to your email imbox, and please verify your email
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Divider />
      <CardActions style={{ backgroundColor: "cornflowerblue" }}>
        <Button
          onClick={handleRe_send}
          color="primary"
          fullWidth
          variant="text"
          style={{ color: "#fff", textTransform: "none" }}
        >
          Re-send verification email
        </Button>
      </CardActions>
    </Card>
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
    reSendVerificationEmail: () => dispatch(reSendVerificationEmail()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
