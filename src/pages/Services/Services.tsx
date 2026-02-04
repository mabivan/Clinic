import React from 'react';
import { 
  FaArrowRight, FaPlay, FaStethoscope, 
  FaQuestionCircle, FaPhoneAlt, FaCalendarAlt
  } from 'react-icons/fa';
import './Services.css';

const Services: React.FC = () => {
  return (
    <div id="kawempe-services-wrapper">
      
      {/* --- HERO SECTION --- */}
      <section className="kawempe-hero-section">
        <div className="hero-overlay"></div>
        <div className="kawempe-container hero-content-wrapper">
          <p className="hero-subtitle">COMPREHENSIVE DIABETES CARE</p>
          <h1 className="hero-title">Expert care delivering better health, every day</h1>
          <p className="hero-description">
            Our specialists deliver personalized treatment using proven, evidence-based approaches.
          </p>
          <div className="hero-actions">
            <button className="kawempe-btn-hero-primary">Book an Appointment <FaArrowRight style={{ marginLeft: '8px' }}/></button>
            <button className="kawempe-btn-hero-secondary">Consult a Specialist <FaArrowRight style={{ marginLeft: '8px' }}/></button>
          </div>
          <div className="hero-video-trigger">
            <div className="play-button-circle"><FaPlay className="play-icon" /></div>
            <div className="video-text">
              <span>Our Clinical Approach</span>
              <small>Watch Patient Success Stories</small>
            </div>
          </div>
        </div>
        <div className="hero-curve-divider">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* --- SECTION 1: OVERVIEW --- */}
      <section className="kawempe-section intro-section">
        <div className="kawempe-container">
          <div className="section-header">
            <h2 className="section-title">Integrated Diabetes Care Excellence</h2>
            <p className="section-subtitle">At Kawempe Diabetes Clinic, we deliver comprehensive diabetes management—from precise diagnosis to ongoing support.</p>
          </div>
          <div className="cards-grid">
            <div className="kawempe-card">
              <div className="card-icon-wrapper"><FaStethoscope /></div>
              <div className="card-content">
                <h3>Advanced Diagnosis</h3>
                <p>Comprehensive glucose testing, HbA1c analysis, and risk assessment using state-of-the-art technology.</p>
              </div>
            </div>
            {/* ... other intro cards ... */}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: ZIG-ZAG SERVICE ROWS (INDEPENDENT) --- */}
      <div className="detailed-services-wrapper">
        <div className="kawempe-container">
          
          {/* Row 1: Image Left */}
          <section className="service-row">
            <div className="service-image">
              <img src="./diagnosis.jpg" alt="Comprehensive Diabetes Screening" loading="lazy" />
            </div>
            <div className="service-content">
              <h2>Comprehensive Diabetes Screening & Diagnosis</h2>
              <p>Our advanced diagnostic suite provides precise screening for Type 1, Type 2, and gestational diabetes through comprehensive blood glucose analysis, HbA1c testing, and clinical evaluation protocols. Early detection enables timely intervention and improved long-term outcomes.</p>
            </div>
          </section>

          {/* Row 2: Image Right (Class 'reverse') */}
          <section className="service-row reverse">
            <div className="service-image">
              <img src="/outpatient-care.jpg" alt="Specialized Outpatient Management" loading="lazy" />
            </div>
            <div className="service-content">
              <h2>Specialized Outpatient Diabetes Management</h2>
              <p>Our structured outpatient program delivers personalized treatment regimens including medication optimization, insulin therapy protocols, and continuous glucose monitoring. We focus on achieving stable glycemic control while preventing diabetes-related complications.</p>
            </div>
          </section>

          {/* Row 3: Image Left */}
          <section className="service-row">
            <div className="service-image">
              <img src="/nutrition-therapy.jpg" alt="Medical Nutrition Therapy" loading="lazy" />
            </div>
            <div className="service-content">
              <h2>Medical Nutrition Therapy & Lifestyle Modification</h2>
              <p>Our certified diabetes educators provide individualized nutrition counseling based on cultural dietary patterns and lifestyle factors. We empower patients with sustainable dietary strategies and physical activity plans that support optimal metabolic control.</p>
            </div>
          </section>

          {/* Row 4: Image Right (Class 'reverse') */}
          <section className="service-row reverse">
            <div className="service-image">
              <img src="/patient-education.jpg" alt="Diabetes Education" loading="lazy" />
            </div>
            <div className="service-content">
              <h2>Structured Diabetes Education & Self-Management</h2>
              <p>We deliver comprehensive education programs for patients and caregivers, focusing on self-monitoring techniques, medication adherence strategies, preventive foot care, and complication awareness. Our goal is to build patient confidence and self-management skills.</p>
            </div>
          </section>

          {/* Row 5: Image Left */}
          <section className="service-row">
            <div className="service-image">
              <img src="/complication-screening.jpg" alt="Complication Screening" loading="lazy" />
            </div>
            <div className="service-content">
              <h2>Systematic Complication Screening & Preventive Care</h2>
              <p>Our preventive care protocol includes regular screening for diabetic retinopathy, nephropathy, neuropathy, and cardiovascular risks. Early detection of complications enables proactive intervention and reduces long-term morbidity associated with diabetes.</p>
            </div>
          </section>

        </div>
      </div>

     
      {/* --- SECTION 6: FAQ --- */}
      <section className="kawempe-section faq-section">
        <div className="kawempe-container">
          <div className="section-header">
            <h2 className="section-title">Practice Guidelines & FAQ</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <FaQuestionCircle className="faq-icon" />
              <div>
                <h4>What is your referral process?</h4>
                <p>We accept both physician referrals and self-referrals via our secure portal.</p>
              </div>
            </div>
            <div className="faq-item">
              <FaQuestionCircle className="faq-icon" />
              <div>
                <h4>How often are follow-ups?</h4>
                <p>Typically 1-6 month intervals based on your control level.</p>
              </div>
            </div>
            <div className="faq-item">
              <FaQuestionCircle className="faq-icon" />
              <div>
                <h4>Do you offer new diagnosis support?</h4>
                <p>Yes, we offer comprehensive initial assessment within 48 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="kawempe-section cta-section">
        <div className="cta-overlay"></div>
        <div className="kawempe-container cta-content">
          <h2 className="cta-title">Begin Your Journey to Optimal Health</h2>
          <p className="cta-description">Partner with our specialists to achieve sustainable metabolic control.</p>
          <div className="cta-buttons">
            <button className="kawempe-btn-cta-primary">
              <FaCalendarAlt /> Schedule Assessment
            </button>
            <button className="kawempe-btn-cta-secondary">
              <FaPhoneAlt /> Physician Consult Line
            </button>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default Services;