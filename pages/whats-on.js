import Head from 'next/head'
import Layout from '../components/Layout'
import styles from './styles/whats-on.module.scss'
import { Jumbotron } from 'reactstrap'

export default function WhatsOn() {
    return (
      <div className={styles.main}>
        <Head>
          <title>Create Next App</title>
        </Head>
  
        <Layout>
          <Jumbotron className={styles.jumbotron}>
            <h1>Need to add events dynamically<br /> through a database.</h1>

            <p>Sydney Sauna is Sydney's premiere Gay men's sauna open 24 hours a day, 7 days a week, no matter what you're up to, or how your night is going, we are your destination. Sydney Sauna has many features available to it's customers.</p> 
            <p>From 23 serviced rooms, 2 levels, plenty of cruise areas, large cinema room, fully serviced cafe and wet area including spa, sauna & steam room.</p>

            <p>For more detailed explanations and information Please wander through our site, if you have any other questions please don't hesitate to contact our friendly staff.</p>
          </Jumbotron>
        </Layout>
      </div>
    )
  }
  