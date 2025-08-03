// Example backend service for sending OneSignal notifications
// This is a Node.js/Express example - adapt for your backend framework

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: "https://chatix-blush.vercel.app",
  preflightContinue: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));
app.use(express.json());

console.log("x");


// OneSignal configuration
const ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID;
const ONESIGNAL_REST_API_KEY = process.env.ONESIGNAL_REST_API_KEY;

// Send notification to specific user
const sendNotificationToUser = async (recipientId, title, message, data = {}) => {
  try {
    const response = await fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${ONESIGNAL_REST_API_KEY}`
      },
      body: JSON.stringify({
        app_id: ONESIGNAL_APP_ID,
        include_external_user_ids: [recipientId],
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

// Send notification to multiple users
const sendNotificationToUsers = async (recipientIds, title, message, data = {}) => {
  try {
    const response = await fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${ONESIGNAL_REST_API_KEY}`
      },
      body: JSON.stringify({
        app_id: ONESIGNAL_APP_ID,
        include_external_user_ids: recipientIds,
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

// API Routes

// Send notification to single user
app.post('/api/notifications/send', async (req, res) => {
  try {
    const { recipientId, title, message, data } = req.body;

    if (!recipientId || !title || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: recipientId, title, message'
      });
    }

    const result = await sendNotificationToUser(recipientId, title, message, data);
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
    const { recipientIds, title, message, data } = req.body;

    if (!recipientIds || !Array.isArray(recipientIds) || !title || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: recipientIds (array), title, message'
      });
    }

    const result = await sendNotificationToUsers(recipientIds, title, message, data);
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
      recipientId,
      senderName,
      messageType,
      messageContent,
      isGroupMessage,
      groupName,
      chatId,
      groupId
    } = req.body;

    if (!recipientId || !senderName) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: recipientId, senderName'
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

    const result = await sendNotificationToUser(recipientId, title, message, data);
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

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Notification service running on port ${PORT}`);
});

module.exports = {
  sendNotificationToUser,
  sendNotificationToUsers
}; 