<script lang="ts">
import { ConverterMethod } from "$lib/scripts/global";
import SvelteSeo from "svelte-seo";
import Converter from "$lib/components/Converter.svelte";
</script>
    
<SvelteSeo
    title="Alih Aksara | Latin-Kawi"
    description="Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Latin menjadi aksara Kawi."
    canonical="https://adityarahmanda.github.io/alih-aksara/latin-kawi"
    keywords="alat, transliterasi, konversi, alih, aksara, kawi, latin"
    openGraph={{
        title: "Alih Aksara | Latin-Kawi",
        description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Latin menjadi aksara Kawi.",
        url: "https://adityarahmanda.github.io/alih-aksara/latin-kawi",
        type: "website",
        images: [{
            url: "https://adityarahmanda.github.io/alih-aksara/alih-aksara-screenshot.png",
          },],
        site_name: "Alih Aksara",
      }}
      twitter={{
        card: "summary_large_image",
        title: "Alih Aksara | Latin-Kawi",
        description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Latin menjadi aksara Kawi.",
        image: "https://adityarahmanda.github.io/alih-aksara/alih-aksara-screenshot.png",
      }}
/>
    
<Converter method = { ConverterMethod.LatinToKawi } />