import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DragAndDrop from "./DragAndDrop";

export default function PaymentForm(props) {


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom></Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" component="h1">
            put a document that validate your ownership of the proprety:
          </Typography>

          <DragAndDrop files={props.files} setFiles={props.setfiles} />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" component="h1">
            put your images here:
          </Typography>

          <DragAndDrop files={props.images} setFiles={props.setimages} />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" component="h1">
            put the coordinates of your building at geographic coordinate system
            :
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => {
              props.setlatitude(e.target.value);
            }}
            required
            id="Latitude"
            label="Latitude"
            helperText="Latitude"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => {
              props.setlongitude(e.target.value);
            }}
            required
            id="Longitude"
            label="Longitude"
            helperText="Longitude"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
