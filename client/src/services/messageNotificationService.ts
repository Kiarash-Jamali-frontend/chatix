import MessageType from '../types/MessageType';
import {
  getOneSignalUserIdsFromFirebase,
  getNotificationSettings,
  sendMessageNotificationViaBackend
} from './notificationService';

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
  senderName: string,
  type: MessageType,
  groupId?: string,
  groupName?: string,
  membersProfilesOneSignalIds?: string[],
  icon?: string
): Promise<void | { success: boolean, id?: string }> => {
  try {
    // Get recipient's OneSignal user ID
    let oneSignalUserIds = [];

    if (type == MessageType.PRIVATE) {
      const recipientEmail = messageData.to;
      oneSignalUserIds = await getOneSignalUserIdsFromFirebase(recipientEmail);

      if (!oneSignalUserIds || !oneSignalUserIds.length) {
        console.log('Recipient not found or OneSignal not set up');
        return;
      }
      // Get recipient's notification settings
      const notificationSettings = await getNotificationSettings(recipientEmail);

      if (!notificationSettings.enabled) {
        console.log('Notifications disabled for recipient');
        return;
      }
    }

    let recipientIds: string[] = [];

    switch (type) {
      case MessageType.PRIVATE: {
        recipientIds = oneSignalUserIds;
        break;
      }
      case MessageType.GROUP: {
        recipientIds = membersProfilesOneSignalIds || [];
        break;
      }
      default: {
        break;
      }
    }

    const isPrivateMessage = type == MessageType.PRIVATE;
    const isGroupMessage = type == MessageType.GROUP;

    // Send notification using the backend service
    const notificationResult = await sendMessageNotificationViaBackend(
      recipientIds,
      senderName,
      messageData.type,
      getNotificationContent(messageData.type, messageData.content) || '',
      type,
      messageData.id,
      groupName,
      isPrivateMessage ? messageData.from : undefined,
      isGroupMessage ? groupId : undefined,
      icon
    );

    if (notificationResult.success) {
      console.log('Notification sent successfully:', notificationResult);
    } else {
      console.error('Failed to send notification:', notificationResult.error);
    }

    return { id: notificationResult.id, success: true };
  } catch (error) {
    console.error('Failed to handle new message notification:', error);
    return { success: false };
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
  senderName: string,
  groupId: string,
  groupName: string,
  membersProfilesOneSignalIds: string[],
  icon?: string
) => {
  return handleNewMessageNotification(messageData, senderName, MessageType.GROUP, groupId, groupName, membersProfilesOneSignalIds, icon);
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
  },
  senderName: string,
  icon?: string
) => {
  return handleNewMessageNotification(messageData, senderName, MessageType.PRIVATE, undefined, undefined, undefined, icon);
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
export const getNotificationContent = (messageType: string, content?: string): string => {
  if (messageType === 'text' && content) {
    return content;
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