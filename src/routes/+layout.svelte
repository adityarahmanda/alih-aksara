<!-- src/routes/+layout.svelte -->
<script lang="ts">
    import '$lib/css/chota.min.css';
    import '$lib/css/style.css';
    import { base } from '$app/paths';
	import { onMount } from 'svelte';

    async function detectServiceWorkerUpdate() {
        const registration = await navigator.serviceWorker.ready;

        registration.addEventListener('updatefound', () => {
            const newServiceWorker = registration.installing;
            newServiceWorker?.addEventListener('statechange', () => {
                if (newServiceWorker.state == 'installed') {
                    newServiceWorker.postMessage({ type: 'SKIP_WAITING' });
                }
            })
        })
    }

    onMount(() => {
        detectServiceWorkerUpdate()
    });
</script>

<main class="container">
    <nav class="nav">
        <div class="nav-left">
            <a class="brand" href="{ base }/">alih aksara</a>
        </div>
        <div class="nav-right">
            <a href="{ base }/latin-jawa">Latin-Jawa</a>
            <a href="{ base }/jawa-latin">Jawa-Latin</a>
            <a href="{ base }/latin-kawi">Latin-Kawi</a>
            <a href="{ base }/jawa-kawi">Jawa-Kawi</a>
        </div>
    </nav>

    <slot />

    <footer class="text-center">
        <h5>©2021 - <a href="https://adityarahmanda.github.io" class="copyright" style="text-decoration: underline;">Aditya Rahmanda</a></h5>
    </footer>
</main>