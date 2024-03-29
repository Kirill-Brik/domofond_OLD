import "normalize.css";
import "material-symbols/outlined.css";
import "../styles/globals.scss";

import Layout from "../components/layout/layout";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
