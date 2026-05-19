<template>
  <section class="w-full bg-navy">

    <!-- ===================== DESKTOP HERO ===================== -->
    <div class="relative hidden md:block w-full overflow-hidden">

      <!-- Image LCP — eager + fetchpriority high -->
      <img
        src="/images/hero.jpg"
        alt="Conseillère NSIA Assurances"
        class="w-full object-cover object-center"
        style="height: clamp(380px, 52vw, 640px);"
        loading="eager"
        fetchpriority="high"
        decoding="async"
        width="1600"
        height="832"
      />

      <!-- Overlay jaune positionné centre-gauche -->
      <div
        class="absolute top-1/2 -translate-y-1/2 left-0 bg-gold px-8 py-7 lg:px-12 lg:py-9 xl:px-14 xl:py-10"
        style="width: 50%;"
      >
        <h1 class="text-white font-bold leading-tight tracking-tight"
            style="font-size: clamp(2rem, 4.5vw, 4rem);">
          Votre sérénité<br />commence ici.
        </h1>
      </div>

    </div>

    <!-- ===================== MOBILE HERO ===================== -->
    <div class="md:hidden w-full">

      <!-- Image hero mobile — eager (above fold sur mobile) -->
      <div class="w-full overflow-hidden" style="height: 52vw; min-height: 210px; max-height: 300px;">
        <img
          src="/images/hero-mobile.jpg"
          alt="Conseillère NSIA Assurances"
          class="w-full h-full object-cover object-center"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="768"
          height="400"
        />
      </div>

      <!-- Titre -->
      <div class="px-6 pt-7 pb-2">
        <h1 class="text-white font-bold leading-tight text-4xl tracking-tight">
          Votre<br />
          <span class="text-gold">Sérénité</span><br />
          commence ici
        </h1>
        <div class="mt-3 w-16" style="height: 5px; background-color: #C5962B; border-radius: 2px;"></div>
      </div>

    </div>

  </section>
</template>

<script setup>
</script>
