import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/Header.css';
import '../styles/About.css';
import '../styles/Projects.css';
import '../styles/Resume.css';
import '../styles/Contact.css';

import Script from 'next/script'
import Head from "next/head";
import {useEffect} from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  });
  
  return( 
    <>
        <Head>
            <title>Brandons Portfolio</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
              integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
              crossOrigin="anonymous"
            />
            
        </Head>
      <Component {...pageProps} />
      </>
    );
}

export default MyApp
