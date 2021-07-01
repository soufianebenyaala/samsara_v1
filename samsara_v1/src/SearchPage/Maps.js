import * as React from "react";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Room from "@material-ui/icons/Room";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

function Map(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [viewport, setViewport] = useState({
    latitude: 33.886917,
    longitude: 9.537499,
    zoom: 6,
  });
  const [showPopup, togglePopup] = useState(false);
  const popup = () => {
    togglePopup(true);
  };
  const value = props.value;
  const nbrBath = props.nbrBath;
  const search = props.search;
  return (
    <ReactMapGL
      id="maps"
      {...viewport}
      width="100%"
      height="100%"
      mapboxApiAccessToken="pk.eyJ1Ijoic291ZmlhbmUwMjEzIiwiYSI6ImNrcTUxcGx2ZzA2dWMybnFvcmhhYTlvbXcifQ.E-hzJTnG3dnVSMyLI4loRg"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle="mapbox://styles/soufiane0213/ckq539lxz0o8i18p3eep9obvt"
    >
      {props.blogs &&
        Object.keys(props.blogs)
          .filter((val) => {
            if (search == "") {
              if (value == "all") {
                if (nbrBath == "all") {
                  return val;
                } else if (nbrBath == props.blogs[val].NumberOfRooms) {
                  return val;
                }
              } else if (value == props.blogs[val].NumberOfRooms) {
                if (nbrBath == "all") {
                  return val;
                } else if (nbrBath == props.blogs[val].NumberOfRooms) {
                  return val;
                }
              }
            } else if (
              props.blogs[val].buildingName
                .toLowerCase()
                .includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((blog) => (
            <div key={blog}>
              <Marker
                id={blog}
                key={blog}
                latitude={parseFloat(props.blogs[blog].latitude)}
                longitude={parseFloat(props.blogs[blog].longitude)}
                offsetLeft={-3.5 * viewport.zoom}
                offsetTop={-7 * viewport.zoom}
              >
                <Room style={{ fontSize: viewport.zoom * 7, color: "red" }} />
              </Marker>
              {props.IDbuilding == blog ? (
                <Popup
                  key={blog}
                  latitude={parseFloat(props.blogs[blog].latitude)}
                  longitude={parseFloat(props.blogs[blog].longitude)}
                  closeButton={true}
                  closeOnClick={false}
                  anchor="left"
                >
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography
                        key={props.blogs[blog].price}
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        {props.blogs[blog].price}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {props.blogs[blog].buildingName} DT
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        {props.blogs[blog].telephone}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {props.blogs[blog].adress}
                        <br />
                        {props.blogs[blog].zipcode}
                      </Typography>
                    </CardContent>
                  </Card>
                </Popup>
              ) : (
                <></>
              )}
            </div>
          ))}
    </ReactMapGL>
  );
}
export default Map;
