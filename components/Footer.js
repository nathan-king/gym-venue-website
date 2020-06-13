import styles from "./styles/Footer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <p>Sydney Sauna, Level 1, 38-42 Oxford Street,</p>
        <p>
          Darlinghurst, NSW, 2010, Australia | (02) 9360 3431 |
          info@sydneysauna.com
        </p>
        <p class="font-weight-light">Copyright © 2020 Sydney Sauna</p>
        <br />
        <p>
          Created by{" "}
          <a className={styles.link} href="https://github.com/nathan-king">
            Nathan King (Web Developer)
          </a>
        </p>
      </div>
    </footer>
  );
}
