<script lang="ts">
import { ConverterMethod } from "$lib/scripts/global";
import SvelteSeo from "svelte-seo";
import Converter from "$lib/components/Converter.svelte";
</script>
    
<SvelteSeo
    title="Alih Aksara | Latin-Jawa"
    description="Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Latin menjadi aksara Jawa."
    canonical="https://adityarahmanda.github.io/alih-aksara/latin-jawa"
    keywords="alat, transliterasi, konversi, alih, aksara, jawa, latin"
    openGraph={{
        title: "Alih Aksara | Latin-Jawa",
        description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Latin menjadi aksara Jawa.",
        url: "https://adityarahmanda.github.io/alih-aksara/latin-jawa",
        type: "website",
        images: [{
            url: "https://adityarahmanda.github.io/alih-aksara/screenshot.png",
        },],
        site_name: "Alih Aksara",
    }}
    twitter={{
        card: "summary_large_image",
        title: "Alih Aksara | Latin-Jawa",
        description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Latin menjadi aksara Jawa.",
        image: "https://adityarahmanda.github.io/alih-aksara/screenshot.png",
    }}
/>

<Converter method = { ConverterMethod.LatinToJava } />