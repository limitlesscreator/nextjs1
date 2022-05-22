import '../styles/globals.css';
import {AppProps} from "next/dist/shared/lib/router/router";
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return <>
        <Head>
            <title>MyTop</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Component {...pageProps} />;
    </>
}

export default MyApp;
