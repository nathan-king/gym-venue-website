import Head from "next/head";
import Layout from "../components/Layout";
import styles from "./styles/index.module.scss";
import Popup from "../components/Popup";
import Favicon from "../components/Favicon";
import AgeDisclaimer from "../components/AgeDisclaimer";
import React, { Suspense } from "react";
import { Spinner } from "reactstrap";
import dynamic from "next/dynamic";

export default function Home() {
  const [showMap, setShowMap] = React.useState(false);

  // React.useEffect(() => {
  //   const timeOut = setTimeout(() => setShowMap(true), 2000);

  //   return () => clearTimeout(timeOut);
  // }, []);

  const Map = dynamic(() => import("../components/Map"), {
    loading: () => (
      <div className={styles.spinner}>
        <Spinner color="info" />
      </div>
    ),
  });

  return (
    <div className={styles.main}>
      <Head>
        <title>Sydney Sauna | About Us</title>
        <Favicon />
        <script src="/static/chrome-fix.js" />
      </Head>
      <AgeDisclaimer />
      {/* <Popup /> */}
      <Layout>
        <main className={styles.content}>
          <h1 className="mt-4 mb-4" className={styles.heading}>
            Operating in the heart of Oxford Street and fresh from a
            comprehensive refit
          </h1>
          <h2 className="mb-6">
            We aim to raise the bar for saunas in Australia
          </h2>

          <p className="mt-4">
            Sydney Sauna is Sydney's premiere Gay men's sauna open 24 hours a
            day, 7 days a week, no matter what you're up to, or how your night
            is going, we are your destination. Sydney Sauna has many features
            available to it's customers. From 23 serviced rooms, 2 levels,
            plenty of cruise areas, large cinema room, fully serviced cafe and
            wet area including spa, sauna & steam room.
          </p>

          <p>
            For more detailed explanations and information Please wander through
            our site, if you have any other questions please don't hesitate to
            contact our friendly staff.
          </p>

          <div className={styles.mapContainer}>
            <Map className={styles.map} />
          </div>

          {/* {!showMap ? (
            <div className={styles.spinner}>
              <Spinner color="info" />
            </div>
          ) : (
            <div className={styles.mapContainer}>
              <Map className={styles.map} />
            </div>
          )} */}
        </main>
      </Layout>
    </div>
  );
}
