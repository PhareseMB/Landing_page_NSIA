<template>
  <section class="bg-navy w-full">
    <div class="px-6 pt-6 pb-10 md:px-10 lg:px-16 xl:px-24 md:pt-10 md:pb-14">

      <!-- Texte descriptif -->
      <p class="text-white font-normal leading-relaxed
                 text-base md:text-lg lg:text-xl
                 max-w-xs md:max-w-2xl lg:max-w-3xl">
        Auto , Habitation, voyage, épargne, retraite, prévoyance&nbsp;:
        Remplissez le formulaire et un conseiller vous rappelle.
      </p>

      <!-- Flèche + Bouton décalés vers le centre -->
      <div class="flex items-end gap-3 mt-4 md:gap-5 md:mt-6 ml-[20%] md:ml-[30%]">

        <!-- Flèche courbe décorative -->
        <span class="flex-shrink-0 self-end mb-1">
          <svg
            viewBox="0 0 54 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="w-10 h-9 md:w-14 md:h-11"
          >
            <path
              d="M4 6 C6 18, 20 32, 36 34"
              stroke="white"
              stroke-width="2.2"
              stroke-linecap="round"
              fill="none"
            />
            <path
              d="M30 28 L36 34 L26 37"
              stroke="white"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
          </svg>
        </span>

        <!-- Bouton CTA -->
        <RouterLink
          to="/en-creation"
          class="flex-shrink-0 bg-gold text-white font-semibold
                 px-6 py-3 md:px-8 md:py-4
                 text-sm md:text-base
                 transition-all duration-300
                 hover:bg-gold-light hover:scale-[1.03]
                 active:scale-[0.97]
                 whitespace-nowrap"
          style="border-radius: 10px;"
        >
          Je remplis le formulaire
        </RouterLink>

      </div>

    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
