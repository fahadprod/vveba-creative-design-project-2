// components/InteractiveServiceShowcaseTabs.js
import { useState } from 'react';

const InteractiveServiceShowcaseTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const services = [
    {
      title: "SEO",
      description: "Increase your visibility and rank higher on search engines with our data-driven SEO strategies.",
      icon: "🔍",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Content Strategy"]
    },
    {
      title: "Social Media",
      description: "Engage your audience and build your brand across all major social platforms.",
      icon: "💬",
      features: ["Content Creation", "Community Management", "Paid Social Ads", "Analytics & Reporting"]
    },
    {
      title: "PPC",
      description: "Drive immediate traffic and conversions with targeted pay-per-click campaigns.",
      icon: "📈",
      features: ["Google Ads", "Facebook Ads", "Retargeting", "Conversion Optimization"]
    },
    {
      title: "Graphic Design",
      description: "Create a memorable brand identity with stunning visuals for both print and digital media.",
      icon: "🎨",
      features: ["Logo & Branding", "Social Media Graphics", "Print Design", "UI/UX Design"]
    }
  ];
 

  return (
    <div className="interactive-service-showcase-tabs">
        <h1 className="section-heading">Services</h1>
      <div className="interactive-service-showcase-tabs-headers">
        {services.map((service, index) => (
          <button
            key={index}
            className={`interactive-service-showcase-tabs-header ${activeTab === index ? 'interactive-service-showcase-tabs-active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <span className="interactive-service-showcase-tabs-icon">{service.icon}</span>
            {service.title}
          </button>
        ))}
      </div>
      <div className="interactive-service-showcase-tabs-content">
        <h3>{services[activeTab].title}</h3>
        <p>{services[activeTab].description}</p>
        <ul className="interactive-service-showcase-tabs-features">
          {services[activeTab].features.map((feature, idx) => (
            <li key={idx}>✓ {feature}</li>
          ))}
        </ul>
        <button className="interactive-service-showcase-tabs-cta">
          Learn More About {services[activeTab].title}
        </button>
      </div>
    </div>
  );
};

export default InteractiveServiceShowcaseTabs;