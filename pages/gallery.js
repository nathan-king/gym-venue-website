import Head from "next/head";
import Layout from "../components/Layout";
import Favicon from "../components/Favicon";
import styles from "./styles/gallery.module.scss";
import React from "react";
import { Spinner } from "reactstrap";
import dynamic from "next/dynamic";

export default function Gallery() {
  const Carousel = dynamic(() => import("../components/Carousel"), {
    loading: () => (
      <div className={styles.spinner}>
        <Spinner color="info" />
      </div>
    ),
  });

  return (
    <div className={styles.main}>
      <Head>
        <title>Sydney Sauna | Gallery</title>
        <Favicon />
      </Head>
      <Layout>
        <main className={styles.carouselContainer}>
          <h1 className={styles.heading}>Gallery</h1>
          <Carousel styles={styles} />
        </main>
      </Layout>
    </div>
  );
}
