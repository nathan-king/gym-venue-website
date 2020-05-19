import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import styles from './styles/Map.module.scss'

class Map extends Component {
  containerStyle = {
    width: '800px',
    height: '400px',
    borderRadius: '1%'
  };

  center = {
    lat: -33.877713,
    lng: 151.213800
  };

  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyBpbaNt13bc6tVBdxLQwDxJ1zgft7OOpiM"
      >
        <GoogleMap
          mapContainerStyle={this.containerStyle}
          center={this.center}
          zoom={17}
          className={styles.map}
        >
        <Marker position={{ lat: -33.877713, lng: 151.213800 }} />
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default Map;