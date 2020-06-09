import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.scss";

/* ADDED TO REMOVE FOUC (SSR) */
import "../components/styles/Navbar.module.scss";
import "../components/styles/Layout.module.scss";
import "../components/styles/Footer.module.scss";
import "../pages/styles/index.module.scss";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
