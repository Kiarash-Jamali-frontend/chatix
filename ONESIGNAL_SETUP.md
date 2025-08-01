# OneSignal Push Notification Setup Guide

This guide will help you set up OneSignal push notifications for your Chatix application.

## Prerequisites

1. A OneSignal account (free tier available)
2. Your Chatix application deployed and accessible via HTTPS
3. Firebase project configured

## Step 1: Create OneSignal App

1. Go to [OneSignal Dashboard](https://app.onesignal.com/)
2. Click "New App/Website"
3. Choose "Web Push" as the platform
4. Enter your app details:
   - **App Name**: Chatix
   - **Website URL**: Your deployed app URL (e.g., `https://your-app.vercel.app`)
   - **Default Notification Icon**: Upload your app icon (192x192px recommended)

## Step 2: Configure OneSignal Settings

### Basic Settings
1. In your OneSignal app dashboard, go to **Settings** > **Basic**
2. Note down your **App ID** (you'll need this for the configuration)
3. Configure the following settings:
   - **Default Notification Icon**: Your app icon
   - **Default Notification Image**: Optional
   - **Default Notification Sound**: Choose a sound file or use default

### Web Push Settings
1. Go to **Settings** > **Web Push**
2. Configure the following:
   - **Site Name**: Chatix
   - **Default Notification Title**: New Message
   - **Default Notification Message**: You have a new message
   - **Default URL**: Your app URL
   - **Default Notification Icon**: Your app icon
   - **Default Notification Image**: Optional

### REST API Settings
1. Go to **Settings** > **Keys & IDs**
2. Note down your **REST API Key** (you'll need this for backend integration)

## Step 3: Update Configuration

### Frontend Configuration

1. Update the OneSignal App ID in `src/utils/onesignal.ts`:
```typescript
export const ONESIGNAL_APP_ID = 'YOUR_ACTUAL_ONESIGNAL_APP_ID';
```

2. Create environment variables in your `.env` file:
```env
REACT_APP_ONESIGNAL_APP_ID=your_onesignal_app_id
```

### Backend Configuration (Optional)

If you want to send notifications from your backend, you'll need to:

1. Create a backend service (Node.js, Python, etc.)
2. Use the OneSignal REST API to send notifications
3. Store your REST API key securely

Example Node.js backend endpoint:
```javascript
const sendNotification = async (recipientId, title, message, data) => {
  const response = await fetch('https://onesignal.com/api/v1/notifications', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${process.env.ONESIGNAL_REST_API_KEY}`
    },
    body: JSON.stringify({
      app_id: process.env.ONESIGNAL_APP_ID,
      include_external_user_ids: [recipientId],
      headings: { en: title },
      contents: { en: message },
      data: data,
      url: data.url || '/'
    })
  });
  
  return response.json();
};
```

## Step 4: Firebase Configuration

### Create Required Collections

Your Firebase project needs the following collections:

1. **users** - Store OneSignal user IDs
2. **message_notifications** - Store notification data
3. **profile** - User profiles (already exists)

### Security Rules

Update your Firebase security rules to allow access to these collections:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userEmail} {
      allow read, write: if request.auth != null && request.auth.token.email == userEmail;
    }
    
    // Message notifications collection
    match /message_notifications/{messageId} {
      allow read, write: if request.auth != null;
    }
    
    // Profile collection (existing rules)
    match /profile/{userEmail} {
      allow read, write: if request.auth != null && request.auth.token.email == userEmail;
    }
  }
}
```

## Step 5: Testing

### Local Testing

1. Start your development server
2. Open the app in a supported browser (Chrome, Firefox, Safari)
3. Click "Enable Notifications" when prompted
4. Send a test message to another user
5. Check if the notification appears

### Production Testing

1. Deploy your app to a production environment
2. Ensure HTTPS is enabled
3. Test notifications between different users
4. Verify notification settings work correctly

## Step 6: Customization

### Notification Content

You can customize notification content by modifying the `handleNewMessageNotification` function in `src/services/messageNotificationService.ts`:

```typescript
// Customize notification title and message
const title = `${senderName} sent you a message`;
const message = notificationSettings.showPreview 
  ? messageData.content 
  : 'You have a new message';
```

### Notification Settings

Users can customize their notification preferences in the Settings page:
- Enable/disable notifications
- Sound settings
- Vibration settings
- Message preview settings

### Styling

Customize the notification banner and settings UI by modifying:
- `src/components/NotificationBanner.tsx`
- `src/components/NotificationPermission.tsx`

## Troubleshooting

### Common Issues

1. **Notifications not appearing**
   - Check browser notification permissions
   - Verify OneSignal App ID is correct
   - Ensure HTTPS is enabled in production

2. **OneSignal not initializing**
   - Check browser console for errors
   - Verify App ID is correct
   - Check if OneSignal script is loading

3. **Notifications not sending**
   - Check Firebase security rules
   - Verify user OneSignal ID is stored correctly
   - Check notification settings

### Debug Mode

Enable debug logging by adding this to your OneSignal configuration:

```typescript
await OneSignal.init({
  appId: ONESIGNAL_APP_ID,
  allowLocalhostAsSecureOrigin: true,
  notifyButton: {
    enable: false,
  },
  autoRegister: true,
  autoResubscribe: true,
  persistNotification: false,
  // Add debug mode
  debug: true
});
```

## Security Considerations

1. **API Keys**: Never expose your OneSignal REST API key in frontend code
2. **User Data**: Only store necessary user data in Firebase
3. **Permissions**: Request notification permissions only when needed
4. **Validation**: Validate all notification data before sending

## Performance Optimization

1. **Batch Notifications**: Consider batching multiple notifications
2. **Rate Limiting**: Implement rate limiting for notification sending
3. **Caching**: Cache user notification settings
4. **Lazy Loading**: Load OneSignal only when needed

## Monitoring

1. **OneSignal Dashboard**: Monitor notification delivery rates
2. **Firebase Analytics**: Track notification interactions
3. **Error Logging**: Log notification errors for debugging
4. **User Feedback**: Collect user feedback on notification experience

## Support

For additional help:
- [OneSignal Documentation](https://documentation.onesignal.com/)
- [OneSignal Community](https://community.onesignal.com/)
- [Firebase Documentation](https://firebase.google.com/docs)

## License

This implementation is part of the Chatix project and follows the same license terms. 