import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import MessageType from '../types/MessageType';

const backendUrl = import.meta.env.VITE_CHATIX_SERVER_URL || 'http://localhost:3001';

// Store user's OneSignal ID in Firebase
export const storeOneSignalUserId = async (userEmail: string, newOneSignalUserId: string, oneSignalUserIds: string[] | undefined) => {
  try {
    const userDocRef = doc(db, 'profile', userEmail);
    await updateDoc(userDocRef, {
      oneSignalUserIds: oneSignalUserIds ? [...oneSignalUserIds, newOneSignalUserId] : [newOneSignalUserId]
    });

    console.log('OneSignal user ID stored successfully');
    return true;
  } catch (error) {
    console.error('Failed to store OneSignal user ID:', error);
    return false;
  }
};

// Get user's OneSignal ID from Firebase
export const getOneSignalUserIdsFromFirebase = async (userEmail: string) => {
  try {
    const userDocRef = doc(db, 'profile', userEmail);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data()?.oneSignalUserIds;
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
}) => {
  try {
    const userDocRef = doc(db, 'profile', userEmail);
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
    const userDocRef = doc(db, 'profile', userEmail);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data()?.notificationSettings || {
        enabled: true
      };
    }

    // Return default settings if user doesn't exist
    return {
      enabled: true
    };
  } catch (error) {
    console.error('Failed to get notification settings:', error);
    return {
      enabled: true
    };
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
    app_id: import.meta.env.VITE_ONESIGNAL_APP_ID,
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

// Send notification using notification-service.js backend
export const sendNotificationViaBackend = async (
  recipientId: string,
  title: string,
  message: string,
  data: any = {},
  icon?: string,
) => {
  try {
    const response = await fetch(`${backendUrl}/api/notifications/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipientId,
        title,
        message,
        icon,
        data
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Failed to send notification via backend:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Send message notification using the specialized message endpoint
export const sendMessageNotificationViaBackend = async (
  recipientIds: string[],
  senderName: string,
  messageType: string,
  messageContent: string,
  type: MessageType,
  messageId: string,
  groupName?: string,
  chatId?: string,
  groupId?: string,
  icon?: string,
): Promise<{
  success: boolean;
  id?: string;
  error?: string
}> => {
  try {
    const response = await fetch(`${backendUrl}/api/notifications/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipientIds,
        senderName,
        messageType,
        messageContent,
        icon,
        messageId,
        type,
        groupName,
        chatId,
        groupId
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: { id: string } = await response.json();
    return { success: true, ...result };
  } catch (error) {
    console.error('Failed to send message notification via backend:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export const deleteNotification = async (id: string, msgId: string, recipientIds: string[]) => {
  try {
    const response = await fetch(`${backendUrl}/api/notifications/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        msgId,
        recipientIds
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: { id: string } = await response.json();
    return { success: true, ...result };
  } catch (error) {
    console.error('Failed to delete message notification via backend:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}