<template>
  <div class="min-h-screen bg-navy flex flex-col font-sans overflow-x-hidden">

    <!-- Header minimal -->
    <header class="w-full bg-navy">
      <div class="flex items-center justify-between px-6 py-4 md:px-10 lg:px-14 xl:px-20">
        <RouterLink to="/">
          <img
            src="/images/ logo-nsia.png"
            alt="NSIA Assurances – Retour à l'accueil"
            class="h-16 md:h-20 lg:h-24 w-auto object-contain"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </RouterLink>
      </div>
    </header>

    <!-- Contenu principal -->
    <main class="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">

      <!-- Image construction -->
      <div class="mb-10">
        <img
          src="/images/construction.png"
          alt="Page en construction"
          class="w-32 h-32 mx-auto object-contain"
          loading="lazy"
          decoding="async"
          width="128"
          height="128"
        />
      </div>

      <!-- Titre -->
      <h1 class="text-white font-bold text-3xl md:text-5xl leading-tight mb-4">
        Page en cours<br />
        <span style="color: #C5962B;">de création</span>
      </h1>

      <!-- Ligne décorative -->
      <div class="mx-auto mb-8" style="width: 60px; height: 5px; background-color: #C5962B; border-radius: 2px;"></div>

      <!-- Message -->
      <p class="text-white/70 text-base md:text-lg max-w-md leading-relaxed mb-12">
        Cette page est actuellement en cours de développement.<br />
        Revenez très bientôt pour découvrir notre contenu.
      </p>

      <!-- Bouton retour accueil -->
      <RouterLink
        to="/"
        class="inline-flex items-center gap-3 text-white font-semibold
               px-8 py-4 transition-all duration-300
               hover:opacity-80 hover:scale-[1.03] active:scale-[0.97]"
        style="background-color: #C5962B; border-radius: 10px;"
      >
        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M16 10 H4 M9 5 L4 10 L9 15" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Retour à l'accueil
      </RouterLink>

    </main>

    <!-- Footer -->
    <footer class="w-full bg-navy border-t border-white/10">
      <div class="flex flex-row items-center justify-between px-6 py-5 md:px-10 lg:px-16 xl:px-20">
        <img src="/images/bureau-veritas.png" alt="Bureau Veritas – ISO 9001"
             class="h-10 md:h-12 w-auto object-contain" loading="lazy" decoding="async" width="160" height="48" />
        <img src="/images/nsia-white.png" alt="" aria-hidden="true"
             class="h-5 md:h-6 w-auto object-contain opacity-90" loading="lazy" decoding="async" width="80" height="24" />
      </div>
    </footer>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
