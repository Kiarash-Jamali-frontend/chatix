import React, { useState, useEffect } from 'react';
import { useOneSignal } from '../hooks/useOneSignal';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { storeOneSignalUserId, storeNotificationSettings } from '../services/notificationService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBellSlash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

interface NotificationPermissionProps {
  onClose?: () => void;
  showSettings?: boolean;
}

const NotificationPermission: React.FC<NotificationPermissionProps> = ({ 
  onClose, 
  showSettings = false 
}) => {
  const { 
    isInitialized, 
    isEnabled, 
    permission, 
    requestPermission, 
    setUserEmail, 
    getUserId 
  } = useOneSignal();
  
  const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [settings, setSettings] = useState({
    enabled: true,
    sound: true,
    vibration: true,
    showPreview: true
  });

  useEffect(() => {
    if (isInitialized && userEmail) {
      handleUserSetup();
    }
  }, [isInitialized, userEmail]);

  const handleUserSetup = async () => {
    if (!userEmail) return;
    
    try {
      // Set user email in OneSignal
      await setUserEmail(userEmail);
      
      // Get OneSignal user ID and store it in Firebase
      const oneSignalUserId = await getUserId();
      if (oneSignalUserId) {
        await storeOneSignalUserId(userEmail, oneSignalUserId);
      }
    } catch (error) {
      console.error('Failed to setup user:', error);
    }
  };

  const handleRequestPermission = async () => {
    setIsLoading(true);
    try {
      const result = await requestPermission();
      if (result != false) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        
        // Store notification settings
        if (userEmail) {
          await storeNotificationSettings(userEmail, settings);
        }
      }
    } catch (error) {
      console.error('Failed to request permission:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSettingsChange = async (key: keyof typeof settings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    
    if (userEmail) {
      await storeNotificationSettings(userEmail, newSettings);
    }
  };

  if (!isInitialized) {
    return null;
  }

  if (showSuccess) {
    return (
      <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2">
        <FontAwesomeIcon icon={faCheck} />
        <span>Notifications enabled!</span>
      </div>
    );
  }

  if (showSettings) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Notification Settings</h3>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Enable Notifications</span>
            <button
              onClick={() => handleSettingsChange('enabled', !settings.enabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.enabled ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.enabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <span>Sound</span>
            <button
              onClick={() => handleSettingsChange('sound', !settings.sound)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.sound ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.sound ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <span>Vibration</span>
            <button
              onClick={() => handleSettingsChange('vibration', !settings.vibration)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.vibration ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.vibration ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <span>Show Message Preview</span>
            <button
              onClick={() => handleSettingsChange('showPreview', !settings.showPreview)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.showPreview ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.showPreview ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (permission === 'granted' && isEnabled) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBell} className="text-green-600" />
          <span className="text-green-800 dark:text-green-200">
            Notifications are enabled
          </span>
        </div>
      </div>
    );
  }

  if (permission === 'denied') {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBellSlash} className="text-red-600" />
          <span className="text-red-800 dark:text-red-200">
            Notifications are blocked. Please enable them in your browser settings.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <FontAwesomeIcon icon={faBell} className="text-blue-600 mt-1" />
        <div className="flex-1">
          <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
            Enable Notifications
          </h3>
          <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
            Get notified when you receive new messages, even when the app is closed.
          </p>
          <button
            onClick={handleRequestPermission}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {isLoading ? 'Enabling...' : 'Enable Notifications'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPermission; 