import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';

class Maps extends Component {
    render() {
    const style = {
        width: '100%',
        height: '100%',
        
      }
      const containerStyle = {

        width: '100%',
        height: '100%'
      }
    return (
        <Map google={this.props.google} zoom={14} containerStyle={containerStyle} style={style}>
          
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>

        </InfoWindow>
      </Map>
    );
}
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCCgHXSwooK3Ygz7bGCJ-APsQOKkGwZEmg')
  })(Maps)
