import React, { useState } from 'react';
import { useOneSignal } from '../hooks/useOneSignal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faTimes } from '@fortawesome/free-solid-svg-icons';

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
    <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white px-4 py-3 z-50 shadow-lg">
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
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors disabled:opacity-50"
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