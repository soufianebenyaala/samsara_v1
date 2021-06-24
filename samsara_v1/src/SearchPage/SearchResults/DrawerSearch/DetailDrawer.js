import React,{useState} from "react";
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
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import FlagIcon from "@material-ui/icons/Flag";
import CheckIcon from "@material-ui/icons/Check";
import Contact from "../SearchResultCard/CardComponent/InfoContainerComponent/Contact";
import ShowMoreText from "react-show-more-text";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
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
  actionBtnContainer: {
    display: "flex",
    border: "1px solid #e4e7e9",
    borderRadius: "3px",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
  },
  TextHeader: {
    margin: "22px 0 5px",
    color: "#2b2c2d",
    fontWeight: "600",
    fontSize: "22px",
  },
  MySubHeader: {
    marginTop: "5px",
    color: "#2b2c2d",
    fontSize: "14px",
    lineHeight: "21px",
  },
  chip: {
    position: "relative",
    display: "inline-block",
    padding: "3px 6px",
    color: "#fff",
    fontWeight: "700",
    fontSize: "10px",
    fontFamily: "Arial,sans-serif",
    fontStyle: "normal",
    lineHeight: "9px",
    letterSpacing: ".3px",
    textAlign: "center",
    textTransform: "uppercase",
    verticalAlign: "middle",
    background: "#474e61",
    borderRadius: "55px",
    marginRight: "4px",
  },
  amineties: {
    margin: "26px 0 0",
    fontSize: "22px",
    lineHeight: "29px",
  },
  aminities_aminities: {
    position: "relative",
    display: "flex",
    flexGrow: "0",
    flexShrink: "1",
    flexBasis: "33.33%",
    alignItems: "center",
    paddingBottom: "20px",
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
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.images.length;

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
          <Button
            className={classes.button}
            onClick={props.handelCloseDetail}
            startIcon={<CloseIcon />}
          ></Button>
        </Grid>

        <Grid xs={10} className={classes.navContainer} item>
          <Typography className={classes.header} component="div">
            {props.price} DT
          </Typography>
          <Typography className={classes.subHeader} component="div">
            {props.buildingName}
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
    <Grid xs={6} item>
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header1}>
          
        </Paper>
        <img
          className={classes.img}
          src={props.images[activeStep]}
          alt="check your photos !"
          
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
              <Grid xs={12} item>
                <Grid justify="center" container>
                  {imagesStepper()}
                  <Grid xs={12} className={classes.headerHeader} item>
                    <Grid container>
                      <Grid xs={12} item>
                        <Grid justify="space-between" container>
                          <Grid style={{ marginTop: "auto" }} xs={4} item>
                            <Typography
                              className={classes.headerPrice}
                              component="h1"
                            >
                              {props.price} DT
                            </Typography>
                          </Grid>
                          <Grid
                            className={classes.actionBtnContainer}
                            xs={5}
                            item
                          >
                            <Button
                              style={{
                                flexGrow: "1",
                                borderRight: "1px solid #e4e7e9",
                                borderRadius: "3px 0 0 3px",
                              }}
                              startIcon={<FavoriteBorderIcon />}
                            ></Button>
                            <Button
                              style={{ flexGrow: "1" }}
                              startIcon={<ShareIcon />}
                            ></Button>
                            <Button
                              style={{
                                flexGrow: "1",
                                borderLeft: "1px solid #e4e7e9",
                                borderRadius: "3px 0 0 3px",
                              }}
                              startIcon={<FlagIcon />}
                            ></Button>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid xs={12} item>
                        <Typography
                          className={classes.TextHeader}
                          component="h1"
                        >
                          The Tides at {props.address}
                        </Typography>
                      </Grid>
                      <Grid xs={12} item>
                        <Typography
                          className={classes.MySubHeader}
                          component="h1"
                        >
                          Managed by {props.buildingName}
                          <br />
                          {}
                        </Typography>
                      </Grid>
                      <Grid style={{ marginTop: "12px" }} xs={12} item>
                        <div className={classes.chip}>
                          <CheckIcon style={{ fontSize: "10px" }} />
                          VERIFIED
                        </div>
                        <div className={classes.chip}>ONLINE</div>
                        <div className={classes.chip}>TOURSRENT</div>
                        <div className={classes.chip}>SPECIALPET</div>
                        <div className={classes.chip}>FRIENDLY</div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12} item>
                    <Contact
                      handelClickOnTour={props.handelClickOnTour}
                      handelClickOnMessage={props.handelClickOnMessage}
                    />
                  </Grid>
                  <Grid xs={12} className={classes.amineties} item>
                    <Grid container>
                      <Grid xs={12} item>
                        <Typography className={classes.TextHeader}>
                          Amenities
                        </Typography>
                      </Grid>
                      <Grid xs={12} className={classes.AminitiesContainer} item>
                        {/* bouchle sur amminities */}
                        <Grid className={classes.aminities_aminities} xs={4}>
                          <img
                            height="20px"
                            width="20px"
                            src="https://d214hhm15p4t1d.cloudfront.net/nzr/92a84ff66ca6d42660a2bcb0c1406e8a0e718055/img/generic_icon.d8a77d2a.svg"
                          />
                          <Typography> BBQ Areas</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12} item>
                      <Grid container>
                        <Grid xs={12} item>
                        <Typography className={classes.TextHeader}>
                        About The Tides at Lakeshore East
                        </Typography>
                        </Grid>
                        <Grid xs={12} item>
                        <ShowMoreText
                          lines={2}
                          more={<ExpandMore />}
                          less={<ExpandLess />}
                          onClick={onClick}
                          expanded={expand}
                          width={900}
                        >
                          Welcome to The Tides at Lakeshore EastLiving at The Tides is a great way to experience life and culture in the heart of Chicago! Featuring a modern contemporary feel, the Chicago apartment rentals at The Tides offer dramatic finishes including tiled entries, granite islands and cherry cabinetry, open floor plans with captivating views from the floor-to-ceiling windows, balconies and bay windows. Amenities abound in the exclusive Shore Club, a private club floor retreat, a full floor of amenities. In addition, life is easier with the Club Lincoln Perks program, giving you access to numerous events and preferred partner incentives and the Lakeshore East eco-friendly shuttle. This urban hideaway is located in the heart of Lakeshore East, Chicago's hottest residential community located where Lake Michigan meets the Chicago River, just north of Millennium Park. It is in this special corner of Chicago where the everyday conveniences of modern city life blend easily with the appeal of neighborhood charm. Our luxury apartments are more than just a place to call home they offer a unique lifestyle designed with attention to service and detail in mind.
Year Built: 2007
                        </ShowMoreText>
                        </Grid>
                      </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default DetailDrawer;
