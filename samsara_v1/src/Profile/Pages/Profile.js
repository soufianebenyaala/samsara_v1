import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Grid,
} from "@material-ui/core";
import AccountProfile from '../../Profile/account/AccountProfile';
import AccountProfileDetails from '../../Profile/account/AccountProfileDetails';
const useStyles = makeStyles((theme) => ({
  
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
 flexIt:{
  display: "flex"
 },
 boxIt:{
  backgroundColor: "background.default",
  minHeight: "100%",
  py: 3,
 }
}));

export default function Dashboard() {
  
  const classes = useStyles();
  return (
    <>
        <Container maxWidth="lg" className={classes.container}>
          <Box
            className={classes.boxIt}
          >
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid className={classes.flexIt} item lg={4} md={6} xs={12}>
                  <AccountProfile />
                </Grid>
                <Grid  item lg={8} md={6} xs={12}>
                  <AccountProfileDetails />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Container>
      
</>
  );
}
