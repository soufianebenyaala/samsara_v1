import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  thumbsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },

  thumb: {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  },

  thumbInner: {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  },

  img: {
    display: "block",
    width: "500px",
    height: "500px",
  },
}));

export default function Review(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            building Name :
          </Typography>
          <Typography variant="p" gutterBottom>
            {props.product.buildingName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            adress :
          </Typography>
          <Typography variant="p" gutterBottom>
            {props.product.adress}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            zip code :
          </Typography>
          <Typography variant="p" gutterBottom>
            {props.product.zipcode}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            price :
          </Typography>
          <Typography variant="p" gutterBottom>
            {props.product.price}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Cat :
          </Typography>
          <Typography variant="p" gutterBottom>
            {props.product.Cat}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            latitude :
          </Typography>
          <Typography variant="p" gutterBottom>
            {props.product.latitude}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            longitude :
          </Typography>
          <Typography variant="p" gutterBottom>
            {props.product.longitude}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Ami :
          </Typography>
          <Typography variant="p" gutterBottom>
            Ami :{" "}
            {props.product.Ami.map((e) => (
              <>{e} </>
            ))}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            discerption :
          </Typography>
          <Typography variant="p" gutterBottom>
            {props.product.discerption}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
