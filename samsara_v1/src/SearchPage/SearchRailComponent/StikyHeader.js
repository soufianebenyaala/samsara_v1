import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import TuneIcon from "@material-ui/icons/Tune";
import PriceFilter from "./Filter/PriceFilter";
import FilterWithTogelButtons from "./Filter/FilterWithTogelButtons";

const useStyles = makeStyles((theme) => ({
  StikyHeader: {
    position: "fixed",
    zIndex: "1020",
    width: "710px",
    backgroundColor: "#fff",
    top: "64px",
    [theme.breakpoints.down("sm")]: {
      width: "360px",
    },
  },
  HeaderContainer: {
    margin: "0",
    padding: "20px 15px 7px",
  },
  FilterBar: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "60px",

    backgroundColor: "#fff",
    borderTop: "1px solid #dfe2e4",
    borderBottom: "1px solid #dfe2e4",
    [theme.breakpoints.up("sm")]: {
      height: "54px",
      paddingTop: "0",
      borderTop: "0",
    },
  },
  FilterBarBtn: {
    paddingLeft: "15px",
    position: "relative",
    bottom: "3px",
    zIndex: "0",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflowX: "auto",
  },
}));
const FilterButton = withStyles({
  root: {
    position: "relative",
    display: "flex",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: "6px",
    padding: "10px",
    color: "#4e5865",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "-.1px",
    whiteSpace: "nowrap",
    background: "#fff",
    border: ".5px solid #b9bdc2",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "color .25s,border-color .25s",
    textTransform: "none",
    "&:hover": {
      color: "#2e64e2",
      borderColor: "#2e64e2",
    },
    "&:active": {
      color: "#2e64e2",
      borderColor: "#2e64e2",
    },
  },
})(Button);
const StikyHeader = () => {
  const classes = useStyles();
  const [Price, setPrice] = useState(false);
  const handelClickPrice = () => {
    setPrice(true);
  };
  const handelClosePrice = () => {
    setPrice(false);
  };
  const [Bed, setBed] = useState(false);
  const handelClickBed = () => {
    setBed(true);
  };
  const handelCloseBed = () => {
    setBed(false);
  };
  const [Bath, setBath] = useState(false);
  const handelClickBath = () => {
    setBath(true);
  };
  const handelCloseBath = () => {
    setBath(false);
  };
  const [NbrOfBathRooms, setNbrOfBathRooms] = useState("1");
  const handleChangeNbrOfBathRooms = (event, newNbr) => {
    setNbrOfBathRooms(newNbr);
  };
  const [NbrOfRooms, setNbrOfRooms] = useState("Studio");
  const handleChangeNbrOfRooms = (event, newNbr) => {
    setNbrOfRooms(newNbr);
  };
  return (
    <div className={classes.StikyHeader}>
      <div className={classes.HeaderContainer}>
        <Typography variant="h5" component="h1">
          Apartments for Rent
        </Typography>
      </div>
      <div className={classes.FilterBar}>
        <div className={classes.FilterBarBtn}>
          <FilterButton startIcon={<TuneIcon />}>All Filter</FilterButton>
          <FilterButton
            style={Price ? { color: "#2e64e2", borderColor: "#2e64e2" } : {}}
            onClick={handelClickPrice}
          >
            Price
          </FilterButton>
          <FilterButton
            style={Bed ? { color: "#2e64e2", borderColor: "#2e64e2" } : {}}
            onClick={handelClickBed}
          >
            Bed
          </FilterButton>
          <FilterButton
            style={Bath ? { color: "#2e64e2", borderColor: "#2e64e2" } : {}}
            onClick={handelClickBath}
          >
            Bath
          </FilterButton>
        </div>
        {Price ? <PriceFilter handelClosePrice={handelClosePrice} /> : null}
        {Bed ? (
          <FilterWithTogelButtons
            handelCloseFilter={handelCloseBed}
            nbrOfFilter={NbrOfRooms}
            handelNbrOfFilter={handleChangeNbrOfRooms}
            type="Bed"
            list={["Studio", "1", "2", "3", "4+"]}
          />
        ) : null}
        {Bath ? (
          <FilterWithTogelButtons
            handelCloseFilter={handelCloseBath}
            nbrOfFilter={NbrOfBathRooms}
            handelNbrOfFilter={handleChangeNbrOfBathRooms}
            type="Bath"
            list={["1", "2", "3", "4", "5+"]}
          />
        ) : null}
      </div>
    </div>
  );
};

export default StikyHeader;
