import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const allServices = [
    {
      category: "Clinical Services",
      services: [
        "Type 1 Diabetes Management",
        "Type 2 Diabetes Management",
        "Gestational Diabetes Care",
        "Diabetic Foot Care",
        "Retinopathy Screening",
        "Neuropathy Assessment"
      ]
    },
    {
      category: "Preventive Care",
      services: [
        "Nutritional Screening",
        "Lifestyle Counseling",
        "Weight Management",
        "Exercise Planning",
        "Risk Assessment",
        "Regular Monitoring"
      ]
    },
    {
      category: "Specialist Care",
      services: [
        "Endocrinology",
        "Neurology",
        "Nephrology",
        "Cardiology",
        "Ophthalmology",
        "Podiatry"
      ]
    }
  ];

  return (
    <div className="services-page">
      <div className="page-hero">
        <h1>Our Services</h1>
        <p>Comprehensive diabetes care tailored to your needs</p>
      </div>
      
      <section className="services-content">
        <div className="container">
          {allServices.map((category, index) => (
            <div key={index} className="service-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="category-services">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="service-item">
                    <h3>{service}</h3>
                    <button className="service-learn-btn">Learn More</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;