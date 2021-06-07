import React from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Maps from "./Maps";
import { makeStyles } from "@material-ui/core/styles";
import RailCurentSearchView from "./SearchRailComponent/RailCurentSearchView";
import SearchHeader from '../navbar/SearchHeader'
import theme from "../theme";
const useStyles = makeStyles((theme) => ({
  mainView: {
    position: "relative",
  },
  RailContainer: {
    position: "relative",
    width: "710px",
    height: "100%",
    [theme.breakpoints.down("sm")]:{
        width: '360px',
      }
  },
  RailRail: {
    width: "100%",
    minHeight: "100vh",
  },
  RailPlaceholder: {
    minHeight: "762px",
  },
  mapContainer:{
        position: 'fixed',
        top: '64px',
        right: '0',
        bottom: '0',
        left: 'auto',
        width: 'calc(100% - 710px)',
        background: 'rgba(252,252,253,.9)',
        border: '1px solid #e4e7e9',
    [theme.breakpoints.down("sm")]:{
        width: "calc(100% - 360px)",
    }
  }
}));

function SearchPage(props) {
  const classes = useStyles();
  return (
    <div>
        <SearchHeader mySearchBar="true" position="fixed" fontColor={theme.palette.common.black} color="default" Logo="https://d214hhm15p4t1d.cloudfront.net/nzr/df796830ad47fb10c09fa97d4cde17024f286eb8/img/zumper-logo-text-white.bd50acd5.svg"/>
      <div className={classes.mainView}>
        <div className={classes.RailContainer}>
          <div className={classes.RailRail}>
            <div className={classes.RailPlaceholder}>
              
              <RailCurentSearchView />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.mapContainer}>
        <Maps />
      </div>
    </div>
  );
}

export default SearchPage;
