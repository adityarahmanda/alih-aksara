/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />

import { build, files, version } from '$service-worker';

declare let self: ServiceWorkerGlobalScope;

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const addDomain = (assets: string[]) => assets.map((f) => self.location.origin + f);

// hard-coded list of app routes we want to preemptively cache
const routes = [
	"/alih-aksara",
	"/alih-aksara/jawa-kawi",
	"/alih-aksara/jawa-latin",
	"/alih-aksara/latin-jawa",
	"/alih-aksara/latin-kawi",
];

// hard-coded list of other assets necessary for page load outside our domain
const customAssets = [
  "https://fonts.googleapis.com/css2?family=Mulish:wght@400;900&family=Noto+Sans+Javanese&family=Noto+Sans+Kawi&display=swap",
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
];

// preload the code and data needed to navigate to /foo
const ASSETS = [
	...build, // the app itself
	...files,  // everything in `static`
	...addDomain(routes),
	...customAssets
];

// install service worker
self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

// activate service worker
self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});

// fetch service worker
self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			const response = await cache.match(url.pathname);

			if (response) {
				return response;
			}
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);

			// if we're offline, fetch can return a value that is not a Response
			// instead of throwing - and we can't pass this non-Response to respondWith
			if (!(response instanceof Response)) {
				throw new Error('invalid response from fetch');
			}

			if (url.protocol == 'http:' && response.status === 200) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch (err) {
			const response = await cache.match(event.request);

			if (response) {
				return response;
			}

			// if there's no cache, then just error out
			// as there is nothing we can do to respond to this request
			throw err;
		}
	}

	event.respondWith(respond());
});

self.addEventListener('message', event => {
    if (event.data && event.data.type == 'SKIP_WAITING') {
        self.skipWaiting();
    }
})