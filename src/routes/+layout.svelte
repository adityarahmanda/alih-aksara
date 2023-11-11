<!-- src/routes/+layout.svelte -->
<script>
    import '$lib/chota.min.css';
    import '$lib/style.css';
</script>

<main class="container">
    <nav class="nav">
        <div class="nav-left">
            <a class="brand" href="#">alih aksara</a>
        </div>
        <div class="nav-right">
            <a href="#">Latin-Jawa</a>
            <a href="#">Jawa-Latin</a>
            <a href="#">Jawa-Kawi</a>
        </div>
    </nav>

    <slot />

    <footer class="text-center">
        <h5>©2021 - <a href="https://adityarahmanda.github.io" class="copyright">Aditya Rahmanda</a></h5>
    </footer>
</main>