import "@/styles/globals.css";
import Layout from "./layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="decription"
          content="Адвокатская контора ZanKomek готова предоставить вам лучших авдокатов в уголовных и другиз правовых делах в Казахстане."
        />
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <title>Zan Komek</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
