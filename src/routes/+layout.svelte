<!-- src/routes/+layout.svelte -->
<script lang="ts">
    import '$lib/css/chota.min.css';
    import '$lib/css/style.css';
    import UpdatePrompt from "$lib/components/UpdatePrompt.svelte";
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
	import { onMount } from 'svelte';

    let needRefresh:boolean = false;
    let serviceWorker:ServiceWorker | null;

    async function detectServiceWorkerUpdate() {
        const registration = await navigator.serviceWorker.ready;
        
        if (registration.waiting) {
            serviceWorker = registration.waiting;
            needRefresh = true;
        }

        registration.addEventListener('updatefound', () => {
            if (registration.installing) {
                serviceWorker = registration.installing;
                serviceWorker?.addEventListener('statechange', () => {
                    if (serviceWorker?.state == 'installed') {
                        needRefresh = true;
                    }
                });
            }
        });
    }

    function onUpdatePromptReload()
    {
        if (!serviceWorker) return;
        
        serviceWorker?.postMessage({ type: 'SKIP_WAITING' });
        needRefresh = false;
		goto(window.location.pathname+'?eraseCache=true');
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

    <UpdatePrompt needRefresh={needRefresh} onReload={onUpdatePromptReload} />
</main>