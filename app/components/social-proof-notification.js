// components/RealTimeSocialProofNotification.js
import { useState, useEffect } from 'react';

const RealTimeSocialProofNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const fakeNotifications = [
    { text: "Sarah from TechCorp just requested a consultation", city: "San Francisco" },
    { text: "Mike signed up for the SEO webinar", city: "New York" },
    { text: "Digital Agency booked a strategy session", city: "London" },
    { text: "Startup Founder downloaded the marketing guide", city: "Berlin" },
    { text: "Marketing Director requested a proposal", city: "Toronto" },
    { text: "E-commerce store owner started a free trial", city: "Chicago" },
    { text: "CEO booked a discovery call", city: "Austin" },
    { text: "Agency signed up for partnership program", city: "Los Angeles" }
  ];

  const fakeAvatars = [
    "👩‍💼", "👨‍💼", "👩‍🎓", "👨‍🎓", "👩‍💻", "👨‍💻", "👩‍🎨", "👨‍🎨", "👩‍🚀", "👨‍🚀"
  ];

  const getRandomTime = () => {
    const times = [1, 2, 3, 4, 5, 7, 8, 10, 12, 15];
    return times[Math.floor(Math.random() * times.length)];
  };

  useEffect(() => {
    // Add initial notifications
    const initialNotifications = Array.from({ length: 3 }, (_, i) => {
      const randomNotif = fakeNotifications[Math.floor(Math.random() * fakeNotifications.length)];
      const randomAvatar = fakeAvatars[Math.floor(Math.random() * fakeAvatars.length)];
      return {
        id: Date.now() + i,
        text: randomNotif.text,
        city: randomNotif.city,
        avatar: randomAvatar,
        timestamp: new Date(Date.now() - Math.random() * 300000) // Random time in last 5 minutes
      };
    });
    setNotifications(initialNotifications);

    const interval = setInterval(() => {
      if (notifications.length < 8) { // Limit to prevent memory issues
        const randomNotif = fakeNotifications[Math.floor(Math.random() * fakeNotifications.length)];
        const randomAvatar = fakeAvatars[Math.floor(Math.random() * fakeAvatars.length)];
        const newNotification = {
          id: Date.now(),
          text: randomNotif.text,
          city: randomNotif.city,
          avatar: randomAvatar,
          timestamp: new Date()
        };
        setNotifications(prev => [newNotification, ...prev.slice(0, 6)]); // Keep max 7 notifications
      }
    }, 8000); // Add new notification every 8 seconds

    return () => clearInterval(interval);
  }, [notifications.length]);

  const formatTime = (timestamp) => {
    const minutes = Math.floor((new Date() - timestamp) / 60000);
    if (minutes < 1) return "just now";
    if (minutes === 1) return "1 minute ago";
    return `${minutes} minutes ago`;
  };

  return (
    <div className="real-time-social-proof-notification">
      <div className="real-time-social-proof-notification-header">
        <h4>📈 Live Activity</h4>
        <button 
          className="real-time-social-proof-notification-toggle"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
      
      {isVisible && (
        <div className="real-time-social-proof-notification-list">
          {notifications.map(notification => (
            <div 
              key={notification.id} 
              className="real-time-social-proof-notification-item"
            >
              <div className="real-time-social-proof-notification-avatar">
                {notification.avatar}
              </div>
              
              <div className="real-time-social-proof-notification-content">
                <p className="real-time-social-proof-notification-text">
                  {notification.text}
                </p>
                
                <div className="real-time-social-proof-notification-meta">
                  <span className="real-time-social-proof-notification-city">
                    🌍 {notification.city}
                  </span>
                  <span className="real-time-social-proof-notification-time">
                    {formatTime(notification.timestamp)}
                  </span>
                </div>
              </div>
              
              <div className="real-time-social-proof-notification-indicator"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RealTimeSocialProofNotification;