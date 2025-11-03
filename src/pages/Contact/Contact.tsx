import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="page-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with our diabetes care specialists</p>
      </div>
      
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              
              <div className="contact-item">
                <h3>Phone</h3>
                <p>Toll-free: 1-800-DIABETES</p>
                <p>Local: 1-800-342-2387</p>
              </div>
              
              <div className="contact-item">
                <h3>Email</h3>
                <p>info@diabetescare.com</p>
                <p>support@diabetescare.com</p>
              </div>
              
              <div className="contact-item">
                <h3>Address</h3>
                <p>123 Diabetes Care Center</p>
                <p>Medical Plaza, Suite 400</p>
                <p>Health City, HC 12345</p>
              </div>
              
              <div className="emergency-contact">
                <h3>Emergency Contact</h3>
                <p className="emergency-number">1-800-EMERGENCY</p>
                <p>Available 24/7 for urgent diabetes care</p>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows={5} required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;