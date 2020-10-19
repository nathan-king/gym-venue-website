import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./styles/Map.module.scss";

class Map extends Component {
  containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
  };

  center = {
    lat: -33.877368,
    lng: 151.218941,
  };

  render() {
    return (
      <div className={styles.container}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.490707093764!2d151.2165313145189!3d-33.877013926915225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae117715425b%3A0x13017d67e6888ca0!2s196-200%20Forbes%20St%2C%20Darlinghurst%20NSW%202010!5e0!3m2!1sen!2sau!4v1603074279956!5m2!1sen!2sau"
          width="100%"
          height="100%"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          className={styles.map}
        ></iframe>
      </div>
    );
  }
}

export default Map;
