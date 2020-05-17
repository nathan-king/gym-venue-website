import Head from 'next/head'
import Layout from '../components/Layout'
import styles from './styles/massage.module.scss'

export default function Massage() {
    return (
      <div className={styles.main}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" type="image/x-icon" href="../public/favicon.ico" />
        </Head>
  
        <Layout>
            <div className={styles.content}>
                <h1 className={styles.heading}>Feeling tight? Book a massage!</h1>

                <p>Sydney Sauna offers a light bites menu 24 hours a day.  This includes wide range of food and beverages from the popular Italian Lavazza coffee, locally baked cakes and cookies and freshly cooked hot meals and toasties.</p> 

                <p>In addition we offer classic dishes including macaroni & cheese, butter chicken and newly added spaghetti bolognese.  Fresh, fast and delicious is the mantra of the Sydney Sauna team. For coffee, lunch, morning tea or a tasty snack, you'll be tempted by the delicious fare on offer.</p>

                <p>Sydney Sauna offers a light bites menu 24 hours a day.  This includes wide range of food and beverages from the popular Italian Lavazza coffee, locally baked cakes and cookies and freshly cooked hot meals and toasties.</p> 

                <p>In addition we offer classic dishes including macaroni & cheese, butter chicken and newly added spaghetti bolognese.  Fresh, fast and delicious is the mantra of the Sydney Sauna team. For coffee, lunch, morning tea or a tasty snack, you'll be tempted by the delicious fare on offer.</p>
            </div>
        </Layout>
      </div>
    )
  }
  