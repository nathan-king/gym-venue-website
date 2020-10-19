import styles from "./styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <p>Gym Venue, Level 1, 22 Wattle Street,</p>
        <p>
          Darlinghurst, NSW, 2010, Australia | (02) 9288 3333 |
          info@gymvenue.com
        </p>
        <p class="font-weight-light">Copyright © 2020 Gym Venue</p>
        <br />
        <p>Created by</p>
        <p>
          <a className={styles.link} href="https://github.com/nathan-king">
            <img className={styles.icon} src="../nathan-king.svg" />
          </a>
        </p>
      </div>
    </footer>
  );
}
