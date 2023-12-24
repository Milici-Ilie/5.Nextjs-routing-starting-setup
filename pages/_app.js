import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ); //🧭🧭[NAVIGATION BAR]🧭🧭
}

export default MyApp;
