import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { Container } from "@material-ui/core";

import Products from "../Products/productsTable";

const drawerWidth = 240;

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
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Fab className={classes.fab} href="/Addproduct" variant="extended">
          <AddIcon />
          ajouter maison
        </Fab>
        <Products />
      </Container>
    </>
  );
}
