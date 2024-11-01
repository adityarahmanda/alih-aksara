<script lang="ts">
import '$lib/css/chota.min.css';
import '$lib/css/style.css';
import SvelteSeo from "svelte-seo";
import { base } from '$app/paths';
import WidgetFeedback from '$lib/components/WidgetFeedback.svelte';
import WidgetRecomendation from '$lib/components/WidgetRecomendation.svelte';
</script>

<SvelteSeo
  title="Alih Aksara"
  description="Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Jawa ke bentuk aksara lain ataupun sebaliknya."
  canonical="https://adityarahmanda.github.io/alih-aksara"
  keywords="alat, transliterasi, konversi, alih, aksara, jawa, latin, kawi"
  openGraph={{
    title: "Alih Aksara",
    description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Jawa ke bentuk aksara lain ataupun sebaliknya.",
    url: "https://adityarahmanda.github.io/alih-aksara",
    type: "website",
    images: [{
        url: "https://adityarahmanda.github.io/alih-aksara/screenshot.png",
      },],
    site_name: "Alih Aksara",
  }}
  twitter={{
    card: "summary_large_image",
    title: "Alih Aksara",
    description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Jawa ke bentuk aksara lain ataupun sebaliknya.",
    image: "https://adityarahmanda.github.io/alih-aksara/screenshot.png",
  }}
/>

<section>
  
  <div class="row hero is-vertical-align">
    <div class="col">
      <p>Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Jawa ke bentuk aksara lain ataupun sebaliknya.</p>
      <a href="{ base }/latin-jawa" class="button primary">Coba Sekarang</a>
    </div>
    <div class="col illustration-image">
      <picture>
        <source type="image/webp" media="(min-width:900px)" width="420" srcset="{ base }/illustration.webp">
        <source type="image/webp" width="360" srcset="{ base }/illustration.webp">
        <img src="{ base }/illustration.png"  alt="Illustration">
      </picture>
    </div>
  </div>

  <div class="row">
    <div class="col-8">
      <h4>Sekilas Tentang alih aksara</h4>
      <p>Bisa dibilang proyek <strong>alih aksara</strong> ini hanyalah sebuah keisengan. Iseng karena ini memang bukan proyek serius apalagi resmi, sekadar proyek pribadi suka-suka yang saya manfaatkan untuk lebih dalam mempelajari aksara Jawa ataupun ilmu pemrograman web itu sendiri.</p> 
      <p>Oleh karena itu, saya yang masih awam ini dengan tangan terbuka menerima segala umpan balik untuk mengembangkan website ini menjadi lebih baik.</p>
    </div>
    <div class="col">
      <WidgetRecomendation style="margin-bottom: 2em" />
      <WidgetFeedback  />
    </div>
  </div>

</section>