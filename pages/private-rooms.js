import Head from "next/head";
import Layout from "../components/Layout";
import Favicon from "../components/Favicon";
import styles from "./styles/private-rooms.module.scss";

import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "../ss-red-room.jpg",
    altText: "Red Room",
    caption: "$65 if already in the venue",
    header: "Red Room | $80 for 6 hours",
    key: "1",
  },
  {
    src: "../ss-black-room.jpg",
    altText: "Black Room",
    caption: "$85 if already in the venue",
    header: "Black Room | $99 for 6 hours",
    key: "2",
  },
];

export default function PrivateRooms() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Sydney Sauna | Private Rooms</title>
        <Favicon />
      </Head>

      <Layout>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Want More Privacy?
            <br />
            Check Out One of Our Private Rooms
          </h1>

          <p>
            Our private rooms are available for hire 24 hours a day, 365 days a
            year for a period of 6 hours with the option an extending hours if
            preferred.
          </p>

          <p>
            The red room include a memory foam mattress with fresh bed linen,
            secure safe, wardrobe with coat hangers, Sony 55" Ultra HD TV with
            remote and Ultra HD Chromecast, enabling you to cast your laptop or
            chrome browser directly to the TV, wirelessly!! We also provide
            lube, condoms, towels and bottled water.
          </p>

          <UncontrolledCarousel items={items} className={styles.carousel} />
          <div className={styles.footnote}>
            <p>Can be extended for a further 6 hours or $15.00 per hour</p>
          </div>
          <div className={styles.smallCaption}>
            <br />
            <p>
              <strong>Red Room</strong>
              <br />
              $80 for 6 hours, $65 if already in the venue
            </p>
            <p>
              <strong>Black Room</strong>
              <br />
              $99 for 6 hours, $85 if already in the venue
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}
