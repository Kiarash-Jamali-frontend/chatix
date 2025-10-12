import React, { useState, useEffect } from 'react';
import { useOneSignal } from '../hooks/useOneSignal';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { storeNotificationSettings, storeOneSignalUserId } from '../services/notificationService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBellSlash } from '@fortawesome/free-solid-svg-icons';
import button from '../cva/button';
import SwitchButton from './common/SwitchButton';

interface NotificationPermissionProps {
  onClose?: () => void;
}

type SettingsType = { enabled: boolean };

const NotificationPermission: React.FC<NotificationPermissionProps> = () => {
  const {
    isInitialized,
    permission,
    isEnabled,
    requestPermission,
    setUserEmail,
    userId
  } = useOneSignal();

  const userProfile = useAppSelector((state: RootState) => state.user.profile)
  const userEmail = useAppSelector((state: RootState) => state.user.data?.email);
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState<SettingsType | null>(null);

  const handleUserSetup = async () => {
    if (!userEmail) return;

    try {
      // Set user email in OneSignal
      setUserEmail(userEmail);

      // Get OneSignal user ID and store it in Firebase
      // const oneSignalUserId = await getUserId();
      // if (oneSignalUserId && !oneSignalUserIds?.find((id) => id == oneSignalUserId)) {
      //   await storeOneSignalUserId(userEmail, oneSignalUserId, oneSignalUserIds);
      // }

      if (!settings && userProfile) {
        await storeNotificationSettings(userEmail, { enabled: true });
        setSettings({ enabled: true });
      }
    } catch (error) {
      console.error('Failed to setup user:', error);
    }
  };

  const handleRequestPermission = async () => {
    setIsLoading(true);
    try {
      if (permission != 'granted') {
        const result = await requestPermission();
        if (result != false && userEmail) {
          await storeNotificationSettings(userEmail, settings || { enabled: true });
        }
      }
      if (userEmail && userId && userProfile && !userProfile.oneSignalUserIds?.find((id) => id == userId)) {
        await storeOneSignalUserId(userEmail, userId, userProfile.oneSignalUserIds);
      }
    } catch (error) {
      console.error('Failed to request permission:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSettingsChange = async (key: keyof SettingsType, value: boolean) => {
    if (key != "enabled" && !settings?.enabled) {
      return;
    }
    const newSettings = { ...settings, [key]: value };
    setSettings(settings ? newSettings : { [key]: value });

    if (userEmail) {
      await storeNotificationSettings(userEmail, newSettings);
    }
  };

  useEffect(() => {
    if (settings && !settings.enabled && Object.values(settings).some((s) => s)) {
      setSettings({
        enabled: false,
      });
    }
  }, [settings]);

  useEffect(() => {
    setSettings(userProfile?.notificationSettings || null);
  }, [userProfile]);

  useEffect(() => {
    if (isInitialized && userEmail) {
      handleUserSetup();
    }
  }, [isInitialized, userEmail, userProfile]);

  if (isInitialized && settings) {
    return (
      (isEnabled && userId && userProfile?.oneSignalUserIds?.includes(userId)) ?
        (
          <div className="flex items-center justify-between"
            onClick={() => handleSettingsChange('enabled', !settings.enabled)}>
            <span>Notifications</span>
            <SwitchButton enabled={settings.enabled} />
          </div>
        ) : permission === 'denied' ? (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-lg p-4">
            <div className="flex items-end lg:justify-between lg:items-center lg:flex-row flex-col">
              <div className="flex items-center gap-2 w-full lg:w-fit">
                <FontAwesomeIcon icon={faBellSlash} className="dark:text-red-600 text-red-800" />
                <span className="text-sm text-red-800 dark:text-red-200">
                  Notifications are blocked. Click the Retry button to reactivate.
                </span>
              </div>
              <button onClick={handleRequestPermission} disabled={isLoading} className={button({ intent: "danger", size: "small", className: "lg:hidden" })}>
                Retry
              </button>
              <button onClick={handleRequestPermission} disabled={isLoading} className={button({ intent: "danger", size: "extraSmall", className: "max-lg:hidden" })}>
                Retry
              </button>
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
    )
  }
};

export default NotificationPermission; 