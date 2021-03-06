import Head from "next/head";
import Layout from "../components/Layout";
import Favicon from "../components/Favicon";
import styles from "./styles/whats-on.module.scss";
import { Jumbotron } from "reactstrap";

export default function WhatsOn() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Sydney Sauna | What's On</title>
        <Favicon />
      </Head>

      <Layout>
        <div className={styles.jumbotron}>
          <h1 className={styles.heading}>Coming Soon!</h1>

          <p>
            Sydney Sauna is Sydney's premiere Gay men's sauna open 24 hours a
            day, 7 days a week, no matter what you're up to, or how your night
            is going, we are your destination. Sydney Sauna has many features
            available to it's customers.
          </p>
          <p>
            From 23 serviced rooms, 2 levels, plenty of cruise areas, large
            cinema room, fully serviced cafe and wet area including spa, sauna &
            steam room.
          </p>

          <p>
            For more detailed explanations and information Please wander through
            our site, if you have any other questions please don't hesitate to
            contact our friendly staff.
          </p>
        </div>
      </Layout>
    </div>
  );
}
