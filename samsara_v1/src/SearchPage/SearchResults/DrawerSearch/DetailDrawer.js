import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import CloseIcon from "@material-ui/icons/Close";
import { Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import image from "./logo111.jpg";
import image1 from "./logo111.png";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import FlagIcon from '@material-ui/icons/Flag';
const useStyles = makeStyles((theme) => ({
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    height: "64px",
    borderBottom: "1px solid #e4e7e9",
  },
  button: {
    width: "100%",
    minWidth: "75px",
    borderRight: "1px solid #e4e7e9",
    height: "100%",
    "&:hover": {
      background: "#f4f5f7",
    },
  },
  navContainer: {
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "calc(100% - 275px)",
  },
  header: {
    width: "100%",
    overflow: "hidden",
    color: "#2a2b2c",
    fontWeight: "400",
    fontSize: "19px",
    lineHeight: "24px",
    whiteSpace: "nowrap",
    textAlign: "center",
    textOverflow: "ellipsis",
  },
  subHeader: {
    width: "100%",
    overflow: "hidden",
    color: "#757575",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "17px",
    whiteSpace: "nowrap",
    textAlign: "center",
    textOverflow: "ellipsis",
  },
  drawer: {
    position: "relative",
    zIndex: "1050",
    width: "calc(100% - 230px)",
    maxWidth: "1100px",
    height: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgb(0 0 0 / 50%)",
    pointerEvents: "auto",
  },
  content: {
    display: "flex",
    flexFlow: "row nowrap",
    width: "970px",
  },
  root: {
    flexGrow: 1,
    justifyContent: "center",
  },
  header1: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  headerHeader: {
    padding: "20px 0",
    color: "#2b2c2d",
  },
  img: {
    height: 255,
    overflow: "hidden",
    display: "block",
    width: "100%",
  },
  buble: {
    display: "flex",
    justifyContent: "center",
  },
  headerPrice: {
    fontWeight: "600",
    fontSize: "22px",
    lineHeight: "27.5px",
    
  },
  actionBtnContainer:{
    display: "flex",
     border: "1px solid #e4e7e9",
    borderRadius: "3px",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
  },
}));
const tileData = [
  {
    img: image1,
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: image,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: image,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: image,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: image,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: image,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: image,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: image,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: image,
    title: "Image",
    author: "author",
    cols: 1,
  },
];
const DetailDrawer = (props) => {
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tileData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const classes = useStyles();
  const header = () => (
    <Grid className={classes.navBar} xs={12} item>
      <Grid container>
        <Grid xs={1} item>
          <Button className={classes.button} startIcon={<CloseIcon />}></Button>
        </Grid>

        <Grid xs={10} className={classes.navContainer} item>
          <Typography className={classes.header} component="div">
            $2,183—$8,392
          </Typography>
          <Typography className={classes.subHeader} component="div">
            Union Denver Apartments
          </Typography>
        </Grid>

        <Grid xs={2} item>
          <Grid style={{ height: "100%" }} container>
            <Grid xs={6} item>
              <Button
                style={{ borderLeft: "1px solid #e4e7e9" }}
                className={classes.button}
                startIcon={<KeyboardArrowLeftIcon />}
              ></Button>
            </Grid>
            <Grid xs={6} item>
              <Button
                className={classes.button}
                startIcon={<KeyboardArrowRightIcon />}
              ></Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
  const imagesStepper = () => (
    <Grid xs={12} item>
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header1}>
          <Typography>{tileData[activeStep].label}</Typography>
        </Paper>
        <img
          className={classes.img}
          src={tileData[activeStep].img}
          alt={tileData[activeStep].label}
        />
        <MobileStepper
          style={{ background: "cornflowerblue" }}
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
    </Grid>
  );
  return (
    <>
      <Drawer
        classes={{ paper: classes.drawer }}
        onClose={props.handelCloseDetail}
        open={props.openDetail}
      >
        <Grid container>
          {header()}
          <Grid className={classes.buble} xs={12} item>
            <Grid className={classes.content} container>
              <Grid xs={6}>
                <Grid container>
                  {imagesStepper()}
                  <Grid xs={12} className={classes.headerHeader} item>
                    <Grid container>
                      <Grid xs={12} item>
                        <Grid justify="space-between" container>
                          <Grid style={{marginTop: "auto",}} xs={4} item>
                            <Typography
                              className={classes.headerPrice}
                              component="h1"
                            >
                              $2,183—$8,392
                            </Typography>
                          </Grid>
                          <Grid  className={classes.actionBtnContainer} xs={5} item>
                            <Button
                            style={{flexGrow: "1", borderRight: "1px solid #e4e7e9",
                            borderRadius: "3px 0 0 3px",}}
                              startIcon={<FavoriteBorderIcon />}
                            ></Button>
                            <Button
                            style={{flexGrow: "1"}}
                              startIcon={<ShareIcon />}
                            ></Button>
                            <Button
                            style={{flexGrow: "1" ,borderLeft: "1px solid #e4e7e9",
                            borderRadius: "3px 0 0 3px",}}
                              startIcon={<FlagIcon />}
                            ></Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={6}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default DetailDrawer;
