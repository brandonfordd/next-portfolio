import React, { useState } from 'react';
import Projects from './Projects';
import Navigation from './Navigation';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {SSRProvider} from '@react-aria/ssr';
import Particle from '../src/utils/Particle.jsx'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <SSRProvider>
      <div id="main">
        <div id="display" className={styles.display}>
          {/* We are passing the currentPage from state and the function to update it */}
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
          <div className={styles.headerImg}>
          <Particle className={styles.particlesJs}/>
          <Image className="img-fluid img-header" src="/assets/images/forest_main.jpg" priority alt="forest" layout="responsive" width={2560} height={734} /> 
          </div>
          {/* Here we are calling the renderPage method which will return a component  */}
          {renderPage()}
          <Footer/>
        </div>
      </div>
    </SSRProvider>
  );
}
