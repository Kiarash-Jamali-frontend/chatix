import React, { useState } from 'react';
import { useOneSignal } from '../hooks/useOneSignal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faTimes } from '@fortawesome/free-solid-svg-icons';
import button from '../cva/button';

interface NotificationBannerProps {
  onClose?: () => void;
}

const NotificationBanner: React.FC<NotificationBannerProps> = ({ onClose }) => {
  const { isInitialized, isEnabled, permission, requestPermission } = useOneSignal();
  const [isLoading, setIsLoading] = useState(false);

  const handleEnableNotifications = async () => {
    setIsLoading(true);
    try {
      await requestPermission();
    } catch (error) {
      console.error('Failed to request notification permission:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Don't show banner if OneSignal is not initialized or notifications are already enabled
  if (!isInitialized || isEnabled || permission === 'denied') {
    return null;
  }

  return (
    <div className="bg-primary text-white px-4 py-3 z-50 relative shadow-lg">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faBell} className="text-lg" />
          <div>
            <h3 className="font-medium">Enable Notifications</h3>
            <p className="text-sm text-blue-100">
              Get notified when you receive new messages
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleEnableNotifications}
            disabled={isLoading}
            className={button({ intent: "default", className: "text-primary px-5 text-[1rem]" })}
          >
            {isLoading ? 'Enabling...' : 'Enable'}
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="text-blue-100 hover:text-white transition-colors p-1"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationBanner; 