import Head from "next/head";
import Layout from "../components/Layout";
import Favicon from "../components/Favicon";
import styles from "./styles/amenities.module.scss";
import { Jumbotron } from "reactstrap";

export default function Massage() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Sydney Sauna | Amenities</title>
        <Favicon />
      </Head>

      <Layout>
        <h1>Amenities</h1>
        <div className={styles.jumbotron}>
          <div className={styles.box}>
            <p>
              Sydney Sauna is Sydney's most exquisitely fitted sauna with 23
              lockable rooms, spacious spa and steam room, traditional cedar
              sauna, free internet and Wi-Fi, large cinema room and funky cafe.
            </p>

            <p>
              Whether your focus is to meet, or to relax, we have the right area
              for you. If your day has been particularly grueling, our highly
              trained masseurs are here to help. With competitive rates, they
              will help you to wind down and relax.
            </p>

            <p>
              For your viewing pleasure Sydney Sauna is leading the way with
              edited content, showcasing some of the best pornography out there
              without the cliché vanilla scenes you would usually bypass.{" "}
            </p>

            <p>
              If you'd like to see our Venue, please select the Gallery below.
              Though we'd like to see you in person and know you'll enjoy all we
              have to offer.
            </p>
          </div>
          <div className={styles.box}>
            <div>
              <ul>
                <h2 class="h5" className={styles.listHeading}>
                  Our facilities are the best in Sydney and include:
                </h2>
                <div className={styles.lists}>
                  <div>
                    <li>Steam Room</li>
                    <li>Dry Sauna</li>
                    <li>Spa</li>
                    <li>Lockable Rooms</li>
                    <li>Themed Room</li>
                    <li>Maze</li>
                    <li>Mirrored Sling Room</li>
                  </div>
                  <div>
                    <li>Glory Holes</li>
                    <li>Edited Video Content</li>
                    <li>
                      Private rooms<sup> 1</sup>
                    </li>
                    <li>Internet Lounge</li>
                    <li>
                      Movie Theatre<sup> 2</sup>
                    </li>
                    <li>Video Lounge</li>
                    <li>Large Porn Lounge</li>
                  </div>
                </div>
              </ul>
            </div>
            <div className={styles.footnotes}>
              <p>
                <sup>1 </sup>including Sony TV, Chromecast & Sling
                <br />
                <sup>2 </sup>showing current and classic movies
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
