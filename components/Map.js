import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import styles from './styles/Map.module.scss'

class Map extends Component {
  containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '1%'
  };

  center = {
    lat: -33.877713,
    lng: 151.213800
  };

  render() {
    return (
        <div className={styles.container}>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13249.638419550887!2d151.20215903403985!3d-33.87910329045248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae170528f677%3A0x5783791f7ea2aa90!2sSydney%20Sauna!5e0!3m2!1sen!2sau!4v1590035516958!5m2!1sen!2sau" width="100%" height="100%" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" className={styles.map}></iframe>
        </div>
    )
  }
}

export default Map;