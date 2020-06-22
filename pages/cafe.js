import Head from "next/head";
import Layout from "../components/Layout";
import Favicon from "../components/Favicon";
import styles from "./styles/cafe.module.scss";

export default function Cafe() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Sydney Sauna | Café</title>
        <Favicon />
      </Head>

      <Layout>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Enjoy delicious foods and beverages
          </h1>

          <p>
            Sydney Sauna offers a light bites menu 24 hours a day. This includes
            wide range of food and beverages from the popular Italian Lavazza
            coffee, locally baked cakes and cookies and freshly cooked hot meals
            and toasties.
          </p>

          <p>
            In addition we offer classic dishes including macaroni & cheese,
            butter chicken and newly added spaghetti bolognese. Fresh, fast and
            delicious is the mantra of the Sydney Sauna team. For coffee, lunch,
            morning tea or a tasty snack, you'll be tempted by the delicious
            fare on offer.
          </p>
          <div className={styles.imageContainer}>
            <img
              src="/ss-coffee-machine.jpg"
              alt="coffee machine"
              className={styles.image}
            />
            <img
              src="/ss-spaghetti.jpg"
              alt="spaghetti"
              className={styles.image}
            />
            <img src="/toastie.jpg" alt="toastie" className={styles.image} />
          </div>
        </div>
      </Layout>
    </div>
  );
}
