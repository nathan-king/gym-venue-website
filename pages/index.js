import Head from 'next/head'
import Layout from '../components/Layout'
import styles from './styles/index.module.scss'
import Popup from '../components/Popup'
import Favicon from '../components/Favicon'


export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <Favicon />
      </Head>

      <Popup />
      <Layout>
        <main className={styles.content}> 
          <h1 className="mt-4 mb-4">Operating in the heart of Oxford Street and fresh from a comprehensive refit</h1>
          <h2 className="mb-6"> We aim to raise the bar for saunas in Australia</h2>

          <p className="mt-4">Sydney Sauna is Sydney's premiere Gay men's sauna open 24 hours a day, 7 days a week, no matter what you're up to, or how your night is going, we are your destination. Sydney Sauna has many features available to it's customers. From 23 serviced rooms, 2 levels, plenty of cruise areas, large cinema room, fully serviced cafe and wet area including spa, sauna & steam room.</p>

          <p>For more detailed explanations and information Please wander through our site, if you have any other questions please don't hesitate to contact our friendly staff.</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4587865577496!2d151.21157941521045!3d-33.877836280653895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae170528f677%3A0x5783791f7ea2aa90!2sSydney%20Sauna!5e0!3m2!1sen!2sus!4v1588304248340!5m2!1sen!2sus" class="embed-responsive-item center i-frame" width="500px" height="400px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </main>
      </Layout>
    </div>
  )
}
