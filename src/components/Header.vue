<template>
  <header class="bg-navy w-full relative">
    <div class="flex items-center justify-between px-6 py-4 md:px-10 lg:px-14 xl:px-20">

      <!-- Logo NSIA -->
      <img
        src="/images/ logo-nsia.png"
        alt="NSIA Assurances"
        class="h-16 md:h-20 lg:h-24 w-auto object-contain"
      />

      <!-- Hamburger menu -->
      <div class="relative">
        <button
          class="group flex flex-col justify-center gap-[5px] w-10 h-10 rounded focus:outline-none"
          aria-label="Ouvrir le menu"
          :aria-expanded="menuOpen"
          @click="toggleMenu"
        >
          <span
            class="block h-[2.5px] bg-white rounded-full transition-all duration-300 group-hover:opacity-70"
            :class="menuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'"
          ></span>
          <span
            class="block h-[2.5px] bg-white rounded-full transition-all duration-300 group-hover:opacity-70"
            :class="menuOpen ? 'opacity-0 w-6' : 'w-6'"
          ></span>
          <span
            class="block h-[2.5px] bg-white rounded-full transition-all duration-300 group-hover:opacity-70"
            :class="menuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-4'"
          ></span>
        </button>

        <!-- Menu déroulant flottant -->
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
            class="absolute right-0 top-[calc(100%+10px)] w-64 z-50 shadow-2xl"
            style="background-color: rgba(197, 150, 43, 0.75); border-radius: 4px;"
          >
            <ul class="py-5">
              <li>
                <RouterLink
                  to="/en-creation"
                  class="flex items-center justify-between px-5 py-5 text-white font-medium text-sm
                         hover:bg-white/10 transition-colors duration-200"
                  @click="menuOpen = false"
                >
                  <span>Politique de confidentialité</span>
                  <!-- Flèche droite -->
                  <svg
                    class="w-4 h-4 flex-shrink-0 ml-3"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10 H16 M11 5 L16 10 L11 15"
                      stroke="white"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </RouterLink>
              </li>
            </ul>
          </div>
        </Transition>
      </div>

    </div>

    <!-- Overlay de fermeture (clic extérieur) -->
    <div
      v-if="menuOpen"
      class="fixed inset-0 z-40"
      @click="menuOpen = false"
    ></div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>
