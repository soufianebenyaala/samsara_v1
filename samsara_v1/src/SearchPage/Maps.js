import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, {Marker,Popup} from 'react-map-gl';
import Room from '@material-ui/icons/Room';


function Map(props) {
  const [viewport, setViewport] = useState({
    latitude: 33.886917,
    longitude: 9.537499,
    zoom: 6
  });
  const [showPopup, togglePopup] = useState(false);
const popup=()=>{
  togglePopup(true)
}
console.log(props.blog)
function markerrender(blogs){
  blogs && blogs.map((blog)=>{
    console.log("run");
     return(
      <Marker  latitude={parseFloat(blog.latitude)} longitude={parseFloat(blog.longitude)} offsetLeft={-20} offsetTop={-10}>
      <Room style={{fontSize:viewport.zoom *7,color:"red"}} />
      <Popup

        latitude={parseFloat(blog.latitude)}
        longitude={parseFloat(blog.longitude)}
        closeButton={true}
        closeOnClick={false}
        onClose={() => togglePopup(false)}
        anchor="left" >
        <div>You are here</div>
      </Popup>
      </Marker>
     )
  })
}

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapboxApiAccessToken="pk.eyJ1Ijoic291ZmlhbmUwMjEzIiwiYSI6ImNrcTUxcGx2ZzA2dWMybnFvcmhhYTlvbXcifQ.E-hzJTnG3dnVSMyLI4loRg"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/soufiane0213/ckq539lxz0o8i18p3eep9obvt"
    >
    {markerrender(props.blogs)}


  </ReactMapGL>
  );
}
export default Map
