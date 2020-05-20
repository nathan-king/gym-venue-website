import Head from 'next/head'
import Layout from '../components/Layout'
import styles from './styles/index.module.scss'
import Popup from '../components/Popup'
import Favicon from '../components/Favicon'
import AgeDisclaimer from '../components/AgeDisclaimer'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../components/Map'))

export default function Home() {

  return (
    <div className={styles.main}>
      <Head>
        <Favicon />
      </Head>
      <AgeDisclaimer />
      <Popup />
      <Layout>
        <main className={styles.content}> 
          <h1 className="mt-4 mb-4">Operating in the heart of Oxford Street and fresh from a comprehensive refit</h1>
          <h2 className="mb-6"> We aim to raise the bar for saunas in Australia</h2>

          <p className="mt-4">Sydney Sauna is Sydney's premiere Gay men's sauna open 24 hours a day, 7 days a week, no matter what you're up to, or how your night is going, we are your destination. Sydney Sauna has many features available to it's customers. From 23 serviced rooms, 2 levels, plenty of cruise areas, large cinema room, fully serviced cafe and wet area including spa, sauna & steam room.</p>

          <p>For more detailed explanations and information Please wander through our site, if you have any other questions please don't hesitate to contact our friendly staff.</p>
          <div className={styles.mapContainer}>
          <Map  className={styles.map}/>
          </div>
        </main>
      </Layout>
    </div>
  )
}
