import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsChecked(!isChecked);
    setIsMobileNavOpen(false); // Close mobile nav when toggling desktop nav
  };

  const handleNavClose = () => {
    setIsChecked(false);
    setIsMobileNavOpen(false); // Close mobile nav when closing desktop nav
  };

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleMobileNavClose = () => {
    setIsMobileNavOpen(false);
  };

  const handleMobileNavCloseOnScroll = (e) => {
    if (isMobileNavOpen) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (isChecked) {
      document.body.classList.add('open-nav');
    } else {
      document.body.classList.remove('open-nav');
    }
  }, [isChecked]);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add('open-mobile-nav');
      document.body.addEventListener('touchmove', handleMobileNavCloseOnScroll, { passive: false });
    } else {
      document.body.classList.remove('open-mobile-nav');
      document.body.removeEventListener('touchmove', handleMobileNavCloseOnScroll);
    }
  }, [isMobileNavOpen]);

  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <input
            className="checkbox"
            type="checkbox"
            name=""
            id="nav-toggle"
            checked={isChecked}
            onChange={handleNavToggle}
          />
          <label htmlFor="nav-toggle" className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </label>
          <div className="menu-items">
            <li>
              <Link to="/demo-project" onClick={handleNavClose}>
                about
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={handleNavClose}>
                portfolio
              </Link>
            </li>
            <li>
            <li>
              <Link to="/certificates" onClick={handleNavClose}>
                Certificates
              </Link>
            </li>
              <Link to="/contact" onClick={handleNavClose}>
                contact
              </Link>
            </li>
          </div>
        </div>
      </div>


        
        <div className="nav" >
        <label className={`mobnav ${isMobileNavOpen ? 'active' : ''}`}>
          <input
            className="mobnav"
            type="checkbox"
            checked={isChecked}
            onChange={handleNavToggle}
          />
          <span className="menu">
            <span className="hamburger"></span>
          </span>
          <ul
            className={`menu-items ${isChecked ? 'open' : ''}`}
            onClick={handleMobileNavClose} // Use the new function here
          >
            <li>
              <Link to="/demo-project" onClick={handleNavClose}>
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={handleNavClose}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/certificates" onClick={handleNavClose}>
                Certificates
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleNavClose}>
                Contact
              </Link>
            </li>
          </ul>
        </label>
      </div>
        
    </nav>
  );
}

export default Navbar;
