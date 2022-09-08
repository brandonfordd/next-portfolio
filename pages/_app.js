import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/Header.css';
import '../styles/About.css';
import '../styles/Projects.css';
import '../styles/Resume.css';
import '../styles/Contact.css';
import '../styles/Particle.css';

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
        </Head>
      <Component {...pageProps} />
      </>
    );
}

export default MyApp
