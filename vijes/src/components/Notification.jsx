import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification = ({ type, message, isVisible, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        onClose();
      }, 4000); // Auto-close after 4 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'loading':
        return '⟳';
      default:
        return 'ℹ';
    }
  };

  return (
    <div className={`notification ${type} ${isAnimating ? 'show' : ''}`}>
      <div className="notification-content">
        <div className="notification-icon">{getIcon()}</div>
        <div className="notification-message">{message}</div>
        <button className="notification-close" onClick={onClose}>
          ×
        </button>
      </div>
      <div className="notification-progress"></div>
    </div>
  );
};

export default Notification; 