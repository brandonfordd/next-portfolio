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
        <Navbar.Brand>
          <a
          href="#about"
          onClick={() => handlePageChange('About')}
          target="_blank"
          >
            <div id="wrapper">
              <h1 className="glitch" data-text="Portfolio">Portfolio</h1>
            </div>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler navbarBtn custom-toggler" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc'}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc'}
              >
                My Work
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
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
                    href="/assets/downloads/Resume-brandon-ford.pdf" 
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
