import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { Container } from "@material-ui/core";

import Products from "../Products/productsTable";

import {Link} from "react-router-dom";

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
  noLinks:{
    textDecoration:"none",
    color:"black",
    "&:hover":{
      textDecoration:"none",
      color:"black",
    }
    }
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
          <Link className={classes.noLinks} to="/profile/AddProduct">
        <Fab className={classes.fab}  variant="extended">
          <AddIcon />
          ajouter maison
        </Fab>
        </Link>
        <Products />
      </Container>
    </>
  );
}
