import { useState, useEffect, useCallback } from 'react';
import { 
  initializeOneSignal, 
  requestNotificationPermission, 
  isNotificationEnabled, 
  getOneSignalUserId, 
  setOneSignalUserEmail, 
  setOneSignalUserProperties,
  subscribeToNotifications,
  unsubscribeFromNotifications,
  handleNotificationClick,
  handlePermissionChange
} from '../utils/onesignal';

interface OneSignalState {
  isInitialized: boolean;
  isEnabled: boolean;
  userId: string | null;
  permission: string;
}

export const useOneSignal = () => {
  const [state, setState] = useState<OneSignalState>({
    isInitialized: false,
    isEnabled: false,
    userId: null,
    permission: 'default'
  });

  // Initialize OneSignal
  const initialize = useCallback(async () => {
    try {
      const success = await initializeOneSignal();
      if (success) {
        const enabled = await isNotificationEnabled();
        const userId = await getOneSignalUserId();
        
        setState(prev => ({
          ...prev,
          isInitialized: true,
          isEnabled: enabled,
          userId: userId || null
        }));

        // Set up event listeners
        handleNotificationClick((data) => {
          console.log('Notification clicked:', data);
          // Handle notification click - navigate to chat, etc.
          if (data?.chatId) {
            window.location.href = `/chat/${data.chatId}`;
          }
        });

        handlePermissionChange((isActive) => {
          setState(prev => ({
            ...prev,
            permission: isActive ? 'granted' : 'denied',
            isEnabled: isActive
          }));
        });

        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to initialize OneSignal:', error);
      return false;
    }
  }, []);

  // Request notification permission
  const requestPermission = useCallback(async () => {
    try {
      const permission = await requestNotificationPermission();
      const enabled = await isNotificationEnabled();
      
      setState(prev => ({
        ...prev,
        permission: permission ? 'granted' : 'denied',
        isEnabled: enabled
      }));

      if (enabled) {
        await subscribeToNotifications();
      }

      return permission;
    } catch (error) {
      console.error('Failed to request permission:', error);
      return false;
    }
  }, []);

  // Set user email
  const setUserEmail = useCallback(async (email: string) => {
    try {
      await setOneSignalUserEmail(email);
      console.log('OneSignal user email set:', email);
    } catch (error) {
      console.error('Failed to set user email:', error);
    }
  }, []);

  // Set user properties
  const setUserProperties = useCallback(async (properties: Record<string, any>) => {
    try {
      await setOneSignalUserProperties(properties);
      console.log('OneSignal user properties set:', properties);
    } catch (error) {
      console.error('Failed to set user properties:', error);
    }
  }, []);

  // Subscribe to notifications
  const subscribe = useCallback(async () => {
    try {
      const success = await subscribeToNotifications();
      if (success) {
        setState(prev => ({
          ...prev,
          isEnabled: true
        }));
      }
      return success;
    } catch (error) {
      console.error('Failed to subscribe:', error);
      return false;
    }
  }, []);

  // Unsubscribe from notifications
  const unsubscribe = useCallback(async () => {
    try {
      const success = await unsubscribeFromNotifications();
      if (success) {
        setState(prev => ({
          ...prev,
          isEnabled: false
        }));
      }
      return success;
    } catch (error) {
      console.error('Failed to unsubscribe:', error);
      return false;
    }
  }, []);

  // Get current user ID
  const getUserId = useCallback(async () => {
    try {
      const userId = await getOneSignalUserId();
      setState(prev => ({
        ...prev,
        userId: userId || null
      }));
      return userId;
    } catch (error) {
      console.error('Failed to get user ID:', error);
      return null;
    }
  }, []);

  // Initialize on mount
  useEffect(() => {
    initialize();
  }, [initialize]);

  return {
    ...state,
    initialize,
    requestPermission,
    setUserEmail,
    setUserProperties,
    subscribe,
    unsubscribe,
    getUserId
  };
}; 