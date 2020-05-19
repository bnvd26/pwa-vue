self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Register routes to put in cache 

workbox.routing.registerRoute(
	new RegExp("https://jsonplaceholder.typicode.com/(.*)"),
	new workbox.strategies.CacheFirst({
		cacheName: "jsonplaceholder",
		method: "GET",
		cacheableResponse: { statuses: [0, 200] },
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 30,
			}),
		],
	}),
);

workbox.routing.registerRoute(
	new RegExp("https://fonts.(?:googleapies|gstatic).com/(.*)"),
	new workbox.strategies.CacheFirst({
		cacheName: "googleapis",
		method: "GET",
		cacheableResponse: { statuses: [0, 200] },
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 30,
			}),
		],
	}),
);

// Redirect on my website on notification click

self.addEventListener("notificationclick", (event) => {
	event.notification.close();

	const promiseChain = clients.openWindow("https://pwa-vue.netlify.app");

	event.waitUntil(promiseChain);
});

// Background Sync

workbox.routing.registerRoute(
	"https://jsonplaceholder.typicode.com/posts",
	workbox.strategies.networkOnly({
		plugins: [
			new workbox.backgroundSync.Plugin("postQueue", {
				maxRetentionTime: 24 * 60,
			}),
		],
	}),
	"POST",
);
