import OneSignal from 'react-onesignal';

// OneSignal configuration
export const ONESIGNAL_APP_ID = '8279bc50-2fb0-466b-a5eb-1661b14022a2'; // Replace with your actual OneSignal App ID

export let initializeOneSignalIsSuccessful = false;

// Initialize OneSignal
const initializeOneSignal = async () => {
  try {
    await OneSignal.init({
      appId: ONESIGNAL_APP_ID,
      serviceWorkerPath: `push/onesignal/OneSignalSDKWorker.js`,
      allowLocalhostAsSecureOrigin: true,
      notifyButton: undefined,
      autoRegister: true,
      autoResubscribe: true,
      persistNotification: false,
      welcomeNotification: {
        title: 'Welcome to Chatix!',
        message: 'You will now receive notifications for new messages.',
      },
    });

    console.log('OneSignal initialized successfully');
    initializeOneSignalIsSuccessful = true;
    return true;
  } catch (error) {
    console.error('Failed to initialize OneSignal:', error);
    initializeOneSignalIsSuccessful = false;
    return false;
  }
};

initializeOneSignal();

// Request notification permission
export const requestNotificationPermission = async () => {
  try {
    const permission = await OneSignal.Notifications.requestPermission();
    return permission;
  } catch (error) {
    console.error('Failed to request notification permission:', error);
    return false;
  }
};

// Check if notifications are enabled
export const isNotificationEnabled = () => {
  try {
    const permission = OneSignal.Notifications.permission;
    return permission;
  } catch (error) {
    console.error('Failed to check notification permission:', error);
    return false;
  }
};

// Get the current user's OneSignal ID
export const getOneSignalUserId = () => {
  try {
    const userId = OneSignal.User.onesignalId;
    return userId;
  } catch (error) {
    console.error('Failed to get OneSignal user ID:', error);
    return null;
  }
};

// Set user email for OneSignal
export const setOneSignalUserEmail = (email: string) => {
  try {
    OneSignal.User.addEmail(email);
    console.log('OneSignal user email set successfully');
  } catch (error) {
    console.error('Failed to set OneSignal user email:', error);
  }
};

// Set user properties for OneSignal
export const setOneSignalUserProperties = (properties: Record<string, any>) => {
  try {
    OneSignal.User.addAliases(properties);
    console.log('OneSignal user properties set successfully');
  } catch (error) {
    console.error('Failed to set OneSignal user properties:', error);
  }
};

// Send notification to specific user
export const sendNotificationToUser = (userId: string, title: string, message: string, data?: any) => {
  try {
    // This would typically be done from your backend
    // For now, we'll just log the notification details
    console.log('Sending notification:', {
      userId,
      title,
      message,
      data
    });

    // In a real implementation, you would make an API call to your backend
    // which would then use OneSignal's REST API to send the notification
    return true;
  } catch (error) {
    console.error('Failed to send notification:', error);
    return false;
  }
};

// Subscribe to notifications
export const subscribeToNotifications = async () => {
  try {
    await OneSignal.Notifications.setDefaultUrl('/');
    console.log('Subscribed to notifications successfully');
    return true;
  } catch (error) {
    console.error('Failed to subscribe to notifications:', error);
    return false;
  }
};

// Unsubscribe from notifications
export const unsubscribeFromNotifications = async () => {
  try {
    await OneSignal.User.PushSubscription.optOut();
    console.log('Unsubscribed from notifications successfully');
    return true;
  } catch (error) {
    console.error('Failed to unsubscribe from notifications:', error);
    return false;
  }
};

// Handle notification click
export const handleNotificationClick = (callback: (data: any) => void) => {
  OneSignal.Notifications.addEventListener('click', (event) => {
    const data = event.notification.additionalData;
    callback(data);
  });
};

// Handle notification permission change
export const handlePermissionChange = (callback: (isActive: boolean) => void) => {
  OneSignal.Notifications.addEventListener('permissionChange', (isActive) => {
    callback(isActive);
  });
}; 