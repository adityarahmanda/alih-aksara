import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
	resolve: {
		alias: {
			'@material_symbols': '/node_modules/@material_symbols'
		}
	},
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			workbox: { 
				clientsClaim: true,
				skipWaiting: true,
				cleanupOutdatedCaches: true,
				offlineGoogleAnalytics: true,
				globPatterns: [
					'client/**/*.{js,css,ico,png,svg,webp,webmanifest}', 
					'prerendered/**/*.html',
					'server/**/*.{js,css}'
				],
				runtimeCaching: [
					{
						urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'workbox-google-fonts-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
							},
							cacheableResponse: {
								statuses: [0, 200]
							}
						}
						},
						{
						urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'workbox-gstatic-fonts-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
							},
							cacheableResponse: {
								statuses: [0, 200]
							},
						}
					}
				]
			},
			manifest: {
				"name": "Alih Aksara",
				"short_name": "Alih Aksara",
				"description": "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Jawa ke bentuk aksara lain ataupun sebaliknya.",
				"scope": "/alih-aksara",
				"start_url": "/alih-aksara/latin-jawa?standalone=true",
				"display": "standalone",
				"background_color": "#ffffff",
				"theme_color": "#47311c",
				"icons": [
					{
						"src": "pwa-icon-64x64.png",
						"type": "image/png",
						"sizes": "64x64",
						"purpose": "any"
					},
					{
						"src": "pwa-icon-192x192.png",
						"type": "image/png",
						"sizes": "192x192",
						"purpose": "any"
					},
					{
						"src": "pwa-icon-512x512.png",
						"type": "image/png",
						"sizes": "512x512",
						"purpose": "any"
					},
					{
						"src": "maskable-icon-512x512.png",
						"type": "image/png",
						"sizes": "512x512",
						"purpose": "maskable"
					}
				],
				"screenshots": [
					{
						"src": "screenshot-narrow.png",
						"type": "image/jpg",
						"sizes": "370x730",
						"form_factor": "narrow"
					},
					{
						"src": "screenshot.png",
						"type": "image/jpg",
						"sizes": "720x370",
						"form_factor": "wide"
					}
				]
			}
		}),
		svgLoader({
			defaultImport: 'raw'
		})
	]
});
