import React, { useState, useEffect } from "react";
import DrawerSearch from "../../SearchPage/SearchResults/DrawerSearch/DrawerSearch";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: "20px",
  },
}));

const WishList = (props) => {
  const classes = useStyles();

  return (
    <div>
      {props.wishList_user_products[`users/${props.authuser}/wishList`] ? (
        props.wishList_user_products[`users/${props.authuser}/wishList`] &&
        props.wishList_user_products[`users/${props.authuser}/wishList`].map(
          (blog) => {
            return (
              <Container className={classes.container}>
                <Paper className={classes.paper} elevation={3}>
                  <DrawerSearch
                    key={blog}
                    id={blog}
                    setIDbuilding={props.setIDbuilding}
                    building={props.Allproducts[blog.id]}
                    id_building={blog.id}
                    withoutHeart={true}
                  ></DrawerSearch>
                </Paper>
              </Container>
            );
          }
        )
      ) : (
        <h1> whishlist est vide </h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Allproducts: state.firestore.data.Allproduct,
    wishList_user_products: state.firestore.ordered,
    authuser: state.firebase.auth.uid,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: `users/${props.authuser}/wishList`,
    },
  ]),
  firestoreConnect((props) => [
    {
      collection: "Allproduct",
    },
  ])
)(WishList);
