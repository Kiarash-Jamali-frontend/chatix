const handleNotificationClick = (event) => {
    event.notification.close();

    event.waitUntil(
        self.clients.matchAll({ type: 'window' }).then((clients) => {
            // یافتن هر تب باز از دامنه فعلی
            const existingTab = clients.find(client =>
                client.url.startsWith(self.location.origin)
            );

            existingTab
                ? existingTab.focus()
                : self.clients.openWindow(self.location.origin);
        })
    );
};

self.addEventListener('notificationclick', handleNotificationClick);