// Example backend service for sending OneSignal notifications
// This is a Node.js/Express example - adapt for your backend framework

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

// Send notification to multiple users
const sendNotificationToUsers = async (recipientIds, title, message, icon, collapseId, channelId, group, data = {}) => {
  try {
    const response = await fetch('https://api.onesignal.com/notifications?c=push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${ONESIGNAL_REST_API_KEY}`
      },
      body: JSON.stringify({
        app_id: ONESIGNAL_APP_ID,
        include_aliases: {
          onesignal_id: recipientIds
        },
        target_channel: "push",
        headings: { en: title },
        contents: { en: message },
        data: data,
        url: data.url || '/',
        chrome_web_icon: icon,
        small_icon: icon,
        huawei_small_icon: icon,
        firefox_icon: icon,
        priority: 10,
        adm_group: group,
        android_group: group,
        collapse_id: collapseId ? collapseId.slice(0, 64) : undefined,
        web_push_topic: collapseId ? collapseId.slice(0, 64) : undefined,
        android_channel_id: channelId,
        huawei_channel_id: channelId,
        android_accent_color: '#2b7fff',
        huawei_accent_color: '#2b7fff',
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

const deleteNotification = async (id) => {
  try {
    const response = await fetch(`https://api.onesignal.com/notifications/${id}?app_id=${ONESIGNAL_APP_ID}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Basic ${ONESIGNAL_REST_API_KEY}`
      },
    });

    const result = await response.json();

    if (result.errors) {
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
    const { recipientId, title, message, icon, data, channelId, group } = req.body;

    if (!recipientId || !title || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: recipientId, title, message'
      });
    }

    const result = await sendNotificationToUsers([recipientId], title, message, icon, undefined, channelId, group, data);
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
    const { recipientIds, title, message, icon, data, channelId, group } = req.body;

    if (!recipientIds || !Array.isArray(recipientIds) || !title || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: recipientIds (array), title, message'
      });
    }

    const result = await sendNotificationToUsers(recipientIds, title, message, icon, undefined, channelId, group, data);
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
      isGroupMessage,
      groupName,
      chatId,
      groupId,
      icon,
      messageId
    } = req.body;

    if (!recipientIds || !Array.isArray(recipientIds) || !senderName) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: recipientIds, senderName'
      });
    }

    // Create notification content
    let title = '';
    let message = '';
    let data = {};

    if (isGroupMessage && groupName) {
      title = `${senderName} in ${groupName}`;
      message = messageType === 'text' ? messageContent : `Sent a ${messageType}`;
      data = {
        type: 'group_message',
        groupId,
        url: `/group/${groupId}`
      };
    } else {
      title = senderName;
      message = messageType === 'text' ? messageContent : `Sent a ${messageType}`;
      data = {
        type: 'private_message',
        chatId,
        url: `/chat/${chatId}`
      };
    }

    const result = await sendNotificationToUsers(recipientIds, title, message, icon, messageId, ONESIGNAL_ANDROID_HUAWEI_CHANNEL_ID, "messages", data);
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
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: id (string)'
      });
    }

    const result =
      await deleteNotification(id);

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