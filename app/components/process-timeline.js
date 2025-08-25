// components/InteractiveProcessTimeline.js
import { useState } from 'react';

const InteractiveProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Discovery",
      description: "We learn about your business, goals, and target audience through in-depth consultations and market research.",
      icon: "🔍",
      details: [
        "Business analysis",
        "Target audience research",
        "Competitor analysis",
        "Goal setting"
      ]
    },
    {
      title: "Strategy",
      description: "We develop a customized marketing strategy tailored to your specific needs and objectives.",
      icon: "♟️",
      details: [
        "Channel selection",
        "Budget planning",
        "KPI definition",
        "Timeline creation"
      ]
    },
    {
      title: "Execution",
      description: "Our expert team implements the strategy with precision, creativity, and technical expertise.",
      icon: "🚀",
      details: [
        "Content creation",
        "Campaign setup",
        "Platform integration",
        "Implementation"
      ]
    },
    {
      title: "Analysis",
      description: "We continuously measure results, provide insights, and optimize for maximum performance.",
      icon: "📊",
      details: [
        "Performance tracking",
        "ROI measurement",
        "Strategy optimization",
        "Regular reporting"
      ]
    },
    {
      title: "Growth",
      description: "We scale successful initiatives and explore new opportunities for continuous business growth.",
      icon: "📈",
      details: [
        "Scale successful campaigns",
        "Explore new channels",
        "Expand audience reach",
        "Continuous improvement"
      ]
    }
  ];

  return (
    <div className="interactive-process-timeline">
      <h1 className="section-heading">Our Process</h1>
      <p className="interactive-process-timeline-subtitle">A structured approach to delivering exceptional results</p>
      
      <div className="interactive-process-timeline-container">
        <div className="interactive-process-timeline-progress">
          <div 
            className="interactive-process-timeline-progress-bar" 
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
        
        <div className="interactive-process-timeline-steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`interactive-process-timeline-step ${index === activeStep ? 'interactive-process-timeline-active' : ''} ${index < activeStep ? 'interactive-process-timeline-completed' : ''}`}
              onClick={() => setActiveStep(index)}
            >
              <div className="interactive-process-timeline-step-marker">
                <div className="interactive-process-timeline-step-number">{index + 1}</div>
                <div className="interactive-process-timeline-step-icon">{step.icon}</div>
              </div>
              
              <div className="interactive-process-timeline-step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                
                {index === activeStep && (
                  <div className="interactive-process-timeline-step-details">
                    <ul>
                      {step.details.map((detail, i) => (
                        <li key={i}>✓ {detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="interactive-process-timeline-navigation">
        <button 
          className="interactive-process-timeline-nav-button"
          onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
          disabled={activeStep === 0}
        >
          Previous
        </button>
        
        <div className="interactive-process-timeline-step-indicator">
          Step {activeStep + 1} of {steps.length}
        </div>
        
        <button 
          className="interactive-process-timeline-nav-button"
          onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InteractiveProcessTimeline;