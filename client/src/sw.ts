import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'

declare let self: ServiceWorkerGlobalScope

precacheAndRoute(self.__WB_MANIFEST)
cleanupOutdatedCaches();


self.addEventListener("push", (event) => {
    const data = event.data?.json();

    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.message,
            icon: data.icon,
            tag: data.tag,
        })
    )
})

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING')
        self.skipWaiting()
})