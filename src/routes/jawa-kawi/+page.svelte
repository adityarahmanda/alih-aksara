<script lang="ts">
import { base } from '$app/paths';
import { ConverterMethod } from "$lib/scripts/global";
import SvelteSeo from "svelte-seo";
import Converter from "$lib/components/Converter.svelte";
</script>
    
<SvelteSeo
    title="Alih Aksara | Jawa-Kawi"
    description="Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Jawa menjadi aksara Kawi."
    canonical="https://adityarahmanda.github.io/alih-aksara/jawa-kawi"
    keywords="alat, transliterasi, konversi, alih, aksara, jawa, kawi"
/>
    
<Converter method = { ConverterMethod.JavaToKawi } />