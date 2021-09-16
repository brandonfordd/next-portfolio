import React, {useState} from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import { Navbar,Nav,NavDropdown,Form,FormControl,Button,NavItem } from 'react-bootstrap'
import {Link} from "react-router-dom";
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {

  const [showNavs, setShowNavs] = useState(true);

  return (
      <Navbar expand="lg" className="navbar sticky-top navbar-expand-lg p-background-color "> 
        <Navbar.Brand 
          className="navbar-brand p-font-color nav-brand-custom swing linear-wipe" 
          href="/"> Brandon Ford&apos;s Portfolio
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler navbarBtn custom-toggler" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === 'About' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc'}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => handlePageChange('Projects')}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Projects' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc'}
              >
                My Work
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Contact' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc'}
              >
                Contact
              </a>
            </li>
            <li className="nav-item nav-item-dropdown">
              <div className="m-lc">
                <DropdownButton
                  title="Resume"
                  id="resume-dropdown"
                >
                  <Dropdown.Item 
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                  >
                    View Resume
                  </Dropdown.Item>
                  <Dropdown.Item 
                    href="/assets/downloads/brandonford_resume.pdf" 
                    download
                  >
                    Download Resume
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      
  );
}

export default Navigation;
