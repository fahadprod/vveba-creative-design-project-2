// components/CaseStudyCard.js
import { useState, useRef, useEffect } from 'react';

const study = {
  client: "Google",
  description: "How we helped Google increase their organic search traffic by 187% in just 6 months with our comprehensive SEO strategy.",
  image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  metrics: [
    {
      label: "Traffic Growth",
      value: "187%",
      description: "Increase in organic search traffic over 6 months"
    },
    {
      label: "Keyword Ranking",
      value: "Top 3",
      description: "Average ranking for targeted keywords"
    },
    {
      label: "ROI",
      value: "425%",
      description: "Return on investment for the campaign"
    },
    {
      label: "Conversion Rate",
      value: "62%",
      description: "Increase in lead conversion rate"
    }
  ]
};

const CaseStudyCard = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const metricRef = useRef(null);
  
  // Animation effect when metric changes
  useEffect(() => {
    if (metricRef.current) {
      // Reset animation
      metricRef.current.style.animation = 'none';
      // Trigger reflow
      void metricRef.current.offsetWidth;
      // Apply animation
      metricRef.current.style.animation = 'case-study-card-metric-animation 0.6s ease';
    }
  }, [activeMetric]);

  return (
    <>
    <h1 className="section-heading">Case Study</h1>
    <div className="case-study-card">
      <div className="case-study-card-image">
        <img src={study.image} alt={study.client} />
      </div>
      <div className="case-study-card-content">
        <h3>{study.client}</h3>
        <p className="case-study-card-description">{study.description}</p>
        
        <div className="case-study-card-metrics-selector">
          {study.metrics.map((metric, index) => (
            <button
              key={index}
              className={`case-study-card-metric-btn ${activeMetric === index ? 'case-study-card-metric-active' : ''}`}
              onClick={() => setActiveMetric(index)}
            >
              {metric.label}
            </button>
          ))}
        </div>
        
        <div ref={metricRef} className="case-study-card-metric-display">
          <h4>{study.metrics[activeMetric].value}</h4>
          <p>{study.metrics[activeMetric].description}</p>
        </div>
        
        <button className="case-study-card-cta-button">Read Full Case Study</button>
      </div>
    </div>
    </>
  );
};

export default CaseStudyCard;