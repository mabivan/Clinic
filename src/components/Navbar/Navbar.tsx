import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="tup-navbar">
      <div className="tup-navbar-container">
        <div className="tup-logo">
          <img 
            src="/H-logo.png" 
            alt="DiabeteCare Clinic" 
            className="tup-logo-img" 
          />
        </div>
        
        <button 
          className="tup-mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>

        <ul className={`tup-nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActiveLink("/") ? "active" : ""}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActiveLink("/about") ? "active" : ""}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={isActiveLink("/services") ? "active" : ""}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActiveLink("/contact") ? "active" : ""}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        
        <button className="tup-appointment-btn">Book Appointment</button>
      </div>
    </nav>
  );
};

export default Navbar;