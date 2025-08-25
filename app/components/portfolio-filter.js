// components/InteractivePortfolioFilter.js
import { useState } from 'react';

const items = [
  {
    id: 1,
    title: "E-commerce SEO Campaign",
    category: "seo",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "A comprehensive SEO strategy that increased organic traffic by 187% and conversions by 62% for an e-commerce client.",
    details: [
      "Keyword research and optimization",
      "Technical SEO audit and fixes",
      "Content strategy implementation",
      "Ongoing performance monitoring"
    ]
  },
  {
    id: 2,
    title: "Social Media Brand Launch",
    category: "social media",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D",
    description: "Complete social media strategy and launch for a new fashion brand, resulting in 50K+ followers in first 3 months.",
    details: [
      "Platform strategy development",
      "Content creation and curation",
      "Community management",
      "Influencer partnership program"
    ]
  },
  {
    id: 3,
    title: "Google Ads Campaign",
    category: "ppc",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Targeted PPC campaign that achieved 425% ROI and reduced cost-per-acquisition by 38%.",
    details: [
      "Audience research and targeting",
      "Ad copy and creative development",
      "Landing page optimization",
      "Continuous A/B testing"
    ]
  },
  {
    id: 4,
    title: "Content Marketing Strategy",
    category: "content",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Developed and executed a content strategy that increased blog traffic by 215% and generated 1,200+ leads.",
    details: [
      "Content audit and gap analysis",
      "Editorial calendar development",
      "Content creation and optimization",
      "Performance measurement and reporting"
    ]
  },
  {
    id: 5,
    title: "Email Marketing Automation",
    category: "email",
    image: "https://media.istockphoto.com/id/2156140935/photo/man-reading-e-mail-on-smartphone-email-inbox-and-email-with-laptop-on-internet-information.webp?a=1&b=1&s=612x612&w=0&k=20&c=J81xI_HvFjQhLUTccU89oeropBtMd7P3BogYG1Sl_MM=",
    description: "Built an automated email marketing funnel that increased customer retention by 45% and revenue by 28%.",
    details: [
      "Customer journey mapping",
      "Email sequence development",
      "Automation workflow setup",
      "Performance analysis and optimization"
    ]
  },
  {
    id: 6,
    title: "Website Redesign",
    category: "web design",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Complete website redesign that improved user experience and increased conversion rate by 62%.",
    details: [
      "User research and persona development",
      "Wireframing and prototyping",
      "UI/UX design implementation",
      "Performance optimization"
    ]
  }
];


const InteractivePortfolioFilter = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  
  const categories = ['all', ...new Set(items.map(item => item.category))];

  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="interactive-portfolio-filter">
      <h2 className="interactive-portfolio-filter-title">Our Portfolio</h2>
      <p className="interactive-portfolio-filter-subtitle">Explore our successful projects and case studies</p>
      
      <div className="interactive-portfolio-filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`interactive-portfolio-filter-button ${activeFilter === category ? 'interactive-portfolio-filter-active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
            <span className="interactive-portfolio-filter-count">
              {category === 'all' ? items.length : items.filter(item => item.category === category).length}
            </span>
          </button>
        ))}
      </div>
      
      <div className="interactive-portfolio-filter-grid">
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            className="interactive-portfolio-filter-item"
            onClick={() => openModal(item)}
          >
            <div className="interactive-portfolio-filter-image-container">
              <img src={item.image} alt={item.title} />
              <div className="interactive-portfolio-filter-overlay">
                <div className="interactive-portfolio-filter-overlay-content">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                  <button className="interactive-portfolio-filter-view-button">View Project</button>
                </div>
              </div>
            </div>
            <div className="interactive-portfolio-filter-item-info">
              <h4>{item.title}</h4>
              <span>{item.category}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="interactive-portfolio-filter-modal">
          <div className="interactive-portfolio-filter-modal-content">
            <button 
              className="interactive-portfolio-filter-modal-close"
              onClick={closeModal}
            >
              ×
            </button>
            
            <div className="interactive-portfolio-filter-modal-image">
              <img src={selectedItem.image} alt={selectedItem.title} />
            </div>
            
            <div className="interactive-portfolio-filter-modal-info">
              <h3>{selectedItem.title}</h3>
              <span className="interactive-portfolio-filter-modal-category">
                {selectedItem.category}
              </span>
              <p>{selectedItem.description}</p>
              
              <div className="interactive-portfolio-filter-modal-details">
                <h4>Project Details</h4>
                <ul>
                  {selectedItem.details.map((detail, index) => (
                    <li key={index}>✓ {detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className="interactive-portfolio-filter-modal-actions">
                <button className="interactive-portfolio-filter-modal-button">
                  View Live Project
                </button>
                <button className="interactive-portfolio-filter-modal-button">
                  Download Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractivePortfolioFilter;