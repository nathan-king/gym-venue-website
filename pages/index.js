import Head from 'next/head'
import Layout from '../components/Layout'
import styles from './styles/index.module.scss'
import Popup from '../components/Popup'


export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Popup />
      <Layout>
        <main className={styles.content}> 
          <h1 className="mt-4 mb-4">Operating in the heart of Oxford Street and fresh from a comprehensive refit</h1>
          <h2 className="mb-6"> We aim to raise the bar for saunas in Australia</h2>

          <p className="mt-4">Sydney Sauna is Sydney's premiere Gay men's sauna open 24 hours a day, 7 days a week, no matter what you're up to, or how your night is going, we are your destination. Sydney Sauna has many features available to it's customers. From 23 serviced rooms, 2 levels, plenty of cruise areas, large cinema room, fully serviced cafe and wet area including spa, sauna & steam room.</p>

          <p>For more detailed explanations and information Please wander through our site, if you have any other questions please don't hesitate to contact our friendly staff.</p>
        </main>
      </Layout>
    </div>
  )
}
