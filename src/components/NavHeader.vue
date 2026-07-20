<template>
  <header class="bg-white/95 backdrop-blur border-b border-gray-100 sticky top-0 z-50">
    <div class="flex items-center justify-between px-5 py-3 md:px-10 relative">

      <RouterLink :to="route.path" class="shrink-0">
        <img
          :src="logoSrc"
          :alt="logoAlt"
          class="h-10 md:h-14 w-auto object-contain"
          loading="eager"
        />
      </RouterLink>

      <div class="flex items-center gap-3">
        <button
          @click="menuOpen = !menuOpen"
          class="flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B2C]"
          :aria-expanded="menuOpen"
          aria-label="Ouvrir le menu"
        >
          <span class="block h-[2.5px] bg-[#1c2445] rounded-full w-6 transition-all duration-300"
                :class="menuOpen ? 'rotate-45 translate-y-[7px]' : ''"></span>
          <span class="block h-[2.5px] bg-[#1c2445] rounded-full w-6 transition-all duration-300"
                :class="menuOpen ? 'opacity-0' : ''"></span>
          <span class="block h-[2.5px] bg-[#1c2445] rounded-full w-4 transition-all duration-300"
                :class="menuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : ''"></span>
        </button>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95 -translate-y-2"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 -translate-y-2"
      >
        <div
          v-if="menuOpen"
          class="absolute right-5 top-[62px] md:right-10 md:top-[74px] w-64 z-50 shadow-2xl rounded-md overflow-hidden"
          style="background-color: rgba(200,155,44,0.95);"
        >
          <ul class="py-2">
            <li>
              <RouterLink
                :to="{ path: policyPath, query: { from: route.path } }"
                class="flex items-center justify-between px-5 py-4 text-white font-medium text-sm hover:bg-white/10 transition-colors"
                @click="menuOpen = false"
              >
                <span>Politique de confidentialité</span>
                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10 H16 M11 5 L16 10 L11 15" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </RouterLink>
            </li>
          </ul>
        </div>
      </Transition>

      <div v-if="menuOpen" class="fixed inset-0 z-40" @click="menuOpen = false"></div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

defineProps({
  logoSrc:    { type: String, required: true },
  logoAlt:    { type: String, default: 'NSIA – Retour à l\'accueil' },
  policyPath: { type: String, default: '/politique-confidentialite' },
})

const route    = useRoute()
const menuOpen = ref(false)
</script>
