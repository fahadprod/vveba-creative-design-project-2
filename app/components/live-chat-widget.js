// components/LiveChatWidget.js
import { useState, useEffect, useRef } from 'react';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! 👋 Thanks for reaching out. How can we help you today?", sender: 'bot', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = { text: inputValue, sender: 'user', timestamp: new Date() };
      setMessages([...messages, newMessage]);
      setInputValue('');
      setIsTyping(true);
      
      // Simulate bot response after a delay
      setTimeout(() => {
        setIsTyping(false);
        const botResponses = [
          "Thanks for your message! Our team will get back to you shortly.",
          "I understand. Let me connect you with one of our marketing experts.",
          "That's a great question! Our typical response time is under 5 minutes during business hours.",
          "We'd love to help with that! Could you share more details about your project?",
          "I've noted your inquiry. Our specialist will provide detailed information soon."
        ];
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        setMessages(prev => [...prev, { 
          text: randomResponse, 
          sender: 'bot', 
          timestamp: new Date() 
        }]);
      }, 2000);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="live-chat-widget">
      {!isOpen ? (
        <button 
          className="live-chat-widget-button"
          onClick={() => setIsOpen(true)}
        >
          <span className="live-chat-widget-icon">💬</span>
          <span className="live-chat-widget-text">Chat with us</span>
          <span className="live-chat-widget-notification"></span>
        </button>
      ) : (
        <div className={`live-chat-widget-container ${isMinimized ? 'live-chat-widget-minimized' : ''}`}>
          <div className="live-chat-widget-header">
            <div className="live-chat-widget-header-info">
              <div className="live-chat-widget-avatar">MA</div>
              <div className="live-chat-widget-status">
                <h4>Marketing Experts</h4>
                <span className="live-chat-widget-status-indicator">Online</span>
              </div>
            </div>
            <div className="live-chat-widget-header-actions">
              <button 
                className="live-chat-widget-minimize"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? '+' : '-'}
              </button>
              <button 
                className="live-chat-widget-close"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="live-chat-widget-messages">
                {messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`live-chat-widget-message live-chat-widget-message-${msg.sender}`}
                  >
                    <div className="live-chat-widget-message-content">
                      <p>{msg.text}</p>
                      <span className="live-chat-widget-message-time">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="live-chat-widget-message live-chat-widget-message-bot">
                    <div className="live-chat-widget-typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              <div className="live-chat-widget-input-container">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="live-chat-widget-input"
                />
                <button 
                  onClick={handleSendMessage}
                  className="live-chat-widget-send-button"
                  disabled={!inputValue.trim()}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LiveChatWidget;