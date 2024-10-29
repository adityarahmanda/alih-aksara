<script lang="ts">
import { ConverterMethod } from "$lib/scripts/global";
import SvelteSeo from "svelte-seo";
import Converter from "$lib/components/Converter.svelte";
</script>
        
<SvelteSeo
    title="Alih Aksara | Jawa-Latin"
    description="Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Jawa menjadi aksara Latin."
    canonical="https://adityarahmanda.github.io/alih-aksara/jawa-latin"
    keywords="alat, transliterasi, konversi, alih, aksara, jawa, latin"
    openGraph={{
        title: "Alih Aksara | Jawa-Latin",
        description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Jawa menjadi aksara Latin.",
        url: "https://adityarahmanda.github.io/alih-aksara/jawa-latin",
        type: "website",
        images: [{
            url: "https://adityarahmanda.github.io/alih-aksara/screenshot.png",
          },],
        site_name: "Alih Aksara",
      }}
      twitter={{
        card: "summary_large_image",
        title: "Alih Aksara | Jawa-Latin",
        description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Jawa menjadi aksara Latin.",
        image: "https://adityarahmanda.github.io/alih-aksara/screenshot.png",
      }}
/>
    
<Converter method = { ConverterMethod.JavaToLatin } />