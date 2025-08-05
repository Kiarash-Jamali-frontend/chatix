const BASE_URL = self.location.origin;

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    self.clients.matchAll({type: 'window'}).then((clientList) => {
      // استفاده از BASE_URL برای تطبیق آدرس
      for (const client of clientList) {
        if (client.url.startsWith(BASE_URL) && 'focus' in client) {
          return client.focus();
        }
      }
      
      if (self.clients.openWindow) {
        return self.clients.openWindow(BASE_URL);
      }
    })
  );
});