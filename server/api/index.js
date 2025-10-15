import express from 'express';
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors({
  origin: "https://chatix-blush.vercel.app",
  preflightContinue: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));
app.use(express.json());
dotenv.config();

// OneSignal configuration
const ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID;
const ONESIGNAL_REST_API_KEY = process.env.ONESIGNAL_REST_API_KEY;
const ONESIGNAL_ANDROID_HUAWEI_CHANNEL_ID = process.env.ONESIGNAL_ANDROID_HUAWEI_CHANNEL_ID;
const APP_URL = process.env.APP_URL;

// Send notification to multiple users
const sendNotificationToUsers = async (recipientIds, title, message, icon, webPushTopic, channelId, data = {}) => {
  try {

    const playersResponse = await fetch(`https://onesignal.com/api/v1/players?app_id=${ONESIGNAL_APP_ID}`, {
      headers: {
        'Authorization': `Basic ${ONESIGNAL_REST_API_KEY}`
      }
    });

    const { players } = await playersResponse.json();

    const validPlayers = players.filter((r) => !r.invalid_identifier && recipientIds.includes(r.id))
    .map((r) => r.id);

    const response = await fetch('https://api.onesignal.com/notifications?c=push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${ONESIGNAL_REST_API_KEY}`
      },
      body: JSON.stringify({
        app_id: ONESIGNAL_APP_ID,
        include_aliases: {
          onesignal_id: validPlayers
        },
        target_channel: "push",
        headings: { en: title },
        contents: { en: message },
        data: data,
        url: data.url || '/',
        chrome_web_icon: icon,
        firefox_icon: icon,
        priority: 10,
        web_push_topic: webPushTopic ? webPushTopic.slice(0, 64) : undefined,
        android_channel_id: channelId,
        huawei_channel_id: channelId,
        ios_sound: 'notification.wav',
        android_sound: 'notification',
        adm_sound: 'notification',
        wp_sound: 'notification.wav'
      })
    });

    const result = await response.json();

    if (result.errors) {
      console.error('OneSignal API errors:', result.errors);
      return { success: false, errors: result.errors };
    }

    return { success: true, id: result.id };
  } catch (error) {
    console.error('Failed to send notification:', error);
    return { success: false, error: error.message };
  }
};

const deleteNotification = async (notificationId, msgId, recipientIds) => {
  try {
    const response = await fetch(`https://api.onesignal.com/notifications/${notificationId}?app_id=${ONESIGNAL_APP_ID}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Basic ${ONESIGNAL_REST_API_KEY}`
      },
    });

    const removedNotificationResult = await sendNotificationToUsers(
      recipientIds,
      "Message has been deleted.",
      "Message deleted by an anonymous user.",
      `${APP_URL}/profile.png`,
      msgId,
      ONESIGNAL_ANDROID_HUAWEI_CHANNEL_ID,
      {});

    const result = await response.json();

    if (result.errors || removedNotificationResult.errors) {
      console.error('OneSignal API errors:', result.errors);
      return { success: false, errors: result.errors };
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to delete notification:', error);
    return { success: false, error: error.message };
  }
}

// API Routes

// Send notification to single user
app.post('/api/notifications/send', async (req, res) => {
  try {
    const { recipientId, title, message, icon, data, channelId } = req.body;

    if (!recipientId || !title || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: recipientId, title, message'
      });
    }

    const result = await sendNotificationToUsers([recipientId], title, message, icon, undefined, channelId, data);
    res.json(result);
  } catch (error) {
    console.error('Notification API error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Send notification to multiple users
app.post('/api/notifications/send-bulk', async (req, res) => {
  try {
    const { recipientIds, title, message, icon, data, channelId } = req.body;

    if (!recipientIds || !Array.isArray(recipientIds) || !title || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: recipientIds (array), title, message'
      });
    }

    const result = await sendNotificationToUsers(recipientIds, title, message, icon, undefined, channelId, data);
    res.json(result);
  } catch (error) {
    console.error('Bulk notification API error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Send message notification (specific to Chatix)
app.post('/api/notifications/message', async (req, res) => {
  try {
    const {
      recipientIds,
      senderName,
      messageType,
      messageContent,
      type,
      groupName,
      chatId,
      groupId,
      icon,
      messageId
    } = req.body;

    if (!recipientIds || !Array.isArray(recipientIds) || !senderName || typeof type != 'number') {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: recipientIds, senderName, type'
      });
    }

    // Create notification content
    let title = '';
    let message = '';
    let data = {};

    if (type == 1 && groupName) {
      title = `${senderName} in ${groupName}`;
      message = messageType === 'text' ? messageContent : `Sent a ${messageType}`;
      data = {
        type: 'group_message',
        groupId,
        url: `/group/${groupId}`
      };
    }

    if (type == 0) {
      title = senderName;
      message = messageType === 'text' ? messageContent : `Sent a ${messageType}`;
      data = {
        type: 'private_message',
        chatId,
        url: `/chat/${chatId}`
      };
    }

    const result = await sendNotificationToUsers(recipientIds, title, message, icon || `${APP_URL}/profile.png`, messageId, ONESIGNAL_ANDROID_HUAWEI_CHANNEL_ID, data);
    res.json(result);
  } catch (error) {
    console.error('Message notification API error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Notification service is running',
    timestamp: new Date().toISOString()
  });
});

app.delete("/api/notifications/delete", async (req, res) => {
  try {
    const { id, msgId, recipientIds } = req.body;

    if (!id || !msgId || !recipientIds) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: id (string), msgId: (string), recipientIds: (string[])'
      });
    }

    const result =
      await deleteNotification(id, msgId, recipientIds);

    res.json(result);
  } catch {
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start server
app.listen(3000, () => {
  console.log(`Notification service running on port ${3000}`);
});