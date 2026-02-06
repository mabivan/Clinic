import React, { useEffect, useRef } from 'react';
import './About.css';

const About: React.FC = () => {
  // Independent parallax refs
  const storyParallaxRef = useRef<HTMLDivElement>(null);
  const statsParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Story section parallax
      if (storyParallaxRef.current) {
        const scrolled = window.pageYOffset;
        const storySection = document.querySelector('.about__story');
        if (storySection) {
          const storyRect = storySection.getBoundingClientRect();
          const storyTop = storyRect.top + window.pageYOffset;
          const storyHeight = storyRect.height;
          
          // Calculate parallax only when in view
          if (scrolled > storyTop - window.innerHeight && scrolled < storyTop + storyHeight) {
            const storyProgress = (scrolled - storyTop + window.innerHeight) / (window.innerHeight + storyHeight);
            const rate = storyProgress * -100;
            storyParallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
          }
        }
      }

      // Stats section parallax
      if (statsParallaxRef.current) {
        const scrolled = window.pageYOffset;
        const statsSection = document.querySelector('.about__stats');
        if (statsSection) {
          const statsRect = statsSection.getBoundingClientRect();
          const statsTop = statsRect.top + window.pageYOffset;
          const statsHeight = statsRect.height;
          
          if (scrolled > statsTop - window.innerHeight && scrolled < statsTop + statsHeight) {
            const statsProgress = (scrolled - statsTop + window.innerHeight) / (window.innerHeight + statsHeight);
            const rate = Math.sin(statsProgress * Math.PI) * 50;
            statsParallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Mark Kaddu',
      role: 'Pharmacist & Founder',
      bio: 'Board-certified pharmacist with diabetes care experience. Specializes in Type 1 and Type 2 diabetes management.',
      image: '/mark.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Diabetes Educator',
      bio: 'Certified diabetes care and education specialist with expertise in nutrition therapy and lifestyle interventions.',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      role: 'Community Outreach Coordinator',
      bio: 'Passionate advocate for diabetes awareness in underserved communities with 10 years of public health experience.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const values = [
    {
      title: 'Empathy & Compassion',
      description: 'We approach every interaction with understanding and kindness, recognizing the unique challenges of living with diabetes.',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
    },
    {
      title: 'Evidence-Based',
      description: 'All our resources and recommendations are grounded in the latest scientific research and clinical guidelines.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Community-Focused',
      description: 'We believe in the power of community support and foster connections that help individuals thrive together.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    }
  ];

  const whyChooseUs = [
    {
      id: 1,
      number: '01',
      title: 'Comprehensive Diabetes Care',
      description: 'From initial diagnosis to long-term management, we provide holistic care plans tailored to each individual\'s unique needs and lifestyle.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      id: 2,
      number: '02',
      title: 'Expert Medical Team',
      description: 'Our board-certified endocrinologists, diabetes educators, and nutrition specialists have decades of combined experience in diabetes management.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      id: 3,
      number: '03',
      title: 'Personalized Education Programs',
      description: 'We offer customized diabetes education covering nutrition, medication management, glucose monitoring, and lifestyle modifications.',
      icon: 'M12 14l9-5-9-5-9 5 9 5z'
    },
    {
      id: 4,
      number: '04',
      title: '24/7 Support System',
      description: 'Access to round-the-clock support through our telehealth services, online community forums, and emergency consultation lines.',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    },
    {
      id: 5,
      number: '05',
      title: 'Cutting-Edge Technology',
      description: 'We utilize the latest diabetes management technology including continuous glucose monitors, insulin pumps, and digital health platforms.',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0 3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
    },
    {
      id: 6,
      number: '06',
      title: 'Community Integration',
      description: 'We bridge medical care with community support through local diabetes groups, family education, and workplace wellness programs.',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about__hero">
        <div className="about__hero-overlay">
          <div className="about__hero-content">
            <h1 className="about__hero-title">About DiabetesCare Community</h1>
            <p className="about__hero-subtitle">
              Empowering individuals and communities in the fight against diabetes through education, support, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Mission Card */}
            <div className="mission-card relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="mr-6 p-4 bg-blue-500 rounded-2xl group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Mission</h2>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  To provide comprehensive, accessible, and personalized diabetes education and support 
                  to individuals and communities worldwide, empowering them to live healthier, more 
                  fulfilling lives.
                </p>
                
                <div className="mt-10">
                  <img 
                    src="/images/mission-illustration.jpg" 
                    alt="Healthcare professional educating diabetes patient"
                    className="rounded-xl shadow-lg w-full h-64 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6MFTV9uNSPKbPoUqRjBbo4anbGaIG5qAbQ&s";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="vision-card relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-100 rounded-full -translate-y-16 -translate-x-16 group-hover:scale-125 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="mr-6 p-4 bg-emerald-500 rounded-2xl group-hover:-rotate-12 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Vision</h2>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A world where diabetes is no longer a barrier to living a full and active life, 
                  where every individual has access to the knowledge and support they need to manage 
                  their condition effectively.
                </p>
                
                <div className="mt-10">
                  <img 
                    src="/images/vision-illustration.jpg" 
                    alt="People living active lives despite diabetes"
                    className="rounded-xl shadow-lg w-full h-64 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNjo6hBteFhB8krf8bJT1pUiDpVsKHk2-sA&s";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Updated to 3 cards */}
      <section className="values-section bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The principles that guide everything we do at DiabetesCare Community
            </p>
          </div>

          {/* Values Grid - 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {values.map((value, index) => (
              <div 
                key={index}
                className="value-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="flex flex-col h-full">
                  
                  {/* Icon with Image Background */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="relative p-5 bg-white rounded-xl shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={value.icon} />
                          </svg>
                        </div>
                        <span className="text-3xl font-bold text-gray-200 opacity-50">0{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {value.description}
                    </p>
                  </div>

                  {/* Image Example */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="relative h-40 rounded-xl overflow-hidden">
                      <img 
                        src={`/images/value-${index + 1}.jpg`} 
                        alt={`Illustration of ${value.title}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='160' viewBox='0 0 400 160'%3E%3Crect width='400' height='160' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='14' fill='%236b7280' text-anchor='middle'%3E${encodeURIComponent(value.title)}%20Image%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Element */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-4 text-gray-400">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <span className="text-sm font-medium">Guiding Principles</span>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about__whychoose">
        <div className="about__container">
          <div className="about__section-header">
            <span className="about__section-subtitle">Our Excellence</span>
            <h2 className="about__section-title">Why Choose DiabetesCare?</h2>
            <p className="about__section-description">
              Discover the comprehensive care and expertise that sets us apart in diabetes management and community support.
            </p>
          </div>
          
          <div className="about__whychoose-grid">
            {whyChooseUs.map((item) => (
              <div key={item.id} className="about__whychoose-card">
                <div className="about__whychoose-header">
                  <div className="about__whychoose-number">{item.number}</div>
                  <div className="about__whychoose-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                  </div>
                </div>
                <div className="about__whychoose-content">
                  <h3 className="about__whychoose-title">{item.title}</h3>
                  <p className="about__whychoose-description">{item.description}</p>
                </div>
                <div className="about__whychoose-hover"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Story Section */}
      <section className="about__story">
        <div className="about__story-hero">
          <div className="about__story-hero-overlay" ref={storyParallaxRef}>
            <div className="about__story-hero-content">
              <div className="about__story-hero-text">
                <span className="about__story-hero-subtitle">Our Legacy Since 2015</span>
                <h1 className="about__story-hero-title">Our Journey</h1>
                <p className="about__story-hero-description">
                  From humble beginnings to becoming a global diabetes care community
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about__story-content">
          <div className="about__container">
            <div className="about__story-timeline">
              <div className="about__story-timeline-item">
                <div className="about__timeline-year">2015</div>
                <div className="about__timeline-content">
                  <h3 className="about__timeline-title">Foundation</h3>
                  <p className="about__timeline-description">
                    Started as a local support group by healthcare professionals who saw the need for better diabetes education.
                  </p>
                </div>
              </div>
              
              <div className="about__story-timeline-item">
                <div className="about__timeline-year">2018</div>
                <div className="about__timeline-content">
                  <h3 className="about__timeline-title">Digital Expansion</h3>
                  <p className="about__timeline-description">
                    Launched our online platform, reaching thousands nationwide with virtual support and resources.
                  </p>
                </div>
              </div>
              
              <div className="about__story-timeline-item">
                <div className="about__timeline-year">2020</div>
                <div className="about__timeline-content">
                  <h3 className="about__timeline-title">Global Reach</h3>
                  <p className="about__timeline-description">
                    Expanded internationally, serving communities across three continents with localized support.
                  </p>
                </div>
              </div>
              
              <div className="about__story-timeline-item">
                <div className="about__timeline-year">2024</div>
                <div className="about__timeline-content">
                  <h3 className="about__timeline-title">Innovation Hub</h3>
                  <p className="about__timeline-description">
                    Established our research division, developing cutting-edge tools for diabetes management.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="about__story-main">
              <div className="about__story-quote-section">
                <div className="about__story-quote-icon">
                  <svg fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4z" />
                  </svg>
                </div>
                <blockquote className="about__story-quote">
                  <p className="about__story-quote-text">
                    "Diabetes doesn't define you. How you manage it, the community you build around it, 
                    and the life you live despite it – that's what truly matters. We're here to help 
                    make that journey easier, more informed, and less lonely."
                  </p>
                  <cite className="about__story-quote-author">
                    <span className="about__quote-name">Dr. Sarah Johnson</span>
                    <span className="about__quote-role">Founder & Medical Director</span>
                  </cite>
                </blockquote>
              </div>
              
              <div className="about__story-text-grid">
                <div className="about__story-text-column">
                  <h3 className="about__story-text-title">Our Beginning</h3>
                  <p className="about__story-text">
                    DiabetesCare Community was founded in 2015 by a group of healthcare professionals 
                    who recognized a critical gap in diabetes support services. What started around a 
                    kitchen table with three passionate individuals has grown into a global movement.
                  </p>
                </div>
                
                <div className="about__story-text-column">
                  <h3 className="about__story-text-title">Our Impact</h3>
                  <p className="about__story-text">
                    Over the years, we've transformed countless lives through education, support, 
                    and innovation. Our community-based approach ensures that no one faces diabetes alone, 
                    providing both medical expertise and emotional support.
                  </p>
                </div>
                
                <div className="about__story-text-column">
                  <h3 className="about__story-text-title">Our Future</h3>
                  <p className="about__story-text">
                    Looking ahead, we're committed to leveraging technology and research to make 
                    diabetes management more accessible and effective for everyone, everywhere.
                  </p>
                </div>
              </div>
              
              <div className="about__story-stats">
                <div className="about__story-stat">
                  <div className="about__story-stat-number">50,000+</div>
                  <div className="about__story-stat-label">Lives Touched</div>
                </div>
                <div className="about__story-stat">
                  <div className="about__story-stat-number">100+</div>
                  <div className="about__story-stat-label">Partner Hospitals</div>
                </div>
                <div className="about__story-stat">
                  <div className="about__story-stat-number">15</div>
                  <div className="about__story-stat-label">Countries Served</div>
                </div>
                <div className="about__story-stat">
                  <div className="about__story-stat-number">99.2%</div>
                  <div className="about__story-stat-label">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="about__team">
        <div className="about__container">
          <div className="about__section-header">
            <h2 className="about__section-title">Meet Our Team</h2>
            <p className="about__section-subtitle">
              Our dedicated team of healthcare professionals and community advocates are committed to your wellness journey.
            </p>
          </div>
          <div className="about__team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="about__team-card">
                <div className="about__team-image">
                  <img src={member.image} alt={member.name} className="about__team-img" />
                </div>
                <div className="about__team-info">
                  <h3 className="about__team-name">{member.name}</h3>
                  <p className="about__team-role">{member.role}</p>
                  <p className="about__team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about__cta">
        <div className="about__container">
          <div className="about__cta-content">
            <h2 className="about__cta-title">Join Our Community Today</h2>
            <p className="about__cta-text">Together, we can make diabetes management easier and more accessible for everyone.</p>
            <div className="about__cta-buttons">
              <button className="about__btn about__btn--primary">Get Involved</button>
              <button className="about__btn about__btn--secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;