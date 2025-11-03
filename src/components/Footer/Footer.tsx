import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaAward, FaStar } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="tup-footer">
      <div className="tup-footer-container">
        {/* Quick Links */}
        <div className="tup-footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/resources">Patient Resources</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Patient Resources */}
        <div className="tup-footer-section">
          <h3>Patient Info</h3>
          <ul>
            <li><a href="#">Wellness Guide</a></li>
            <li><a href="#">Insurance Info</a></li>
            <li><a href="#">Appointment FAQs</a></li>
            <li><a href="#">Success Stories</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="tup-footer-section">
          <h3>Contact Us</h3>
          <ul className="tup-contact-info">
            <li><FaMapMarkerAlt className="tup-icon" /> 45 Medical Plaza, Kampala</li>
            <li><FaPhoneAlt className="tup-icon" /> +256 700 123 456</li>
            <li><FaEnvelope className="tup-icon" /> info@diabetecareclinic.com</li>
          </ul>
        </div>

        {/* Awards */}
        <div className="tup-footer-section">
          <h3>Awards</h3>
          <p><FaAward className="tup-icon" /> Certified Endocrinology Excellence 2025</p>
          <p><FaStar className="tup-icon" /> Best Diabetes Care Center - East Africa</p>
          <button className="tup-footer-btn">
            <MdDownload size={18} className="tup-icon-btn" /> Download Brochure
          </button>
        </div>
      </div>

      <div className="tup-footer-bottom">
        <p>© {new Date().getFullYear()} DiabeteCare Clinic. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
