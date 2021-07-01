import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { ToastContainer } from "react-toastify";
import { Container } from "@material-ui/core";

import Products from "../Products/productsTable";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(6),
    right: theme.spacing(6),
    backgroundColor: "cornflowerblue",
    color: "#fff",
  },
  noLinks: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      textDecoration: "none",
      color: "black",
    },
  },
}));

function Dashboard(props) {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <ToastContainer />
        <Link className={classes.noLinks} to="/profile/AddProduct">
          <Fab className={classes.fab} variant="extended">
            <AddIcon />
            ajouter maison
          </Fab>
        </Link>

        <Products posts={props.user_products} />
      </Container>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    user_products: state.firestore.ordered.Allproduct,
    authuser: state.firebase.auth.uid,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "Allproduct",
      where: ["userUid", "==", props.authuser],
    },
  ])
)(Dashboard);
