import React from 'react';
import styles from '../styles/Footer.module.css'

function Footer({ currentPage, handlePageChange }) {
    return (
        <footer className={styles.footer} >
          <div className="text-center p-3">© 2021 Site created by Brandon Ford</div>
          <img src="https://tracker.metricool.com/c3po.jpg?hash=be122ef3ea6b6b04aa7600ec0697ad16"/>
        </footer>
  );
}

export default Footer;