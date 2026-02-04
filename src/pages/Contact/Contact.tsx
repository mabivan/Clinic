import React from "react";
import "./Contact.css";
import MapSection from "../../components/Map"; // Assuming you have this component
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Contact us</h1>
            <p>
              Kassapay is ready to provide the right solution according to your needs
            </p>
          </div>
        </div>
      </section>

      {/* FLOATING CARD SECTION */}
      <section className="contact-container">
        <div className="contact-card">
          
          {/* LEFT SIDE: INFO */}
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p className="sub-text">
              Sociosqu viverra lectus placerat sem efficitur molestie vehicula cubilia leo etiam nam.
            </p>

            <div className="info-list">
              {/* Item 1 */}
              <div className="info-item">
                <div className="icon-circle">
                  <MdLocationOn />
                </div>
                <div className="info-details">
                  <h4>Head Office</h4>
                  <p>Jalan Cempaka Wangi No 22<br/>Jakarta - Indonesia</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="info-item">
                <div className="icon-circle">
                  <MdEmail />
                </div>
                <div className="info-details">
                  <h4>Email Us</h4>
                  <p>support@yourdomain.tld<br/>hello@yourdomain.tld</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="info-item">
                <div className="icon-circle">
                  <MdPhone />
                </div>
                <div className="info-details">
                  <h4>Call Us</h4>
                  <p>Phone: +6221.2002.2012<br/>Fax: +6221.2002.2013</p>
                </div>
              </div>
            </div>

            <div className="social-media">
              <h5>Follow our social media</h5>
              <div className="social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="contact-form-wrapper">
            <h3>Send us a message</h3>
            
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" placeholder="Company" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="Phone" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Email" />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Subject" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Message"></textarea>
              </div>

              <button type="submit" className="submit-btn">Send</button>
            </form>
          </div>

        </div>
      </section>

      {/* MAP SECTION */}
      <div className="map-container">
        <MapSection /> 
      </div>
    </div>
  );
};

export default Contact;