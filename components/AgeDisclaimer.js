import { Jumbotron, Button } from 'reactstrap';
import styles from './styles/AgeDisclaimer.module.scss';
  

export default function AgeDisclaimer() {
    const [visible, setVisible] = React.useState(true);

    if(!visible) return null;

    return (
        <div className={styles.popup} onClick={() => setVisible(false)}>
            {/* <div className={styles.popupInner}> */}
            <div className={styles.popupInner}>
                <h3>
                    In order to enter this website you are required to be 18 years or older.
                </h3>
                <h1 className="mb-3 mt-4">Are you 18 years old?</h1>
                <div className={styles.buttonContainer}>
                    <Button color="danger" className={styles.button}>Yes</Button>
                    <a href="https://google.com" className={styles.link}><Button color="danger" className={styles.button}>No</Button></a>
                </div>
            </div>    
            {/* </div> */}
        </div>
    )
}