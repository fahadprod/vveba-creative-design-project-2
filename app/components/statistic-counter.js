// components/AnimatedStatisticsCounter.js
import { useState, useEffect, useRef } from 'react';

const StatsCounter = ({ end, duration = 2000, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;
          
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function for smoother animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref} className="animated-statistics-counter-number">{count}{suffix}</span>;
};

const AnimatedStatisticsCounter = () => {
  return (
    <div className="animated-statistics-counter">
      <h2 className="animated-statistics-counter-title">Our Impact in Numbers</h2>
      <p className="animated-statistics-counter-subtitle">Delivering measurable results for our clients</p>
      
      <div className="animated-statistics-counter-grid">
        <div className="animated-statistics-counter-item">
          <div className="animated-statistics-counter-icon">💼</div>
          <StatsCounter end={250} />
          <p className="animated-statistics-counter-label">Happy Clients</p>
        </div>
        
        <div className="animated-statistics-counter-item">
          <div className="animated-statistics-counter-icon">🚀</div>
          <StatsCounter end={500} />
          <p className="animated-statistics-counter-label">Projects Completed</p>
        </div>
        
        <div className="animated-statistics-counter-item">
          <div className="animated-statistics-counter-icon">👥</div>
          <StatsCounter end={75} />
          <p className="animated-statistics-counter-label">Marketing Experts</p>
        </div>
        
        <div className="animated-statistics-counter-item">
          <div className="animated-statistics-counter-icon">📈</div>
          <StatsCounter end={98} suffix="%" />
          <p className="animated-statistics-counter-label">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStatisticsCounter;