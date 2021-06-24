import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { Container } from "@material-ui/core";

import Products from "../Products/productsTable";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";
import { useHistory } from "react-router-dom";

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

export default function Dashboard() {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db
      .collection("users")
      .doc(currentUser.uid)
      .collection("products")
      .onSnapshot((querySnaphot) => {
        querySnaphot.forEach((doc) => {
          getPostsFromFirebase.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts(getPostsFromFirebase);
        setLoading(false);
      });

    return () => {
      subscriber();
    };
  }, [loading]);

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Link className={classes.noLinks} to="/profile/AddProduct">
          <Fab className={classes.fab} variant="extended">
            <AddIcon />
            ajouter maison
          </Fab>
        </Link>

        <Products posts={posts} />
      </Container>
    </>
  );
}
