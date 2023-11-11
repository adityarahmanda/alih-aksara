<script lang="ts">
import { ConverterMethod } from "$lib/scripts/global";
import SvelteSeo from "svelte-seo";
import Converter from "$lib/components/Converter.svelte";
</script>
    
<SvelteSeo
  title="Alih Aksara | Latin-Jawa"
  description="Alat transliterasi sederhana untuk membantu kalian untuk mengalihkan/mengubah/mengkonversi teks aksara Latin menjadi aksara Jawa."
  canonical="https://adityarahmanda.github.io/alih-aksara/latin-jawa"
  keywords="alat, transliterasi, konversi, alih, aksara, jawa, latin"
/>

<Converter method = { ConverterMethod.LatinToJava } />