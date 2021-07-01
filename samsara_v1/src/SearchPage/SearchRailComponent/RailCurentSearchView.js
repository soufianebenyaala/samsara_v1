import React, { useState } from "react";
import DrawerSearch from "../SearchResults/DrawerSearch/DrawerSearch";
import { makeStyles } from "@material-ui/core/styles";
import StikyHeader from "./StikyHeader";
import { SpeakerGroupSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  contentSection: {
    width: "100%",
    height: "100%",
    background: "#fff",
  },
  StikyHeaderContainer: {
    paddingTop: "180px",
  },
  listables: {
    minHeight: "calc(100% - 210px)",
    margin: "0 15px 2px",
  },
}));
function RailCurentSearchView(props) {
  const classes = useStyles();

  const search = props.search;
  const value = props.value;
  const nbrBath = props.nbrBath;

  return (
    <div className={classes.contentSection}>
      <div className={classes.StikyHeaderContainer}>
        <StikyHeader setValue={props.setValue} setNbrBath={props.setNbrBath} />

        <div className={classes.listables}>
          {props.blogs &&
            Object.keys(props.blogs)
              .filter((val) => {
                const find =
                  props.blogs[val].buildingName +
                  props.blogs[val].adress +
                  props.blogs[val].state;

                if (search == "") {
                  if (value == "all") {
                    if (nbrBath == "all") {
                      return props.blogs[val];
                    } else if (nbrBath == props.blogs[val].NumberOfRooms) {
                      return props.blogs[val];
                    }
                  } else if (value == props.blogs[val].NumberOfRooms) {
                    if (nbrBath == "all") {
                      return props.blogs[val];
                    } else if (nbrBath == props.blogs[val].NumberOfRooms) {
                      return props.blogs[val];
                    }
                  }
                } else if (find.toLowerCase().includes(search.toLowerCase())) {
                  if (value == "all") {
                    if (nbrBath == "all") {
                      return props.blogs[val];
                    } else if (nbrBath == props.blogs[val].NumberOfRooms) {
                      return props.blogs[val];
                    }
                  } else if (value == props.blogs[val].NumberOfRooms) {
                    if (nbrBath == "all") {
                      return props.blogs[val];
                    } else if (nbrBath == props.blogs[val].NumberOfRooms) {
                      return props.blogs[val];
                    }
                  }
                }
              })
              .map((blog) => {
                return (
                  <DrawerSearch
                    key={blog}
                    id={blog}
                    setIDbuilding={props.setIDbuilding}
                    building={props.blogs[blog]}
                    id_building={blog}
                  ></DrawerSearch>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default RailCurentSearchView;
