import Head from "next/head";
import Layout from "../components/Layout";
import Favicon from "../components/Favicon";
import styles from "./styles/prices.module.scss";
import { Container, Row, Col } from "reactstrap";

export default function Prices() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Sydney Sauna | Prices</title>
        <Favicon />
      </Head>

      <Layout>
        <h1 className={styles.heading}>Prices</h1>
        <Container className={styles.container}>
          <Row>
            <Col xs="12" className={styles.col}>
              <h3>A $2 COVID-19 surcharge will apply on all entry prices</h3>
            </Col>
          </Row>
          <Row>
            <Col sm="6" className={styles.col}>
              <h2>Casual Entry</h2>
              <h1>$27</h1>
            </Col>
            <Col sm="6" className={styles.col}>
              <h2>Casual Entry</h2>
              <h1>$25</h1>
            </Col>
          </Row>
          <Row>
            <Col sm="6" className={styles.col}>
              <h2>Tight Ass Tuesday</h2>
              <h1>$15</h1>
              <p>Tuesday 10am till midnight</p>
            </Col>
            <Col sm="6" className={styles.col}>
              <h2>Buddies Night</h2>
              <h1>
                $32
                <sup>
                  <p style={{ display: "inline-block", marginLeft: ".8rem" }}>
                    per 2
                  </p>
                </sup>
              </h1>
              <p>Wednesday 4pm till midnight</p>
            </Col>
          </Row>
          <Row>
            <Col sm="6" className={styles.col}>
              <h2>Nude Thursday</h2>
              <h1>$20</h1>
              <p>Thursday 12pm till midnight</p>
            </Col>
            <Col sm="6" className={styles.col}>
              <h2>Weekday Lunch</h2>
              <h1>$20</h1>
              <p>Weekdays 10am till 2pm</p>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className={styles.col}>
              <h2>Weekend Lunch</h2>
              <h1>$17</h1>
              <p>Saturday & sunday 12pm till 2pm</p>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className={styles.col}>
              <p>$2 surcharge will apply on all nsw public holidays</p>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}
