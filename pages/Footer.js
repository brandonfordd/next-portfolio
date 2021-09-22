import React from 'react';
import styles from '../styles/Footer.module.css'

function Footer({ currentPage, handlePageChange }) {
    return (
        <footer className={styles.footer} >
          <div className="text-center p-3">© 2021 Site created with 💚 by Brandon Ford</div>
        </footer>
  );
}

export default Footer;