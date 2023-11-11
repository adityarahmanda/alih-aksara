<!-- src/routes/+layout.svelte -->
<script lang="ts">
    import '$lib/chota.min.css';
    import '$lib/style.css';
    import { base } from '$app/paths';
</script>

<main class="container">
    <nav class="nav">
        <div class="nav-left">
            <a class="brand" href="{ base }">alih aksara</a>
        </div>
        <div class="nav-right">
            <a href="{ base }/#">Latin-Jawa</a>
            <a href="{ base }/#">Jawa-Latin</a>
            <a href="{ base }/#">Jawa-Kawi</a>
        </div>
    </nav>

    <slot />

    <footer class="text-center">
        <h5>©2021 - <a href="https://adityarahmanda.github.io" class="copyright">Aditya Rahmanda</a></h5>
    </footer>
</main>