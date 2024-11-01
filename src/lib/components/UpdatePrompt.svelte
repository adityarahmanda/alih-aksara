<script lang="ts">
    export let needRefresh:boolean = false;
    export let onReload;
</script>

{#if needRefresh }
	<div class="pwa-toast" role="alert">
		<span>Ada update baru nih!</span>
		<button class="button primary" on:click={onReload}>Perbarui</button>
	</div>
{/if}