import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import { db } from "../../firebase";
import { bool } from "prop-types";

const states = [
  {
    value: "Gabes",
    label: "Gabes",
  },
  {
    value: "Tunis",
    label: "Tunis",
  },
  {
    value: "Hammemet",
    label: "Hammemet",
  },
  {
    value: "Sousse",
    label: "Sousse",
  },
  {
    value: "Sfax",
    label: "Sfax",
  },
  {
    value: "Monastir",
    label: "Monastir",
  },
  {
    value: "Kairouan",
    label: "Kairouan",
  },
  {
    value: "Bizert",
    label: "Bizert",
  },
  {
    value: "Tozeur",
    label: "Tozeur",
  },
  {
    value: "Mahdia",
    label: "Mahdia",
  },
  {
    value: "Nabeul",
    label: "Nabeul",
  },
  {
    value: "Marsa",
    label: "Marsa",
  },
  {
    value: "Douz",
    label: "Douz",
  },
  {
    value: "Djerba",
    label: "Djerba",
  },
];

const AccountProfileDetails = (props) => {
  const [loading, setLoading] = useState([]);
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { currentUser } = useAuth();
  const [phone, setPhone] = useState("");

  const [state, setState] = useState("");
  const [nameuser, setNameUser] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db.collection("users").onSnapshot((querySnaphot) => {
      querySnaphot.forEach((doc) => {
        if (doc.id == currentUser.uid) {
          setFirstName(doc.data().firstName);
          setLastName(doc.data().lastName);
          setEmail(doc.data().email);
          setPhone(doc.data().phone);
          setCountry(doc.data().country);
          setState(doc.data().state);
        }
      });
      setLoading(false);
    });

    return () => {
      subscriber();
    };
  }, [loading]);

  async function updateProfile() {
    await db.collection("users").doc(currentUser.uid).set({
      firstName: firstName,
      lastName: lastName,
      email: currentUser.email,
      phone: phone,
      country: country,
      state: state,
    });
    history.push("/profile");
  }

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={6}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
                value={firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
                value={lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                value={currentUser.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="number"
                value={phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                required
                value={country}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                id="outlined-select-currency-native"
                select
                required
                label="Select State"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your currency"
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions
          style={{
            display: "flex",
            padding: "8px",
            justifyContent: "flex-end",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={updateProfile}
              style={{
                backgroundColor: "cornflowerblue",
                color: "#fff",
                textTransform: "none",
              }}
            >
              Save details
            </Button>
          </Box>
        </CardActions>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
