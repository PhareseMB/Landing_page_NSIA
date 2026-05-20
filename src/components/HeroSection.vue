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
        class="absolute top-1/2 -translate-y-1/2 left-0 bg-gold px-8 py-7 lg:px-12 lg:py-9 xl:px-14 xl:py-10 hero-overlay"
        style="width: 50%;"
      >
        <h1 class="text-white font-bold leading-tight tracking-tight hero-title"
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
          <span class="block hero-line-1">Votre</span>
          <span class="block text-gold hero-line-2">Sérénité</span>
          <span class="block hero-line-3">commence ici</span>
        </h1>
        <div class="mt-3 w-16 hero-underline" style="height: 5px; background-color: #C5962B; border-radius: 2px;"></div>
      </div>

    </div>

  </section>
</template>

<script setup>
</script>

<style scoped>
/* Bloc doré desktop : glisse depuis la gauche */
.hero-overlay {
  animation: slide-left 0.65s ease-out both;
}

/* Titre desktop : monte en fondu après le bloc */
.hero-title {
  animation: fade-up 0.55s ease-out 0.3s both;
}

/* Lignes mobile : apparaissent en décalé */
.hero-line-1 { animation: fade-up 0.45s ease-out 0.1s both; }
.hero-line-2 { animation: fade-up 0.45s ease-out 0.25s both; }
.hero-line-3 { animation: fade-up 0.45s ease-out 0.4s both; }

/* Trait doré : se déroule depuis la gauche */
.hero-underline {
  transform-origin: left;
  animation: expand-line 0.45s ease-out 0.55s both;
}

@keyframes slide-left {
  from { opacity: 0; clip-path: inset(0 100% 0 0); }
  to   { opacity: 1; clip-path: inset(0 0% 0 0); }
}

@keyframes fade-up {
  from { transform: translateY(18px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

@keyframes expand-line {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
</style>
