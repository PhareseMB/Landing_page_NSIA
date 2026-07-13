<template>
  <div class="min-h-screen bg-white font-sans overflow-x-hidden">

    <!-- ═══ HEADER (sticky) ═══ -->
    <header class="bg-white/95 backdrop-blur border-b border-gray-100 sticky top-0 z-50">
      <div class="flex items-center justify-between px-5 py-3 md:px-10 relative">

        <!-- Logo NSIA Assurances -->
        <RouterLink to="/" class="shrink-0">
          <img
            src="/images/Logo Non Vie.png"
            alt="NSIA Assurances – Retour à l'accueil"
            class="h-10 md:h-14 w-auto object-contain"
            loading="eager"
          />
        </RouterLink>

        <!-- Hamburger -->
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

        <!-- Menu déroulant -->
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
                  to="/politique-confidentialite"
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

    <!-- ═══ SECTION 1 : HERO ═══ -->
    <section class="bg-white relative overflow-hidden pb-12">

      <!-- Filigrane logo en arrière-plan -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <img src="/images/logo-nsia.png" alt="" class="w-[80%] md:w-[55%] object-contain opacity-[0.04]" />
      </div>

      <!-- ════ IMAGE HERO — pleine largeur ════
           → Remplacer [NOM-IMAGE-HERO] par le nom exact du fichier (ex: hero-iard.jpg) -->
      <div class="w-full overflow-hidden bg-gray-100">
        <img
          src="/images/Cover page Non Vie.png"
          alt="NSIA Assurances – Protégez tout ce qui compte"
          class="w-full h-auto object-cover"
          loading="eager"
        />
      </div>

      <!-- ── Contenu texte ── -->
      <div class="px-5 pt-10 md:px-10 relative z-10">
        <h1 data-reveal="up"
            class="text-[#1c2445] font-black uppercase leading-tight mb-4"
            style="font-size: clamp(1.6rem, 3vw, 2.8rem);">
          PROTEGEZ TOUT CE QUI <span style="color: #C89B2C;">COMPTE.</span>
        </h1>

        <p data-reveal="up"
           class="text-[#1c2445] leading-relaxed mb-8 max-w-2xl"
           style="font-size: clamp(0.95rem, 1.4vw, 1.1rem); --reveal-delay: 100ms;">
          Votre voiture, votre maison, votre entreprise, vos voyages… NSIA Assurances Gabon vous
          accompagne avec des garanties simples, utiles et pensées pour votre tranquillité.
        </p>

        <a href="#" data-reveal="scale"
           class="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded border-2 text-[#1c2445] transition-colors hover:bg-[#1c2445] hover:text-white"
           style="border-color: #1c2445; --reveal-delay: 200ms;">
          Souscrire maintenant
        </a>
      </div>
    </section>

    <!-- ═══ SECTION 2 : NOS OFFRES NON VIE ═══ -->
    <section class="px-5 py-12 md:px-10 lg:px-16 bg-white">

      <!-- Label + Titre + Sous-titre -->
      <p data-reveal="up"
         class="font-bold uppercase mb-2"
         style="color: #C89B2C; font-size: 0.8rem; letter-spacing: 0.1em;">
        NOS OFFRES NON VIE
      </p>

      <h2 data-reveal="up"
          class="text-[#1c2445] font-black leading-tight mb-4"
          style="font-size: clamp(1.5rem, 2.8vw, 2.2rem); --reveal-delay: 80ms;">
        Une protection pour chaque moment de votre vie
      </h2>

      <p data-reveal="up"
         class="text-[#1c2445] mb-8"
         style="font-size: clamp(0.9rem, 1.3vw, 1rem); --reveal-delay: 160ms; text-align: justify;">
        Choisissez l'assurance qui vous correspond. Souscription simple, garanties
        claires, et un accompagnement à chaque étape.
      </p>

      <!-- Grille 6 offres — 3 colonnes desktop / 2 colonnes mobile -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

        <!-- ──────── CARTE 1 : AUTO ──────── -->
        <div data-reveal="up" class="flex flex-col gap-3 rounded-lg p-4 md:p-5" style="background-color: #f4f2ea; --reveal-delay: 0ms;">
          <div class="flex items-center gap-2">
            <img src="/images/Auto.svg" alt="" class="w-20 h-20 md:w-24 md:h-24 object-contain flex-shrink-0" />
            <span class="font-black uppercase text-xs md:text-sm" style="color:#C89B2C; letter-spacing: 0.05em;">AUTO</span>
          </div>
          <h3 class="text-[#1c2445] font-black leading-snug" style="font-size: clamp(0.9rem, 1.3vw, 1.05rem);">
            Roulez l'esprit tranquille.
          </h3>
          <p class="text-[#1c2445]" style="font-size: clamp(0.78rem, 1.05vw, 0.9rem); text-align: justify;">
            Assurez votre véhicule contre les imprévus de la route et bénéficiez d'un accompagnement adapté en cas de besoin.
          </p>
        </div>

        <!-- ──────── CARTE 2 : VOYAGE ──────── -->
        <div data-reveal="up" class="flex flex-col gap-3 rounded-lg p-4 md:p-5" style="background-color: #f4f2ea; --reveal-delay: 80ms;">
          <div class="flex items-center gap-2">
            <img src="/images/Voyage.svg" alt="" class="w-20 h-20 md:w-24 md:h-24 object-contain flex-shrink-0" />
            <span class="font-black uppercase text-xs md:text-sm" style="color:#C89B2C; letter-spacing: 0.05em;">VOYAGE</span>
          </div>
          <h3 class="text-[#1c2445] font-black leading-snug" style="font-size: clamp(0.9rem, 1.3vw, 1.05rem);">
            Partez sereinement, où que vous alliez.
          </h3>
          <p class="text-[#1c2445]" style="font-size: clamp(0.78rem, 1.05vw, 0.9rem); text-align: justify;">
            Profitez d'une couverture adaptée face aux imprévus de santé, d'assistance ou d'urgence lors de vos déplacements.
          </p>
        </div>

        <!-- ──────── CARTE 3 : MULTIRISQUE HABITATION ──────── -->
        <div data-reveal="up" class="flex flex-col gap-3 rounded-lg p-4 md:p-5" style="background-color: #f4f2ea; --reveal-delay: 160ms;">
          <div class="flex items-center gap-2">
            <img src="/images/MULTIRISQUE HABITATION.svg" alt="" class="w-20 h-20 md:w-24 md:h-24 object-contain flex-shrink-0" />
            <span class="font-black uppercase text-xs md:text-sm" style="color:#C89B2C; letter-spacing: 0.05em;">MULTIRISQUE HABITATION</span>
          </div>
          <h3 class="text-[#1c2445] font-black leading-snug" style="font-size: clamp(0.9rem, 1.3vw, 1.05rem);">
            Votre maison mérite d'être protégée.
          </h3>
          <p class="text-[#1c2445]" style="font-size: clamp(0.78rem, 1.05vw, 0.9rem); text-align: justify;">
            Couvrez votre logement et vos biens contre les principaux risques du quotidien : incendie, dégâts des eaux, vol et autres sinistres.
          </p>
        </div>

        <!-- ──────── CARTE 4 : INDIVIDUELLE ACCIDENT ──────── -->
        <div data-reveal="up" class="flex flex-col gap-3 rounded-lg p-4 md:p-5" style="background-color: #f4f2ea; --reveal-delay: 240ms;">
          <div class="flex items-center gap-2">
            <img src="/images/INDIVIDUELLE ACCIDENT.svg" alt="" class="w-20 h-20 md:w-24 md:h-24 object-contain flex-shrink-0" />
            <span class="font-black uppercase text-xs md:text-sm" style="color:#C89B2C; letter-spacing: 0.05em;">INDIVIDUELLE ACCIDENT</span>
          </div>
          <h3 class="text-[#1c2445] font-black leading-snug" style="font-size: clamp(0.9rem, 1.3vw, 1.05rem);">
            Un accident ne prévient pas. Anticipez.
          </h3>
          <p class="text-[#1c2445]" style="font-size: clamp(0.78rem, 1.05vw, 0.9rem); text-align: justify;">
            Protégez-vous ainsi que vos proches avec une indemnisation prévue en cas d'accident.
          </p>
        </div>

        <!-- ──────── CARTE 5 : MULTIRISQUE PROFESSIONNELLE ──────── -->
        <div data-reveal="up" class="flex flex-col gap-3 rounded-lg p-4 md:p-5" style="background-color: #f4f2ea; --reveal-delay: 320ms;">
          <div class="flex items-center gap-2">
            <img src="/images/MULTIRISQUE PROFESSIONNELLE.svg" alt="" class="w-20 h-20 md:w-24 md:h-24 object-contain flex-shrink-0" />
            <span class="font-black uppercase text-xs md:text-sm" style="color:#C89B2C; letter-spacing: 0.05em;">MULTIRISQUE PROFESSIONNELLE</span>
          </div>
          <h3 class="text-[#1c2445] font-black leading-snug" style="font-size: clamp(0.9rem, 1.3vw, 1.05rem);">
            Sécurisez votre activité professionnelle.
          </h3>
          <p class="text-[#1c2445]" style="font-size: clamp(0.78rem, 1.05vw, 0.9rem); text-align: justify;">
            Protégez votre entreprise, vos biens, vos responsabilités et votre continuité d'activité face aux imprévus.
          </p>
        </div>

        <!-- ──────── CARTE 6 : RC CHEF DE FAMILLE ──────── -->
        <div data-reveal="up" class="flex flex-col gap-3 rounded-lg p-4 md:p-5" style="background-color: #f4f2ea; --reveal-delay: 400ms;">
          <div class="flex items-center gap-2">
            <img src="/images/RC CHEF DE FAMILLE.svg" alt="" class="w-20 h-20 md:w-24 md:h-24 object-contain flex-shrink-0" />
            <span class="font-black uppercase text-xs md:text-sm" style="color:#C89B2C; letter-spacing: 0.05em;">RC CHEF DE FAMILLE</span>
          </div>
          <h3 class="text-[#1c2445] font-black leading-snug" style="font-size: clamp(0.9rem, 1.3vw, 1.05rem);">
            Un incident du quotidien peut coûter cher.
          </h3>
          <p class="text-[#1c2445]" style="font-size: clamp(0.78rem, 1.05vw, 0.9rem); text-align: justify;">
            Protégez votre responsabilité et celle de votre foyer en cas de dommage causé à un tiers.
          </p>
        </div>

      </div>
    </section>

    <!-- ═══ SECTION 3 : POURQUOI NSIA ? ═══ -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 py-14 md:px-10 lg:px-20 bg-white items-center">

      <!-- Gauche : texte + bullet points + CTA -->
      <div class="flex flex-col">

        <p data-reveal="up"
           class="font-bold uppercase mb-3"
           style="color: #C89B2C; font-size: 0.8rem; letter-spacing: 0.1em;">
          POURQUOI NSIA ?
        </p>

        <h2 data-reveal="up"
            class="text-[#1c2445] font-black mb-3"
            style="font-size: clamp(1.4rem, 2.5vw, 2rem); --reveal-delay: 80ms;">
          La sérénité, c'est notre métier
        </h2>

        <p data-reveal="up"
           class="text-[#54607a] mb-8 leading-relaxed"
           style="font-size: clamp(0.9rem, 1.3vw, 1rem); --reveal-delay: 160ms;">
          Un acteur de référence de l'assurance en Afrique, à vos côtés au quotidien.
        </p>

        <!-- Points forts avec triangle doré (identique à la maquette) -->
        <ul data-stagger class="space-y-4 mb-10">
          <li class="flex items-center gap-3 text-[#1c2445]" style="font-size: clamp(0.9rem, 1.3vw, 1rem);">
            <svg class="w-4 h-4 flex-shrink-0" style="color:#C89B2C;" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 2l10 6-10 6V2z"/>
            </svg>
            Souscription en ligne
          </li>
          <li class="flex items-center gap-3 text-[#1c2445]" style="font-size: clamp(0.9rem, 1.3vw, 1rem);">
            <svg class="w-4 h-4 flex-shrink-0" style="color:#C89B2C;" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 2l10 6-10 6V2z"/>
            </svg>
            Réseau de proximité
          </li>
          <li class="flex items-center gap-3 text-[#1c2445]" style="font-size: clamp(0.9rem, 1.3vw, 1rem);">
            <svg class="w-4 h-4 flex-shrink-0" style="color:#C89B2C;" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 2l10 6-10 6V2z"/>
            </svg>
            Garanties claires
          </li>
          <li class="flex items-center gap-3 text-[#1c2445]" style="font-size: clamp(0.9rem, 1.3vw, 1rem);">
            <svg class="w-4 h-4 flex-shrink-0" style="color:#C89B2C;" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 2l10 6-10 6V2z"/>
            </svg>
            Indemnisation rapide
          </li>
        </ul>

        <!-- CTA -->
        <div data-reveal="up">
          <h3 class="text-[#1c2445] font-black mb-5" style="font-size: clamp(1.2rem, 2vw, 1.6rem);">
            Prêt à être <span style="color: #C89B2C;">protégé&nbsp;?</span>
          </h3>
          <a href="#"
             class="inline-flex items-center font-bold px-6 py-3 text-white transition-opacity hover:opacity-90"
             style="background-color: #1c2445; border-radius: 8px;">
            Envoyer ma demande
          </a>
        </div>

      </div>

      <!-- Droite : illustration famille sous parapluie -->
      <div data-reveal="right" class="flex justify-center mt-8 md:mt-0">
        <!-- ════ IMAGE ILLUSTRATION ════ -->
        <div class="w-full max-w-3xl bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center p-6">
          <img
            src="/images/couverture.svg"
            alt="Famille protégée par NSIA"
            class="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>

    </section>

    <!-- ═══ FOOTER ═══ -->
    <footer style="background-color: #1c2445;">
      <div style="height:6px;background-color:#C89B2C;"></div>
      <div class="py-4 text-center">
        <p class="text-white text-xs md:text-sm px-4">
          Politique de confidentialité&nbsp;&nbsp;|&nbsp;&nbsp;Contacts NSIA
        </p>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useReveal } from '../composables/useReveal'

useReveal()

const menuOpen = ref(false)
</script>
