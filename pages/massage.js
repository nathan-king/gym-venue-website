import Head from 'next/head'
import Layout from '../components/Layout'
import Favicon from '../components/Favicon'
import styles from './styles/massage.module.scss'
import { Jumbotron } from 'reactstrap'

export default function Massage() {
    return (
      <div className={styles.main}>
        <Head>
          <title>Sydney Sauna | Massage</title>
          <Favicon />
        </Head>
  
        <Layout>
            <div className={styles.content}>
                <h1 className={styles.heading}>Feeling tight? Book a massage!</h1>

                <h3>We also offer massage therapy,<br />performed by our qualified masseurs,<br />7 days a week. </h3> 
            </div>
            <Jumbotron className={styles.jumbotron}>
                <h2 className={styles.title}>Our Masseurs</h2>
                <div className={styles.masseur}>
                    <div className={styles.massageItem1}>
                        <div className={styles.photoContainer}>
                            <h3 className={styles.name}>Paul</h3>
                            <img src="../joe.jpeg" alt="Joe" className={styles.massagePicture} />
                        </div>
                    </div>
                    <div className={styles.massageItem2}>
                        <div className={styles.descriptionContainer}>
                            <p><blockquote>“I have always been a caring and helpful person.
                            Originating from Brazil and now been here in Sydney for 3 years, I specialise in relaxation massage.<br /><br />
                            My relaxation massage is a must to book in for and is a unique experience to be had while here at the Sauna.”</blockquote></p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.masseur} ${styles.masseur2}`} >
                    <div className={styles.massageItem2}>
                        <div className={styles.descriptionContainer}>
                            <p><blockquote>“I have always been a caring and helpful person.
                            Originating from Brazil and now been here in Sydney for 3 years, I specialise in relaxation massage.<br /><br />
                            My relaxation massage is a must to book in for and is a unique experience to be had while here at the Sauna.”</blockquote></p>
                        </div>
                    </div>
                    <div className={styles.massageItem1}>
                        <div className={styles.photoContainer} id={styles.photoContainerRight}>
                            <h3 className={styles.name}>Matt</h3>
                            <img src="../joe.jpeg" alt="Matt" className={styles.massagePicture} />
                        </div>
                    </div>
                </div>
                <div className={styles.times}>
                    <h3 className={styles.priceTitle}>Times</h3>
                    <p><strong>12pm - 9pm</strong><br />
                    7 Days a Week</p>
                    <p>Call Sydney Sauna on (02) 9360 3431 to make a booking and enjoy the rewards your body deserves.</p>

                    <p><em>Please note this is a non-sexual service.</em></p>
                </div>
                <div className={styles.prices}>
                    <h3 className={styles.priceTitle}>Prices</h3>
                    <div className={styles.priceItemContainer}>
                        <div className={styles.priceItem}>
                            <p>30 Minutes</p>
                            <p className="h2">$60</p>
                        </div>
                        <div className={styles.priceItem}>
                            <p>60 Minutes</p>
                            <p className="h2">$89</p>
                        </div>
                        <div className={styles.priceItem}>
                            <p>90 Minutes</p>
                            <p className="h2">$130</p>
                        </div>
                    </div>
                </div>
                
            </Jumbotron>
        </Layout>
      </div>
    )
  }
  