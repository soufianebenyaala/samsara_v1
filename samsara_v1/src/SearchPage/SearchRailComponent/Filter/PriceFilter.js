import { Grid, Paper, Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React from "react";
import Slider from '@material-ui/core/Slider';
import { makeStyles,withStyles } from "@material-ui/core/styles";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles=makeStyles((theme)=>({
    filter:{
        position: "absolute",
        top: "63px",
        right: "10px",
        zIndex: "1050",
        padding: "15px 20px 25px",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 70px 40px rgb(0 0 0 / 15%), 0 3px 8px rgb(0 0 0 / 16%)",
        [theme.breakpoints.up("sm")]:{
        
            top: '53px',
            maxWidth: '355px',
   
        }
    },
    clearbtn:{
      padding: '0',
      color: '#b9bdc2',
      fontSize: '14px',
      background: 'none',
      border: '0',
      borderRadius: '0',
      cursor: 'pointer',
    },
    filterPrice:{
      left: '10px',
    },
    titel:{
      color: "#697179",
      fontSize: "14px",
      lineHeight: "100%",
    },
    text:{
      padding: "6px 8px",
    },
    histograme:{
    paddingBottom: "0",
    width: "100%",
    margin: "0 auto -35px",
    textAlign: "center",
    transform: "scaleY(-1) translateY(5px)",
    },
    btn:{
      color: "#2e64e2",
      textTransform:"none",
    },
    devider:{
      padding: "0 5px",
      color: "#949595",
      fontSize: "28px",
    }
}))
const PriceInput = withStyles({
  root: {
    '&:hover .MuiInputBase-input':{
      borderColor:" #2e64e2",
      borderBottomStyle: "solid",
      boxShadow: "none",
    },
    '& label.Mui-focused': {
      borderColor:" #2e64e2",
      borderBottomStyle: "solid",
      boxShadow: "none",
    },
    '& .MuiInput-underline:after': {
      borderColor:" #2e64e2",
      borderBottomStyle: "solid",
      boxShadow: "none",
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before':{
      borderColor:" #2e64e2",
      borderBottomStyle: "solid",
      boxShadow: "none",
    },
    '& .MuiInput-underline:before': {
      maxWidth: "15ch",
      padding: "5px 0",
      color: "#2e64e2",
      fontSize: "28px",
      border: "0",
      borderBottom: "1px dotted #2e64e2",
      borderRadius: "0",
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        outline: "none",
        borderColor:" #2e64e2",
        borderBottomStyle: "solid",
        boxShadow: "none",
      },
      '&:hover fieldset': {
        outline: "none",
        borderColor:" #2e64e2",
        borderBottomStyle: "solid",
        boxShadow: "none",
      },
      '&.Mui-focused fieldset': {
        outline: "none",
        borderColor:" #2e64e2",
        borderBottomStyle: "solid",
        boxShadow: "none",
      },
    },
  },
})(TextField);
const CustomSlider = withStyles({
  root: {
      color: "#2e64e2",
      height: 3,
      padding: "13px 0",
  },
  track: {
      height: 4,
      borderRadius: 2,
  },
  thumb: {
      height: 20,
      width: 20,
      backgroundColor: "#fff",
      border: "1px solid currentColor",
      marginTop: -9,
      marginLeft: -11,
      boxShadow: "#ebebeb 0 2px 2px",
      "&:focus, &:hover, &$active": {
          boxShadow: "#ccc 0 2px 3px 1px",
      },
      color: "#fff",
  },
})(Slider);
const PriceFilter = (props) => {
    const classes=useStyles()
  return (
    <ClickAwayListener onClickAway={props.handelClosePrice}>
    <Paper className={`${classes.filter} ${classes.filterPrice}`}>
      <Grid spacing={2} container>
        <Grid xs={12} item>
          <Grid  container>
            <Grid xs={4} item> <Typography component="h2"  className={`${classes.titel} ${classes.text}`}>Price</Typography></Grid>
            <Grid xs={8} item>
              <Grid justify="flex-end" container>
                <Grid xs={6} item>
                  <Grid container>
                    <Grid xs={6} item>
                      <Button className={classes.btn}>Clear</Button>
                    </Grid>
                    <Grid xs={6} item>
                      <Button className={classes.btn}>Done</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} item>
          <Grid spacing={2} justify="center" container>
            <Grid xs={12} item>
              <Grid container>
                <Grid xs={1} item>
                  <PriceInput  id="minimum-price" type="number" />
                </Grid>
                <div className={classes.devider}>
                  -
                </div>
                <Grid xs={8} item>
                  <PriceInput id="maximum-price" type="number" />
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.histograme} xs={12} item>
              <svg height="50" width="299">
              <rect fill="#BEC8CF" height="43.103448275862064" strokeWidth="0" width="1.85" x="91.2" y="0"></rect>
              </svg>
            </Grid>
            <Grid xs={11} item>
              <CustomSlider
                value={props.value}
                onChange={props.handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={props.valuetext}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </ClickAwayListener>
  );
};

export default PriceFilter;
