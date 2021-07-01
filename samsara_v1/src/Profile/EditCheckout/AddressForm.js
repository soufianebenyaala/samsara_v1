import React, { useState } from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  Checkbox,
  makeStyles,
  useTheme,
  withStyles,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Input,
  Chip,
  ListItemText,
} from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    width: "100%",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));
const FilterToggleButton = withStyles({
  root: {
    "&$selected": {
      color: "#2e64e2",
      textShadow: "-.01ex 0 #2e64e2,.01ex 0 #2e64e2",
      borderColor: "#2e64e2",
      borderLeftColor: "#2e64e2",
      boxShadow: "0 1px 0 0 rgba(0,0,0,.05)",
      backgroundColor: "#fff",
    },

    padding: "10px",
    color: "#2a2b2c",
    fontSize: "15px",
    background: "#fff",
    border: "1px solid #e4e7e9",
    borderRadius: "4px",
    boxShadow: "0 1px 0 0 rgba(0,0,0,.05)",
    marginRight: "5px",
    flex: "1 1 20%",
    marginRight: "5px",
  },
  label: {
    textTransform: "none",
  },
  selected: {
    color: "#2e64e2",
    textShadow: "-.01ex 0 #2e64e2,.01ex 0 #2e64e2",
    borderColor: "#2e64e2",
    boxShadow: "0 1px 0 0 rgba(0,0,0,.05)",
    backgroundColor: "#fff",
  },
})(ToggleButton);
const FilterToggleButtonContainer = withStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
})(ToggleButtonGroup);
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const names = ["AC", "TV", "Swimming Pool", "Garden", "Basment"];

function getStyles(name, Ami, theme) {
  return {
    fontWeight:
      Ami.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AddressForm(props) {
  const classes = useStyles();
  const theme = useTheme();

  const handleChange = (event) => {
    props.setAmi(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    props.setAmi(value);
  };
  console.log(props.buildingName);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => {
              props.setbuildingName(e.target.value);
            }}
            required
            value={props.buildingName}
            id="address1"
            name="address1"
            label="Build name"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Categorie *</InputLabel>
            <Select
              native
              onChange={(e) => {
                props.setCat(e.target.value);
              }}
              value={props.Cat}
              inputProps={{
                name: "Categorie",
                id: "age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"Building"}>Building</option>
              <option value={"Apartment"}>Apartment</option>
              <option value={"Studio"}>Studio</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={(e) => {
              props.setadress(e.target.value);
            }}
            value={props.adress}
            required
            id="Address"
            name="Address"
            label="Address"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={(e) => {
              props.setzipcode(e.target.value);
            }}
            value={props.zipcode}
            required
            id="Zip_code"
            name="Zip_code"
            label="Zip code"
            type="number"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => {
              props.settelephone(e.target.value);
            }}
            value={props.telephone}
            required
            id="telephone"
            name="telephone"
            label="Telephone"
            type="number"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => {
              props.setprice(e.target.value);
            }}
            value={props.price}
            label="Price"
            type="number"
            required
            id="Number"
            name="Number"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={props.Ami}
              onChange={handleChange}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={props.Ami.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Bedrooms</Typography>
          <FilterToggleButtonContainer
            value={props.nbrOfRooms}
            onChange={props.setNbrOfRooms}
            arial-label="number of rooms"
            exclusive
          >
            <FilterToggleButton value="Studio">Studio</FilterToggleButton>
            <FilterToggleButton value="1">1</FilterToggleButton>
            <FilterToggleButton value="2">2</FilterToggleButton>
            <FilterToggleButton value="3">3</FilterToggleButton>
            <FilterToggleButton value="4">4+</FilterToggleButton>
          </FilterToggleButtonContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Bathrooms</Typography>
          <FilterToggleButtonContainer
            value={props.nbrOfBathRooms}
            onChange={props.setNbrOfBathRooms}
            arial-label="number of rooms"
            exclusive
          >
            <FilterToggleButton value="1">1</FilterToggleButton>
            <FilterToggleButton value="2">2</FilterToggleButton>
            <FilterToggleButton value="3">3</FilterToggleButton>
            <FilterToggleButton value="4">4</FilterToggleButton>
            <FilterToggleButton value="5">5+</FilterToggleButton>
          </FilterToggleButtonContainer>
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => {
              props.setdiscerption(e.target.value);
            }}
            value={props.discerption}
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </React.Fragment>
  );
}
