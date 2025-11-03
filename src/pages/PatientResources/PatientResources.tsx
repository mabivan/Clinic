import React from 'react';
import './PatientResources.css';

const PatientResources: React.FC = () => {
  const resources = [
    {
      category: "Educational Materials",
      items: [
        "Diabetes Basics Guide",
        "Nutrition Handbook",
        "Exercise Recommendations",
        "Medication Guide",
        "Monitoring Instructions"
      ]
    },
    {
      category: "Tools & Calculators",
      items: [
        "BMI Calculator",
        "A1C Converter",
        "Carbohydrate Counter",
        "Insulin Dosage Calculator",
        "Meal Planner"
      ]
    },
    {
      category: "Support Resources",
      items: [
        "Support Groups",
        "Online Community",
        "Counseling Services",
        "Crisis Hotline",
        "Peer Support"
      ]
    }
  ];

  const quickDownloads = [
    "Diabetes Management App",
    "Emergency Contact Card",
    "Medication Schedule",
    "Blood Sugar Log",
    "Nutrition Guide PDF"
  ];

  return (
    <div className="resources-page">
      <div className="page-hero">
        <h1>Patient Resources</h1>
        <p>Tools and information to support your diabetes journey</p>
      </div>
      
      <section className="resources-content">
        <div className="container">
          <div className="resources-grid">
            {resources.map((category, index) => (
              <div key={index} className="resource-category">
                <h2 className="category-title">{category.category}</h2>
                <ul className="resource-list">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="resource-item">
                      {item}
                      <button className="download-resource">Download</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="quick-downloads">
            <h2>Quick Downloads</h2>
            <div className="downloads-grid">
              {quickDownloads.map((download, index) => (
                <div key={index} className="download-item">
                  <span>{download}</span>
                  <button className="download-btn">Download</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientResources;