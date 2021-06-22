import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Room from '@material-ui/icons/Room';


function Map(props) {
  const [viewport, setViewport] = useState({
    latitude: 33.886917,
    longitude: 9.537499,
    zoom: 6
  });
  const [showPopup, togglePopup] = useState(false);
  const popup = () => {
    togglePopup(true)
  }
console.log(props.IDbuilding);
  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapboxApiAccessToken="pk.eyJ1Ijoic291ZmlhbmUwMjEzIiwiYSI6ImNrcTUxcGx2ZzA2dWMybnFvcmhhYTlvbXcifQ.E-hzJTnG3dnVSMyLI4loRg"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/soufiane0213/ckq539lxz0o8i18p3eep9obvt"
    >
      {props.blogs && props.blogs.map((blog) => (

        <Marker id={blog.id} key={blog.id} latitude={parseFloat(blog["data"].latitude)} longitude={parseFloat(blog["data"].longitude)} offsetLeft={-20} offsetTop={-10}>
          <Room style={{ fontSize: viewport.zoom * 4, color: "red" }} />
          {(props.IDbuilding == blog.id) ? (
            <Popup
              latitude={parseFloat(blog["data"].latitude)}
              longitude={parseFloat(blog["data"].longitude)}
              closeButton={true}
              closeOnClick={false}
              onClose={() => togglePopup(false)}
              anchor="left" >
              <div>You are here</div>
            </Popup>) : (
            <>
            </>
          )
          }

        </Marker>

      ))}
    </ReactMapGL>
  );
}
export default Map
