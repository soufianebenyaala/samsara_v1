import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./FormResult";
import Review from "./Reviews";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step, props) {
  switch (step) {
    case 0:
      return (
        <AddressForm
          setbuildingName={props.setbuildingName}
          setadress={props.setadress}
          setzipcode={props.setzipcode}
          setprice={props.setprice}
          setNbrOfRooms={props.handelNbrOfRooms}
          nbrOfRooms={props.NbrOfRooms}
          setNbrOfBathRooms={props.handelNbrOfBathRooms}
          nbrOfBathRooms={props.NbrOfBathRooms}
          setCat={props.setCat}
          setAmi={props.setAmi}
          setdiscerption={props.setdiscerption}
          Ami={props.Ami}
        />
      );
    case 1:
      return (
        <PaymentForm
          seturlfile={props.seturlfile}
          seturlimage={props.seturlimage}
          setfiles={props.setfiles}
          setimages={props.setimages}
          setdiscerption={props.setdiscerption}
          setlongitude={props.setlongitude}
          setlatitude={props.setlatitude}
        />
      );
    case 2:
      return (
        <Review
          buildingName={props.buildingName}
          urlfile={props.urlfile}
          urlimage={props.urlimage}
          adress={props.adress}
          zipcode={props.zipcode}
          price={props.price}
          NbrOfBathRooms={props.NbrOfBathRooms}
          NbrOfRooms={props.NbrOfRooms}
          Cat={props.Cat}
          Ami={props.Ami}
          files={props.files}
          images={props.images}
          discerption={props.discerption}
          latitude={props.latitude}
          longitude={props.longitude}
        />
      );
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center"></Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, props)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={props.submit}
                    className={classes.button}
                  >
                    Place order
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                )}
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </>
  );
}
