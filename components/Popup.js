import { useEffect } from "react";
import { Jumbotron, Button } from "reactstrap";
import styles from "./styles/Popup.module.scss";

export default function Popup() {
  const [visible, setVisible] = React.useState(false);
  useEffect(() => {
    let pop_status = localStorage.getItem("pop_status");
    if (!pop_status) {
      setVisible(true);
      localStorage.setItem("pop_status", 1);
    }
  }, []);
  if (!visible) return null;

  return (
    <div className={styles.popup} onClick={() => setVisible(false)}>
      {/* <div className={styles.popupInner}> */}
      <div className={styles.popupInner}>
        <h1 className="mb-4">Temporary Closure</h1>
        <p className={styles.p}>
          Following the Australian Government’s directive to keep our nation
          safe and limit the spread of Coronavirus (COVID-19), it is with great
          sadness that we advise that sydney sauna will be temporarily closed,
          effective 23<sup>rd</sup> March 2020.
        </p>
        <h2>See you soon!</h2>
        <div className={styles.buttonContainer}>
          <Button color="danger" className={styles.button}>
            Okay
          </Button>
        </div>
      </div>
    </div>
  );
}
