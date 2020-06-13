import styles from "./styles/SocialMedia.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div className={styles.social}>
      <a href="https://twitter.com/sydneysauna" className={styles.iconButton}>
        <FontAwesomeIcon
          icon={faTwitter}
          className={styles.icon}
          id={styles.twitterIcon}
        />
        <span className={styles.twitter}></span>
      </a>
      <a
        href="https://www.facebook.com/sydneysauna/"
        className={styles.iconButton}
      >
        <FontAwesomeIcon
          icon={faFacebookF}
          className={styles.icon}
          id={styles.facebookIcon}
        />
        <span className={styles.facebook}></span>
      </a>
      <a
        href="https://www.instagram.com/sydneysaunaofficial/"
        className={styles.iconButton}
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className={styles.icon}
          id={styles.instagramIcon}
        />
        <span className={styles.instagram}></span>
      </a>
    </div>
  );
}
