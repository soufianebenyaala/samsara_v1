import { Grid, Paper, Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { makeStyles,withStyles } from "@material-ui/core/styles";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

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
    filterBeds:{
        left: "90px",
    },
    filterBath:{
        left: "90px",
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
const FilterToggleButton = withStyles({
    root: {
      "&$selected": {
          color: "#2e64e2",
          textShadow: "-.01ex 0 #2e64e2,.01ex 0 #2e64e2",
          borderColor: "#2e64e2",
          borderLeftColor:"#2e64e2",
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
      backgroundColor:"#fff",
  },
    
  })(ToggleButton);
  const FilterToggleButtonContainer = withStyles({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    
  })(ToggleButtonGroup);
const FilterWithTogelButtons = (props) => {
    const classes=useStyles()
  return (
    <ClickAwayListener onClickAway={props.handelCloseFilter}>
    <Paper className={`${classes.filter} ${props.type==="Bed"?classes.filterBeds:classes.filterBath}`}>
      <Grid spacing={2} container>
        <Grid xs={12} item>
          <Grid  container>
            <Grid xs={4} item> <Typography component="h2"  className={`${classes.titel} ${classes.text}`}>{props.type}</Typography></Grid>
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
        <FilterToggleButtonContainer
              value={props.nbrOfFilter}
              onChange={props.handelNbrOfFilter}
              arial-label={props.type==="Bed"?"number-of-beds":"number-of-bath"}
              exclusive
            >
                {props.list.map(flt =>
                    <FilterToggleButton value={flt}>{flt}</FilterToggleButton>
                    )}
              
              
            </FilterToggleButtonContainer>
        </Grid>
      </Grid>
    </Paper>
    </ClickAwayListener>
  );
};

export default FilterWithTogelButtons;
