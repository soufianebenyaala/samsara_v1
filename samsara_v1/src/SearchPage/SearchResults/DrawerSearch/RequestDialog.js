import { Button, Dialog, DialogContent } from "@material-ui/core";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  close: {
    position: "absolute",
    top: "20px",
    right: "20px",
    display: "flex",
  },
  textField: {
    width: "25ch",
  },
  content: {
    padding: "30px 25px",
  },
  Titel: {
    paddingBottom: "20px",
    color: "#2a2b2c",
    fontWeight: "500",
    fontSize: "26px",
    lineHeight: "32px",
  },
  terms: {
    color: "#697179",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    display: "inline",
  },
  footer: {
    margin: "20px 0",
  },
}));
function SignUpDialog(props) {
  const [checked, setChecked, open, setOpen] = React.useState(false);
  const { children, onClose, ...other } = props;

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const preventDefault = (event) => event.preventDefault();
  const classes = useStyles();
  return (
    <div ref={props.myref}>
      <Dialog
        maxWidth="xs"
        open={props.open}
        aria-labelledby="form-dialog-title"
      >
        <IconButton className={classes.close} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <DialogContent className={classes.content}>
          <Typography variant="h5" component="h2">
            Tour this place
          </Typography>
          <Typography>
            Provide your availability for a tour in the property's time zone.
          </Typography>

          <TextField
            required
            style={{ width: "185px", marginRight: "10px" }}
            margin="normal"
            id="outlined-basic"
            label="full name"
            variant="outlined"
          />
          <TextField
            required
            style={{ width: "184px" }}
            margin="normal"
            type="email"
            id="outlined-basic"
            label="phone"
            variant="outlined"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <TextField
            fullWidth
            required
            id="standard-required"
            margin="normal"
            label="Move-In Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
          />
          <Typography>your availability for a tour.</Typography>
          <TextField
            required
            style={{ width: "185px", marginRight: "10px" }}
            margin="normal"
            id="outlined-basic"
            type="date"
            variant="outlined"
          />
          <TextField
            required
            style={{ width: "184px" }}
            margin="normal"
            type="email"
            id="outlined-basic"
            type="time"
            variant="outlined"
          />

          <TextField
            fullWidth
            required
            id="standard-required"
            margin="normal"
            l
            aria-readonly
            variant="outlined"
            defaultValue="I saw your rental listing at Zumper and would like to learn more. I'm looking for a Studio in the range of $2,300 to $3,000."
            multiline
            rowsMax={3}
          />
          <div className={classes.footer}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography className={classes.terms}>
              By sending this inquiry, you agree to Zumper's{" "}
              <Link href="#" onClick={preventDefault}>
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link href="#" onClick={preventDefault}>
                Privacy Policy
              </Link>
              .*
            </Typography>
          </div>

          <Divider style={{ margin: "30px 0" }} />
          <Button
            style={{
              width: "100%",
              color: "#fff",
              background: "#2e64e2",
              boxShadow: "0 1px 2px 0 rgba(0,0,0,.2)",
              textTransform: "none",
            }}
            variant="contained"
            color="primary"
          >
            Contact
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SignUpDialog;
