import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="page-hero">
        <h1>About DiabetesCare</h1>
        <p>Leading the way in comprehensive diabetes management and care</p>
      </div>
      
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                At DiabetesCare, we are committed to providing exceptional diabetes care 
                through innovative treatments, comprehensive management programs, and 
                personalized patient support.
              </p>
              
              <h2>Our Expertise</h2>
              <p>
                With years of specialized experience in diabetes management, our team 
                of healthcare professionals delivers cutting-edge care tailored to 
                each patient's unique needs.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat-card">
                <h3>5000+</h3>
                <p>Patients Treated</p>
              </div>
              <div className="stat-card">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-card">
                <h3>98%</h3>
                <p>Patient Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;