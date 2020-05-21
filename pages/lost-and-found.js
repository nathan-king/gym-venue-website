import Head from 'next/head'
import Layout from '../components/Layout'
import Favicon from '../components/Favicon'
import styles from './styles/lost-and-found.module.scss'
import { Button, Jumbotron } from 'reactstrap';


export default function Contact() {

    return (
        <div className={styles.main}>
            <Head>
                <title>Sydney Sauna | Lost and Found</title>
                <Favicon />
            </Head>
            <Layout>
                <Jumbotron className={styles.content}>
                    <submit>
                        <div  className={styles.submitField}>
                            <h2>Lost and Found</h2>
                            <input type="text" placeholder="Name" className={styles.input} />
                            <input type="text" placeholder="Phone" className={styles.input} />
                            <input type="email" placeholder="Email" className={styles.input} />
                            <textarea placeholder="Brief description of item Lost" className={styles.input} rows="5"></textarea>
                            <Button color="danger" className={styles.button}>Submit</Button>
                        </div>
                    </submit>
                </Jumbotron>
            </Layout>
        </div>
    )
}