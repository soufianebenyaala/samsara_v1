import React from "react";
import Maps from "./Maps";
import { makeStyles } from "@material-ui/core/styles";
import RailCurentSearchView from "./SearchRailComponent/RailCurentSearchView";
import Header from "../navbar/Header";
import theme from "../theme";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import img from "../Home/blacklogo-01.svg";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const useStyles = makeStyles((theme) => ({
  mainView: {
    position: "relative",
  },
  RailContainer: {
    position: "relative",
    width: "710px",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "360px",
    },
  },
  RailRail: {
    width: "100%",
    minHeight: "100vh",
  },
  RailPlaceholder: {
    minHeight: "762px",
  },
  mapContainer: {
    position: "fixed",
    top: "64px",
    right: "0",
    bottom: "0",
    left: "auto",
    width: "calc(100% - 710px)",
    background: "rgba(252,252,253,.9)",
    border: "1px solid #e4e7e9",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 360px)",
    },
  },
  white: {
    background: "#fff",
  },
}));

function SearchPage(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState([]);
  const [IDbuilding, setIDbuilding] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const productid = queryParams.get("searchIndex");
    if (productid) {
      setSearch(productid);
    }
  }, []);
  const [item, setItem] = useState([]);
  const [value, setValue] = useState("all");
  const [nbrBath, setNbrBath] = useState("all");
  return (
    <div>
      <Header
        setSearch={setSearch}
        productid={search}
        className={classes.white}
        mySearchBar="true"
        position="fixed"
        fontColor={theme.palette.common.black}
        Logo={img}
      />
      <div className={classes.mainView}>
        <div className={classes.RailContainer}>
          <div className={classes.RailRail}>
            <div className={classes.RailPlaceholder}>
              <RailCurentSearchView
                value={value}
                setValue={setValue}
                nbrBath={nbrBath}
                setNbrBath={setNbrBath}
                item={item}
                setItem={setItem}
                search={search}
                setIDbuilding={setIDbuilding}
                blogs={props.products.Allproduct}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.mapContainer}>
        {
          <Maps
            value={value}
            setValue={setValue}
            nbrBath={nbrBath}
            search={search}
            setNbrBath={setNbrBath}
            blogs={props.products.Allproduct}
            IDbuilding={IDbuilding}
          />
        }
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.firestore.data,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Allproduct" }])
)(SearchPage);
