import React, { useState, useEffect } from 'react';
import { useOneSignal } from '../hooks/useOneSignal';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { storeOneSignalUserId, storeNotificationSettings } from '../services/notificationService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBellSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import button from '../cva/button';
import { AnimatePresence, motion } from 'framer-motion';

interface NotificationPermissionProps {
  onClose?: () => void;
}

const NotificationPermission: React.FC<NotificationPermissionProps> = ({
  onClose,
}) => {
  const {
    isInitialized,
    permission,
    isEnabled,
    requestPermission,
    setUserEmail,
    getUserId
  } = useOneSignal();

  const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
  const [isLoading, setIsLoading] = useState(false);
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
      setUserEmail(userEmail);

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
    if (key != "enabled" && !settings.enabled) {
      return;
    }
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);

    if (userEmail) {
      await storeNotificationSettings(userEmail, newSettings);
    }
  };

  useEffect(() => {
    if (!settings.enabled && Object.values(settings).some((s) => s)) {
      setSettings({
        enabled: false,
        showPreview: false,
        sound: false,
        vibration: false
      });
    }
  }, [settings])

  if (!isInitialized) {
    return null;
  }

  return (
    <div className="border-t pt-4 mt-6">
      {
        isEnabled ?
          (
            <div className='text-sm'>
              <div className="flex items-center justify-between mb-2">
                <div>Notification Settings</div>
                {onClose && (
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                )}
              </div>

              <div className="p-4 border rounded-lg overflow-hidden">
                <div className="flex items-center justify-between"
                  onClick={() => handleSettingsChange('enabled', !settings.enabled)}>
                  <span>Enable Notifications</span>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.enabled ? 'bg-primary' : 'bg-gray-300'
                      }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.enabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {
                    settings.enabled && (
                      <motion.div variants={{
                        closed: {
                          height: "0",
                          opacity: 0
                        },
                        open: {
                          height: "auto",
                          opacity: 1
                        }
                      }} initial="closed" animate="open" exit="closed" className='space-y-4'>
                        <div className="flex items-center justify-between pt-4"
                          onClick={() => handleSettingsChange('sound', !settings.sound)}>
                          <span>Sound</span>
                          <button

                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.sound ? 'bg-primary' : 'bg-gray-300'
                              }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.sound ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                          </button>
                        </div>

                        <div className="flex items-center justify-between"
                          onClick={() => handleSettingsChange('vibration', !settings.vibration)}>
                          <span>Vibration</span>
                          <button
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.vibration ? 'bg-primary' : 'bg-gray-300'
                              }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.vibration ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                          </button>
                        </div>

                        <div className="flex items-center justify-between"
                          onClick={() => handleSettingsChange('showPreview', !settings.showPreview)}>
                          <span>Show Message Preview</span>
                          <button
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.showPreview ? 'bg-primary' : 'bg-gray-300'
                              }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.showPreview ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                          </button>
                        </div>
                      </motion.div>
                    )
                  }
                </AnimatePresence>
              </div>
            </div>
          ) : permission === 'denied' ? (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBellSlash} className="dark:text-red-600 text-red-800" />
                <span className="text-sm text-red-800 dark:text-red-200">
                  Notifications are blocked. Please enable them in your browser settings.
                </span>
              </div>
            </div>
          ) : (
            <div className="bg-primary-50 dark:bg-blue-900/20 border border-primary-200 dark:border-primary-200/10 dark:border-primary-60/5 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faBell} className="text-primary mt-1" />
                <div className="flex-1">
                  <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                    Enable Notifications
                  </h3>
                  <p className="text-sm text-primary-500 dark:text-primary-300 mb-3">
                    Get notified when you receive new messages, even when the app is closed.
                  </p>
                  <button
                    onClick={handleRequestPermission}
                    disabled={isLoading}
                    className={button({ intent: "primary" })}
                  >
                    {isLoading ? 'Enabling...' : 'Enable Notifications'}
                  </button>
                </div>
              </div>
            </div>
          )
      }
    </div>
  )
};

export default NotificationPermission; 