import Header from "./Header";
import Footer from "./Footer";
import Social from "./SocialMedia";

import styles from "./styles/Layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
        <Social />
      </div>
    </>
  );
}
