import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';

// Store user's OneSignal ID in Firebase
export const storeOneSignalUserId = async (userEmail: string, oneSignalUserId: string) => {
  try {
    const userDocRef = doc(db, 'users', userEmail);
    await setDoc(userDocRef, {
      oneSignalUserId,
      email: userEmail,
      updatedAt: new Date()
    }, { merge: true });
    
    console.log('OneSignal user ID stored successfully');
    return true;
  } catch (error) {
    console.error('Failed to store OneSignal user ID:', error);
    return false;
  }
};

// Get user's OneSignal ID from Firebase
export const getOneSignalUserIdFromFirebase = async (userEmail: string) => {
  try {
    const userDocRef = doc(db, 'users', userEmail);
    const userDoc = await getDoc(userDocRef);
    
    if (userDoc.exists()) {
      return userDoc.data()?.oneSignalUserId;
    }
    return null;
  } catch (error) {
    console.error('Failed to get OneSignal user ID from Firebase:', error);
    return null;
  }
};

// Store notification settings for a user
export const storeNotificationSettings = async (userEmail: string, settings: {
  enabled: boolean;
  sound: boolean;
  vibration: boolean;
  showPreview: boolean;
}) => {
  try {
    const userDocRef = doc(db, 'users', userEmail);
    await updateDoc(userDocRef, {
      notificationSettings: settings,
      updatedAt: new Date()
    });
    
    console.log('Notification settings stored successfully');
    return true;
  } catch (error) {
    console.error('Failed to store notification settings:', error);
    return false;
  }
};

// Get notification settings for a user
export const getNotificationSettings = async (userEmail: string) => {
  try {
    const userDocRef = doc(db, 'users', userEmail);
    const userDoc = await getDoc(userDocRef);
    
    if (userDoc.exists()) {
      return userDoc.data()?.notificationSettings || {
        enabled: true,
        sound: true,
        vibration: true,
        showPreview: true
      };
    }
    
    // Return default settings if user doesn't exist
    return {
      enabled: true,
      sound: true,
      vibration: true,
      showPreview: true
    };
  } catch (error) {
    console.error('Failed to get notification settings:', error);
    return {
      enabled: true,
      sound: true,
      vibration: true,
      showPreview: true
    };
  }
};

// Store message notification data
export const storeMessageNotification = async (messageId: string, notificationData: {
  from: string;
  to: string;
  messageType: string;
  content?: string;
  timestamp: Date;
  chatId?: string;
  groupId?: string;
}) => {
  try {
    const notificationDocRef = doc(db, 'message_notifications', messageId);
    await setDoc(notificationDocRef, {
      ...notificationData,
      sent: false,
      createdAt: new Date()
    });
    
    console.log('Message notification stored successfully');
    return true;
  } catch (error) {
    console.error('Failed to store message notification:', error);
    return false;
  }
};

// Mark notification as sent
export const markNotificationAsSent = async (messageId: string) => {
  try {
    const notificationDocRef = doc(db, 'message_notifications', messageId);
    await updateDoc(notificationDocRef, {
      sent: true,
      sentAt: new Date()
    });
    
    console.log('Notification marked as sent');
    return true;
  } catch (error) {
    console.error('Failed to mark notification as sent:', error);
    return false;
  }
};

// Get pending notifications
export const getPendingNotifications = async () => {
  try {
    // This would typically be done by a backend service
    // For now, we'll just return an empty array
    return [];
  } catch (error) {
    console.error('Failed to get pending notifications:', error);
    return [];
  }
};

// Create notification payload for OneSignal
export const createNotificationPayload = (
  recipientOneSignalId: string,
  title: string,
  message: string,
  data: any = {}
) => {
  return {
    app_id: process.env.REACT_APP_ONESIGNAL_APP_ID,
    include_external_user_ids: [recipientOneSignalId],
    headings: { en: title },
    contents: { en: message },
    data: data,
    url: data.url || '/',
    chrome_web_icon: '/pwa-192x192.png',
    chrome_web_image: '/pwa-512x512.png',
    priority: 10,
    android_channel_id: 'chatix-messages',
    android_accent_color: '#4F46E5',
    ios_sound: 'notification.wav',
    android_sound: 'notification',
    adm_sound: 'notification',
    wp_sound: 'notification.wav'
  };
};

// Send notification via OneSignal REST API (this would be done from backend)
export const sendOneSignalNotification = async (payload: any) => {
  try {
    // This is a placeholder for the actual OneSignal API call
    // In a real implementation, this would be done from your backend
    // to keep the REST API key secure
    
    console.log('Sending OneSignal notification:', payload);
    
    // Example of what the backend API call would look like:
    /*
    const response = await fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${process.env.ONESIGNAL_REST_API_KEY}`
      },
      body: JSON.stringify(payload)
    });
    
    const result = await response.json();
    return result;
    */
    
    return { success: true, id: 'mock-notification-id' };
  } catch (error) {
    console.error('Failed to send OneSignal notification:', error);
    return { success: false, error };
  }
}; 