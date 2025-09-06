import { store } from "@/config/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Netlynk | Bridging Every Connection</title>
        <meta
          name="description"
          content="Netlynk is a modern networking solution for seamless connectivity."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
