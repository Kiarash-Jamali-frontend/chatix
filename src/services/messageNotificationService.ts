import { 
  getOneSignalUserIdFromFirebase, 
  storeMessageNotification, 
  getNotificationSettings,
  sendMessageNotificationViaBackend
} from './notificationService';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';

// Handle notification when a new message is sent
export const handleNewMessageNotification = async (
  messageData: {
    id: string;
    from: string;
    to: string;
    type: string;
    content?: string;
    timestamp: Date;
  },
  isGroupMessage: boolean = false,
  groupId?: string
) => {
  try {
    // Get recipient's OneSignal user ID
    const recipientEmail = messageData.to;
    const oneSignalUserId = await getOneSignalUserIdFromFirebase(recipientEmail);
    
    if (!oneSignalUserId) {
      console.log('Recipient not found or OneSignal not set up');
      return;
    }

    // Get recipient's notification settings
    const notificationSettings = await getNotificationSettings(recipientEmail);
    
    if (!notificationSettings.enabled) {
      console.log('Notifications disabled for recipient');
      return;
    }

    // Get sender's profile for notification title
    const senderProfileDoc = await getDoc(doc(db, 'profile', messageData.from));
    const senderName = senderProfileDoc.exists() ? senderProfileDoc.data().name : messageData.from;

    // Store notification data in Firebase
    await storeMessageNotification(messageData.id, {
      from: messageData.from,
      to: messageData.to,
      messageType: messageData.type,
      content: messageData.content,
      timestamp: messageData.timestamp,
      chatId: isGroupMessage ? undefined : messageData.from,
      groupId: isGroupMessage ? groupId : undefined
    });

    // Send notification using the backend service
    const notificationResult = await sendMessageNotificationViaBackend(
      oneSignalUserId,
      senderName,
      messageData.type,
      messageData.content || '',
      isGroupMessage,
      isGroupMessage && groupId ? (await getDoc(doc(db, 'group', groupId))).data()?.groupName : undefined,
      isGroupMessage ? undefined : messageData.from,
      isGroupMessage ? groupId : undefined
    );

    if (notificationResult.success) {
      console.log('Notification sent successfully:', notificationResult);
    } else {
      console.error('Failed to send notification:', notificationResult.error);
    }

    return true;
  } catch (error) {
    console.error('Failed to handle new message notification:', error);
    return false;
  }
};

// Handle notification for group messages
export const handleGroupMessageNotification = async (
  messageData: {
    id: string;
    from: string;
    to: string;
    type: string;
    content?: string;
    timestamp: Date;
  },
  groupId: string
) => {
  return handleNewMessageNotification(messageData, true, groupId);
};

// Handle notification for private messages
export const handlePrivateMessageNotification = async (
  messageData: {
    id: string;
    from: string;
    to: string;
    type: string;
    content?: string;
    timestamp: Date;
  }
) => {
  return handleNewMessageNotification(messageData, false);
};

// Check if user should receive notifications
export const shouldSendNotification = async (recipientEmail: string): Promise<boolean> => {
  try {
    const settings = await getNotificationSettings(recipientEmail);
    return settings.enabled;
  } catch (error) {
    console.error('Failed to check notification settings:', error);
    return false;
  }
};

// Get notification content based on message type
export const getNotificationContent = (messageType: string, content?: string, showPreview: boolean = true): string => {
  if (messageType === 'text' && showPreview && content) {
    // Truncate long messages
    return content.length > 100 ? content.substring(0, 100) + '...' : content;
  }
  
  switch (messageType) {
    case 'image':
      return 'Sent an image';
    case 'video':
      return 'Sent a video';
    case 'audio':
      return 'Sent an audio message';
    case 'file':
      return 'Sent a file';
    default:
      return 'Sent a message';
  }
}; 