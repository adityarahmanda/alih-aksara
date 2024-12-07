<!-- src/routes/+layout.svelte -->
<script lang="ts">
import '$lib/css/chota.min.css';
import '$lib/css/style.css';
import { base } from '$app/paths';
import { onMount } from 'svelte'; 
import { pwaInfo } from 'virtual:pwa-info';

$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '';

onMount(async () => {
    if (pwaInfo) {
        const { registerSW } = await import('virtual:pwa-register')
        registerSW({
            immediate: true,
            onOfflineReady() {},
            onRegistered(r) {},
            onRegisterError(error) {}
        })
    }
})
</script>

<svelte:head>
 	{@html webManifestLink} 
</svelte:head>

<main class="container">
    <nav class="nav">
        <div class="nav-left" style="flex-basis: auto;">
            <a class="brand" href="{ base }/">alih aksara</a>
        </div>
        <div class="nav-right" style="flex-basis: auto;">
            <a href="{ base }/latin-jawa">Latin-Jawa</a>
            <a href="{ base }/jawa-latin">Jawa-Latin</a>
            <a href="{ base }/latin-kawi">Latin-Kawi</a>
            <a href="{ base }/jawa-kawi">Jawa-Kawi</a>
        </div>
    </nav>

    <slot />

    <footer class="text-center" style="flex-grow: 1; align-content:flex-end">
        <h5><a href="https://adityarahmanda.github.io/alih-aksara/privacy-policy" style="text-decoration: underline;">Kebijakan Privasi</a> | ©2021 - <a href="https://adityarahmanda.github.io" class="copyright" style="text-decoration: underline;" rel="me">Aditya Rahmanda</a></h5>
    </footer>
</main>