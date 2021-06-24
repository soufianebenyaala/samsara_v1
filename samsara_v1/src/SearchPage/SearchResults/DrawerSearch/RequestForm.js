import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useAuth } from "../../../contexts/AuthContext";
import { db, storage, storageRef } from "../../../firebase";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  propretyInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    padding: "30px",
    background: "#f6f6f6",
    borderBottom: "1px solid #eeeef0",
  },
  info: {
    flex: "0 0 68px",
    width: "68px",
    height: "68px",
    marginRight: "15px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    borderSadius: "5px",
  },
  price: {
    fontSize: "19px",
    lineHeight: "20px",
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "10px",
  },
  name: {
    maxWidth: "180px",
    overflow: "hidden",
    fontWeight: "600",
    fontSize: "13px",
    lineHeight: "100%",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  phoneContainer: {
    display: "flex",
    alignItems: "center",
  },
  phone: {
    fontSize: "13px",
    lineHeight: "100%",
    color: "#2e64e2",
    textDecoration: "none",
    cursor: "pointer",
  },
  hoursText: {
    paddingBottom: "6px",
    fontSize: "13px",
    lineHeight: "140%",
    paddingTop: "24px",
  },
  hoursToday: {
    paddingBottom: "6px",
    fontSize: "13px",
    lineHeight: "140%",
  },
  header: {
    fontWeight: "500",
    fontSize: "26px",
    lineHeight: "32px",
    paddingBottom: "20px",
    color: "#2a2b2c",
  },
  terms: {
    color: "#697179",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    display: "inline",
  },
  formRow: {
    padding: "20px 30px",
    borderTop: "1px solid #d5d9dc",
  },
  bottomBar: {
    padding: "20px 30px",
    borderTop: "1px solid #d5d9dc",
  },
  secondaryBut: {
    padding: "7px 15px",
    color: "#2a2b2c",
    background: "#fff",
    border: "1px solid rgba(0,0,0,.05)",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
  },
  primaryBut: {
    padding: "7px 15px",
    color: "#fff",
    background: "#2e64e2",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
    textTransform: "none",
  },
  subHeader: {
    lineHeight: "24px",
    fontFamily: "Helvetica,Arial,sans-serif",
    fontSize: "medium",
  },
}));
const RequestForm = (props) => {
  const history = useHistory();
  const { currentUser } = useAuth();
  const [FullName, setFullName] = useState();
  const [Email, setEmail] = useState(currentUser.email);
  const [Phone, setPhone] = useState();
  const [message, setmessage] = useState("I saw your rental listing at Samsara and would like to learn more. I'm looking for a 2BR in the range of $2,900 to $4,100.");
  const [TimeChosen, setTimeChosen] = useState(1);
  const [TourTime1, setTourTime1] = useState();
  const [TourTime2, setTourTime2] = useState();
  const [TourTime3, setTourTime3] = useState();
  const [TourDate1, setTourDate1] = useState();
  const [TourDate2, setTourDate2] = useState();
  const [TourDate3, setTourDate3] = useState();
  const [selectedDate, setSelectedDate] = React.useState(new Date("2020-05-04T21:11:54"));
  const [state, setstate] = useState(true);

  console.log(props.id_user)
  const submit = async () => {
    await db.collection("users")
      .doc(currentUser.uid)
      .collection("SendRequestTour")
      .add({
        id_building: props.id_building,
        id_userReceiver: props.id_user,
        id_userSender: currentUser.uid,
        FullName: FullName,
        Email: Email,
        Phone: Phone,
        TourTime_date: { 1: { TourTime1: TourTime1, TourDate1: TourDate1 }, 2: { TourTime2: TourTime2, TourDate2: TourDate2 }, 3: { ourTime3: TourTime3, TourDate3: TourDate3 } },
        TimeChosen: TimeChosen,
        message: message,
        valide: false
      });
    await db.collection("users")
      .doc(currentUser.uid)
      .collection("SendRequestTour")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (doc) => {
          if (doc.data().id_userReceiver == props.id_user && doc.exists) {
            await db
              .collection("users")
              .doc(props.id_user)
              .collection("ReceiveRequestTour")
              .add({
                id_building: props.id_building,
                id_userReceiver: props.id_user,
                id_userSender: currentUser.uid,
                FullName: FullName,
                Email: Email,
                Phone: Phone,
                TourTime_date: { 1: { TourTime1: TourTime1, TourDate1: TourDate1 }, 2: { TourTime2: TourTime2, TourDate2: TourDate2 }, 3: { ourTime3: TourTime3, TourDate3: TourDate3 } },
                TimeChosen: TimeChosen,
                message: message,
                valide: 0
              });

          }
        });
      });
    props.onClose()

  }



  const handleChangeOfTourDate1 = (event) => {
    setTourDate1(event.target.value);
  };
  const handleChangeOfTourDate2 = (event) => {
    setTourDate2(event.target.value);
  };
  const handleChangeOfTourDate3 = (event) => {
    setTourDate3(event.target.value);
  };

  const handleAddOfTimeChosen = () => {
    if (TimeChosen < 3) {
      setTimeChosen(TimeChosen + 1);
    }
  };
  const handleReduceOfTimeChosen = () => {
    if (TimeChosen <= 3) {
      setTimeChosen(TimeChosen - 1);
    }

  };

  const handleChangeOfTourTime1 = (event) => {
    setTourTime1(event.target.value);
  };
  const handleChangeOfTourTime2 = (event) => {
    setTourTime2(event.target.value);
  };
  const handleChangeOfTourTime3 = (event) => {
    setTourTime3(event.target.value);
  };

  const handelStateChange = (event) => {
    setstate(!state);
  };
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const workingDays = [];
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  for (let i = 0; i < 14; i++) {
    if (!(tomorrow.getDay() == 0)) workingDays.push(tomorrow.toDateString());
    tomorrow.setDate(tomorrow.getDate() + 1);
  }
  const workingHours = [];
  today.setHours(9);
  today.setMinutes(0);

  while (today.getHours() <= 16) {
    let time = `${today.getHours() % 12 < 10 && today.getHours() != 12
      ? "0" + (today.getHours() % 12)
      : today.getHours()
      }:${today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
      } ${today.getHours() < 12 ? "AM" : "PM"}`;
    workingHours.push(time);
    today.setMinutes(today.getMinutes() + 15);
  }
  return (


      <Dialog
        onClose={props.onClose}
        aria-labelledby="simple-dialog-title"
        open={props.open}
        fullWidth={true}
        maxWidth="md"
      >
        <Grid justify="center" container>
          <Grid xs={12} item>
            <Grid container>
              <Grid xs={8} item>
                <Grid spacing={2} container>
                  <Container style={{ padding: "20px 30px" }}>
                    <Grid xs={12} item>
                      <Typography
                        className={classes.header}
                        component="h1"
                        variant="h4"
                      >
                        Tour this place
                      </Typography>
                    </Grid>
                    <Grid xs={12} item>
                      <Typography
                        className={classes.subHeader}
                        component="h4"
                        variant="h5"
                      >
                        Provide your availability for a tour in the property's
                        time zone.
                      </Typography>
                    </Grid>
                    <Grid
                      style={{ paddingTop: "19px" }}
                      justify="space-around"
                      spacing={2}
                      container
                    >
                      <Grid xs={12} item>
                        <TextField
                          onChange={(e) => { setFullName(e.target.value) }}
                          autoFocus
                          margin="none"
                          id="Full-Name"
                          label="Full Name"
                          type="Name"
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          onChange={(e) => { setPhone(e.target.value) }}
                          autoFocus
                          margin="none"
                          id="Phone"
                          label="Phone"
                          type="Phone"
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          onChange={(e) => { setEmail(e.target.value) }}
                          autoFocus
                          value={Email}
                          margin="none"
                          id="Email"
                          label="Email"
                          type="Email"
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      {TimeChosen > 0 ? <Grid xs={12} item>
                        <Grid spacing={2} container>
                          <Grid xs={5} item>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                              fullWidth
                            >
                              <InputLabel id="demo-simple-select-outlined-label">
                                Date
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={TourDate1}
                                onChange={handleChangeOfTourDate1}
                                label="Date"
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                {workingDays.map((day) => (
                                  <MenuItem value={day}>{day}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid xs={4} item>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                              fullWidth
                            >
                              <InputLabel id="demo-simple-select-outlined-label">
                                time
                              </InputLabel>
                              <Select
                                native
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={TourTime1}
                                onChange={handleChangeOfTourTime1}
                                label="time"
                              >
                                <option aria-label="None" value="" />

                                {workingHours.map((h) => (
                                  <option value={h}>{h}</option>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid xs={2} item>
                            <IconButton
                              aria-label="delete"
                              onClick={handleReduceOfTimeChosen}
                            >
                              <ClearIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid> : null}
                      {TimeChosen > 1 ? <Grid xs={12} item>
                        <Grid spacing={2} container>
                          <Grid xs={5} item>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                              fullWidth
                            >
                              <InputLabel id="demo-simple-select-outlined-label">
                                Date
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={TourDate2}
                                onChange={handleChangeOfTourDate2}
                                label="Date"
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                {workingDays.map((day) => (
                                  <MenuItem value={day}>{day}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid xs={4} item>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                              fullWidth
                            >
                              <InputLabel id="demo-simple-select-outlined-label">
                                time
                              </InputLabel>
                              <Select
                                native
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={TourTime2}
                                onChange={handleChangeOfTourTime2}
                                label="time"
                              >
                                <option aria-label="None" value="" />

                                {workingHours.map((h) => (
                                  <option value={h}>{h}</option>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid xs={2} item>
                            <IconButton
                              onClick={handleReduceOfTimeChosen}
                              aria-label="delete"
                            >
                              <ClearIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid> : null}
                      {TimeChosen > 2 ? <Grid xs={12} item>
                        <Grid spacing={2} container>
                          <Grid xs={5} item>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                              fullWidth
                            >
                              <InputLabel id="demo-simple-select-outlined-label">
                                Date
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={TourDate3}
                                onChange={handleChangeOfTourDate3}
                                label="Date"
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                {workingDays.map((day) => (
                                  <MenuItem value={day}>{day}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid xs={4} item>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                              fullWidth
                            >
                              <InputLabel id="demo-simple-select-outlined-label">
                                time
                              </InputLabel>
                              <Select
                                native
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={TourTime3}
                                onChange={handleChangeOfTourTime3}
                                label="time"
                              >
                                <option aria-label="None" value="" />

                                {workingHours.map((h) => (
                                  <option value={h}>{h}</option>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid xs={2} item>
                            <IconButton
                              aria-label="delete"
                              onClick={handleReduceOfTimeChosen}
                            >
                              <ClearIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid> : null}
                      {TimeChosen < 3 ? <Grid xs={12} item>
                        <Button onClick={handleAddOfTimeChosen} disableRipple color="primary">
                          + Add another (up to 3)
                        </Button>

                      </Grid> : null}
                      <Grid xs={12} item>
                        <TextField
                          onChange={(e) => { setmessage(e.target.value) }}
                          id="outlined-multiline-static"
                          label="Message"
                          multiline
                          rows={4}
                          Value={message}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <Typography className={classes.terms}>
                          By sending this inquiry, I accept Samsara's{" "}
                          <Link href="#" onClick={preventDefault}>
                            Terms and Conditions
                          </Link>{" "}
                          and{" "}
                          <Link href="#" onClick={preventDefault}>
                            Privacy Policy
                          </Link>{" "}
                          and{" "}
                          <Link href="#" onClick={preventDefault}>
                            Community Values
                          </Link>
                          .
                        </Typography>
                      </Grid>
                    </Grid>
                  </Container>
                </Grid>
              </Grid>

              <Grid xs={4} className={classes.propretyInfo} item>
                <Grid xs={12} item>
                  <Grid style={{ display: "flex" }} justify="flex-end" container>
                    <IconButton
                      style={{ position: "absolute" }}
                      aria-label="delete"
                      onClick={props.onClose}
                    >
                      <ClearIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs={12} item>
                    <Grid style={{ display: "flex" }} container>
                      <Grid
                        className={classes.info}
                        style={{
                          backgroundImage:
                            "url(" + props.image + ")",
                        }}
                        item
                      />

                      <Grid xs={12} item>
                        <Grid container>
                          <Grid xs={12} style={{ padding: "15px 0 9px" }} item>
                            <Typography
                              className={classes.price}
                              variant="h5"
                              component="span"
                            >
                              ${props.price}
                            </Typography>
                          </Grid>
                          <Grid xs={12} className={classes.nameContainer} item>
                            <Typography className={classes.name}>
                              {props.zip} at {props.address}
                            </Typography>
                            <CheckCircleIcon
                              height="15"
                              width="15"
                              style={{ marginLeft: "5px" }}
                              color="primary"
                            />
                          </Grid>
                          <Grid xs={12} className={classes.phoneContainer} item>
                            <PhoneInTalkIcon
                              height="15"
                              width="15"
                              style={{ marginRight: "5px" }}
                              color="primary"
                            />
                            <Link
                              className={classes.phone}
                              onClick={preventDefault}
                            >
                              {props.tel}
                            </Link>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid xs={12} className={classes.hoursText} item>
                        Open today
                      </Grid>
                      <Grid xs={12} className={classes.hoursToday} item>
                        9 am - 6 pm
                      </Grid>
                      <Grid xs={12} item>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography className={classes.heading}>
                              Show Full Hours
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid container>
                              <Grid xs={12} item>
                                <Grid justify="space-between" container>
                                  <Grid xs={5} item>
                                    Monday{" "}
                                  </Grid>
                                  <Grid xs={7} item>
                                    {" "}
                                    9 am - 6 pm
                                  </Grid>
                                </Grid>
                                <Grid justify="space-between" container>
                                  <Grid xs={5} item>
                                    Tuesday{" "}
                                  </Grid>
                                  <Grid xs={7} item>
                                    {" "}
                                    9 am - 6 pm
                                  </Grid>
                                </Grid>
                                <Grid justify="space-between" container>
                                  <Grid xs={5} item>
                                    Wednesday{" "}
                                  </Grid>
                                  <Grid xs={7} item>
                                    {" "}
                                    9 am - 6 pm
                                  </Grid>
                                </Grid>
                                <Grid justify="space-between" container>
                                  <Grid xs={5} item>
                                    Thursday{" "}
                                  </Grid>
                                  <Grid xs={7} item>
                                    {" "}
                                    9 am - 6 pm
                                  </Grid>
                                </Grid>
                                <Grid justify="space-between" container>
                                  <Grid xs={5} item>
                                    Friday{" "}
                                  </Grid>
                                  <Grid xs={7} item>
                                    {" "}
                                    9 am - 6 pm
                                  </Grid>
                                </Grid>
                                <Grid justify="space-between" container>
                                  <Grid xs={5} item>
                                    Saturday{" "}
                                  </Grid>
                                  <Grid xs={7} item>
                                    {" "}
                                    9 am - 6 pm
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid justify="space-between" container>
                                <Grid xs={5} item>
                                  Sunday{" "}
                                </Grid>
                                <Grid xs={7} item>
                                  {" "}
                                  9 am - 6 pm
                                </Grid>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            xs={12}
            className={`${classes.formRow} ${classes.bottomBar}`}
            item
          >
            <Grid container>
              <Grid xs={8} item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state}
                      onChange={handelStateChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Create an alert for listings like this"
                />
              </Grid>
              <Grid xs={4} item>
                <Grid container>
                  <Grid xs={5} style={{ display: "flex" }} item>
                    <Button className={classes.secondaryBut} variant="contained"
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid xs={7} style={{ display: "flex" }} item>
                    <Button
                      className={classes.primaryBut}
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={submit}
                    >
                      Check Availabelty
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
  

  );
};

export default RequestForm;
