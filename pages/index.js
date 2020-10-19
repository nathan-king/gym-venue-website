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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <h2 className="mb-6">Donec interdum et sem sed scelerisque.</h2>

          <p className="mt-4">
            Nam fermentum nec tellus in imperdiet. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            ante dui, egestas ac purus ac, sagittis iaculis metus. Maecenas
            convallis ligula massa, sed blandit odio mollis vel. Vivamus
            interdum magna in diam facilisis, non scelerisque sem auctor. Aenean
            placerat efficitur leo in mollis. Nunc ac magna non tellus blandit
            tincidunt.
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
