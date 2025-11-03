import React from 'react';
import './Home.css';
import { FaTooth, FaClock } from "react-icons/fa";
// Import icons for services, stars, etc.
import {
  FaStethoscope,
  FaSyringe,
  FaAppleAlt,
  FaBookMedical,
  FaStar,
  FaStarHalfAlt,
  // New icons for the 'Why Choose Us' section
  // For More Efficient
  FaHeartbeat, // For Longer Lasting
  FaSmile, // For More Comfortable Experience
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight 
} from 'react-icons/fa';

const Home: React.FC = () => {
  // Team member data
  const teamMembers = [
    {
      img: '/team-1.jpg',
      name: 'Dr. Angela Smith',
      specialty: 'Endocrinologist',
      rating: 5,
    },
    {
      img: '/team-2.jpg',
      name: 'Dr. Edward Cole',
      specialty: 'Diabetic Neuropathy',
      rating: 5,
    },
    {
      img: '/team-3.jpg',
      name: 'Dr. Michael Kerr',
      specialty: 'Nutritionist',
      rating: 4.5,
    },
    {
      img: '/team-4.jpg',
      name: 'Dr. James White',
      specialty: 'General Diabetology',
      rating: 5,
    },
  ];

  // Testimonial data (6 people)
  const testimonials = [
    {
      name: 'Sarah J.',
      quote: 'This clinic changed my life. My A1c is finally under control, and I feel better than I have in years.',
    },
    {
      name: 'Michael B.',
      quote: 'The nutritional counseling was a game-changer. I learned to eat well without feeling deprived.',
    },
    {
      name: 'David L.',
      quote: 'Dr. Smith is incredibly compassionate and listens to all my concerns. I finally feel heard.',
    },
    {
      name: 'Emily R.',
      quote: 'From the front desk to the medical team, everyone is professional and supportive. Highly recommend!',
    },
    {
      name: 'Robert K.',
      quote: 'I was nervous about insulin, but the team here made the process simple and stress-free.',
    },
    {
      name: 'Lisa T.',
      quote: 'The patient education resources are fantastic. I feel so much more empowered to manage my health.',
    },
  ];

  // === CAROUSEL STATE AND FUNCTIONALITY ===
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const carouselTrackRef = React.useRef<HTMLDivElement>(null);

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play carousel
  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // Update carousel position when currentSlide changes
  React.useEffect(() => {
    if (carouselTrackRef.current) {
      carouselTrackRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  // Helper to render stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }
    while (stars.length < 5) {
      stars.push(<FaStar key={`empty-${stars.length}`} style={{ opacity: 0.3 }} />);
    }
    return <div className="star-rating">{stars}</div>;
  };

  return (
    <div className="home-page">
      {/* 1. Hero / Welcome Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Empowering Metabolic <span className='hero-word'>Health</span> for Lifelong Wellness</h1>
              <p className="hero-subtitle">Root-cause focused, integrative care for diabetes, obesity, and optimal vitality.</p>
              <p className="hero-description">Take control of your health today</p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">Book A Consultation</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Us / Why Choose Us */}
<section className="about-us-section why-choose-us-section">
  <div className="container why-choose-us-container">
    <div className="why-choose-us-content">
      <h2 className="why-choose-us-heading">Why Choose Us?</h2>

      <div className="features-list">
        <div className="feature-card">
          <div className="icon-box icon-blue">
            <FaClock />
          </div>
          <div className="feature-copy">
            <h3>Less Time in the Chair</h3>
            <p>
              Justo non dolor lectus ac egestas dictum. Leo tempus nec amet
              fringilla. Eu semper velit tristique semper. Laoreet mi lacus
              nisi diam in.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="icon-box icon-purple">
            <FaTooth />
          </div>
          <div className="feature-copy">
            <h3>More Efficient</h3>
            <p>
              Justo non dolor lectus ac egestas dictum. Leo tempus nec amet
              fringilla. Eu semper velit tristique semper. Laoreet mi lacus
              nisi diam in.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="icon-box icon-green">
            <FaSmile />
          </div>
          <div className="feature-copy">
            <h3>More Comfortable Experience</h3>
            <p>
              Justo non dolor lectus ac egestas dictum. Leo tempus nec amet
              fringilla. Eu semper velit tristique semper. Laoreet mi lacus
              nisi diam in.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="why-choose-us-image">
      <div className="image-frame">
        <div className="image-inner">
          <img
            src="/about-us-clinic.jpg"
            alt="A modern clinic setting with compassionate healthcare professionals"
            className="clinic-img"
          />
        </div>
      </div>
      
      {/* CTA Button added under the image */}
      <button className="cta-button" onClick={() => console.log('Book appointment clicked')}>
      Learn More Today 
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</section>
    
      {/* 3. Services / Treatments */}
      <section className="services-section">
        <div className="container">
          <h2>Our Specialized Services</h2>
          <p className="services-subtitle">Comprehensive diabetes care and management solutions</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaStethoscope />
              </div>
              <h3>Diabetes Screening</h3>
              <p>Early detection and risk assessment to prevent complications through advanced diagnostic methods.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaSyringe />
              </div>
              <h3>Insulin Management</h3>
              <p>Personalized plans for insulin therapy and continuous glucose monitoring with expert guidance.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaAppleAlt />
              </div>
              <h3>Nutritional Counseling</h3>
              <p>Expert dietary guidance and meal planning to help you manage blood sugar effectively.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaBookMedical />
              </div>
              <h3>Patient Education</h3>
              <p>Comprehensive learning resources to empower you with knowledge for better health management.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaHeartbeat />
              </div>
              <h3>Cardiac Care</h3>
              <p>Specialized heart health monitoring and prevention strategies for diabetic patients.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaTooth />
              </div>
              <h3>Preventive Care</h3>
              <p>Regular check-ups and preventive measures to maintain optimal health and wellness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet Our Team */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="team-subtitle">Our dedicated healthcare professionals are here to support your journey to better health</p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-image-wrapper">
                  <img src={member.img} alt={member.name} />
                  <div className="team-social-overlay">
                    <div className="social-icons">
                      <a href="#" className="social-icon twitter" aria-label="Twitter">
                        <FaTwitter />
                      </a>
                      <a href="#" className="social-icon whatsapp" aria-label="WhatsApp">
                        <FaWhatsapp />
                      </a>
                      <a href="#" className="social-icon instagram" aria-label="Instagram">
                        <FaInstagram />
                      </a>
                      <a href="#" className="social-icon linkedin" aria-label="LinkedIn">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p>{member.specialty}</p>
                {renderStars(member.rating)}
                <div className="team-cta">
                  <button className="btn-team-consult">Book Consultation</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* 5. Testimonials Section */}
<section className="testimonials-section">
  <div className="container">
    <div className="testimonials-header">
      <h2>What Our Patients Say</h2>
      <p className="testimonials-subtitle">Real stories from our satisfied patients</p>
    </div>
    
    <div className="testimonials-carousel">
      <div className="carousel-container">
        <div className="carousel-track" ref={carouselTrackRef}>
          {testimonials.map((testimonial, index) => {
            // Correct image paths - files should be directly in public folder
            const imagePaths = [
              '/testimonial-1.jpg',
              '/testimonial-2.jpg', 
              '/testimonial-3.jpg',
              '/testimonial-4.jpg',
              '/testimonial-5.jpg',
              '/testimonial-6.jpg'
            ];
            
            const currentImage = imagePaths[index];
            
            return (
              <div className="carousel-slide" key={index}>
                <div className="testimonial-card">
                  <div className="testimonial-image">
                    <img 
                      src={currentImage}
                      alt={testimonial.name}
                      onError={(e) => {
                        console.error(`Failed to load: ${currentImage}`);
                        // Try fallback images
                        const fallbacks = [
                          '/team-1.jpg',
                          '/team-2.jpg',
                          '/team-3.jpg', 
                          '/team-4.jpg',
                          '/about-us-clinic.jpg',
                          '/default-avatar.jpg'
                        ];
                        e.currentTarget.src = fallbacks[index] || '/default-avatar.jpg';
                      }}
                      onLoad={() => {
                        console.log(`Loaded: ${currentImage}`);
                      }}
                    />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="testimonial-content">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">{testimonial.quote}</p>
                    <div className="testimonial-author">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <div className="author-rating">
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Navigation Buttons */}
        <button 
          className="carousel-btn carousel-prev" 
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>
        <button 
          className="carousel-btn carousel-next" 
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>
      
      {/* Dot Indicators */}
      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <button 
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
    
    <div className="testimonials-cta">
      <button className="btn btn-primary">Read More Stories</button>
    </div>
  </div>
</section>

      {/* 6. Call to Action Section */}
      <section className="cta-section">
        <div className="container cta-container">
          <h2>Ready to Take Control of Your Health?</h2>
          <p>
            Our team is here to provide the support and expert care you deserve.
            Schedule your consultation today.
          </p>
          <button className="btn btn-primary">Book a Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default Home;