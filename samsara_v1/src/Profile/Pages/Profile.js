import React, { useState } from "react";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, IconButton } from "@material-ui/core";
import AccountProfile from "../../Profile/account/AccountProfile";
import AccountProfileDetails from "../../Profile/account/AccountProfileDetails";
import VerifyEmail from "../../components/VerifyEmail";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  flexIt: {
    display: "flex",
  },
  boxIt: {
    backgroundColor: "background.default",
    minHeight: "100%",
    py: 3,
  },
}));

function Dashboard(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
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

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.boxIt}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid className={classes.flexIt} item lg={4} md={6} xs={12}>
                <AccountProfile
                  user_detail={props.users && props.users[props.loggedIn]}
                />
              </Grid>
              <Grid item lg={8} md={6} xs={12}>
                <AccountProfileDetails />
              </Grid>
            </Grid>
            {!props.emailVerified ? (
              <Grid container spacing={3}>
                <Grid item lg={12} md={6} xs={12}>
                  <VerifyEmail />
                </Grid>
              </Grid>
            ) : (
              <></>
            )}
          </Container>
        </Box>
      </Container>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.firebase.auth.uid,
    emailVerified: state.firebase.auth.emailVerified,
    users: state.firestore.data.users,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "users",
    },
  ])
)(Dashboard);
