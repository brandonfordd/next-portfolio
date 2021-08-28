import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/Header.css';
import '../styles/About.css';
import '../styles/Projects.css';
import '../styles/Resume.css';
import '../styles/Footer.css';
import '../styles/Contact.css';

import Head from "next/head";
import {useEffect} from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  });
  
  return( 
    <>
        <Head>
            <title>Next Portfolio</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
              integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
              crossorigin="anonymous"
            />
            <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
        </Head>
      <Component {...pageProps} />
      </>
    );
}

export default MyApp
