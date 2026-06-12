<template>
  <div class="min-h-screen bg-white font-sans overflow-x-hidden">

    <!-- ═══ HEADER (sticky) ═══ -->
    <header class="bg-white/95 backdrop-blur border-b border-gray-100 sticky top-0 z-50">
      <div class="flex items-center justify-between px-5 py-3 md:px-10">

        <!-- Logo NSIA Kinda -->
        <RouterLink to="/" class="shrink-0">
          <img
            src="/images/nsia-kinda-logo.png"
            alt="NSIA Kinda – Retour à l'accueil"
            class="h-12 md:h-16 w-auto object-contain"
            loading="eager"
          />
        </RouterLink>

        <!-- Politique de confidentialité + menu -->
        <div class="flex items-center gap-3">
          <!-- Hamburger -->
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
            class="absolute right-5 top-[70px] md:right-10 md:top-[82px] w-64 z-50 shadow-2xl rounded-md overflow-hidden"
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

        <!-- Overlay fermeture -->
        <div v-if="menuOpen" class="fixed inset-0 z-40" @click="menuOpen = false"></div>
      </div>
    </header>

    <!-- ═══ SECTION 1 : HERO ═══ -->
    <section class="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[640px]"
             style="background: radial-gradient(900px 420px at 90% -10%, #eef3fb 0%, transparent 60%);">

      <!-- Gauche : image principale -->
      <div data-reveal="left" class="relative h-[58vw] lg:h-auto min-h-[340px] overflow-hidden rounded-2xl">
        <img
          src="/images/magnific.PNG"
          alt="NSIA Kinda – tu glisses mais tu ne tombes pas"
          class="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      <!-- Droite : contenu (centré verticalement) -->
      <div class="flex flex-col justify-center px-7 py-12 md:px-12 lg:px-14 xl:px-20 bg-white relative overflow-hidden">

        <!-- Filigrane de marque -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <img src="/images/kinda-icon1.svg" alt="" class="w-[88%] object-contain opacity-[0.04]" />
        </div>

        <!-- Titre + texte + CTA -->
        <div class="relative z-10">
          <h1 data-reveal="up" class="text-[#1c2445] font-black uppercase leading-tight mb-6"
              style="font-size: clamp(1.6rem, 2.8vw, 2.6rem);">
            Avec NSIA Kinda,<br />
            tu glisses mais tu ne tombes pas
          </h1>

          <p data-reveal="up" class="text-[#1c2445] leading-relaxed mb-8"
             style="font-size: clamp(0.95rem, 1.4vw, 1.15rem); --reveal-delay: 120ms;">
            Pour seulement <strong>15&nbsp;000&nbsp;FCFA par an</strong>, épargne pour tes
            projets, protège-toi et soigne-toi. NSIA KINDA, c'est fait pour toi&nbsp;!
          </p>

          <button
            data-reveal="scale"
            class="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl cursor-pointer text-[#1c2445]
                   bg-gradient-to-b from-[#eef2fa] to-[#cfd9ef] border border-white shadow-md
                   hover:-translate-y-0.5"
            style="--reveal-delay: 240ms;"
            @click="scrollToSubscribe"
          >
            Je souscris
            <svg class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19.5 11L12.5 13.5L9.5 21L5 3Z" fill="#1c2445" stroke="#1c2445" stroke-width="0.5" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <!-- 3 petites photos carrées avec bordure or (stagger) -->
        <div data-stagger class="grid grid-cols-3 gap-3 mt-10 relative z-10">
          <div class="aspect-square overflow-hidden rounded-md" style="border: 3px solid #C89B2C;">
            <img src="/images/pic-2.png" alt="Couple – épargne et projets" class="w-full h-full object-cover" loading="lazy" />
          </div>
          <div class="aspect-square overflow-hidden rounded-md" style="border: 3px solid #C89B2C;">
            <img src="/images/Image-28.png" alt="Entrepreneur – protection financière" class="w-full h-full object-cover" loading="lazy" />
          </div>
          <div class="aspect-square overflow-hidden rounded-md" style="border: 3px solid #C89B2C;">
            <img src="/images/Image-27.png" alt="Famille – garantie vie" class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ SECTION 2 : BÉNÉFICES ═══ -->
    <section class="grid grid-cols-1 lg:grid-cols-2" style="background-color:#f6f8fc;">

      <!-- Gauche : texte + argument + icônes + garanties -->
      <div class="px-7 py-14 md:px-12 lg:px-14 xl:px-20 flex flex-col justify-center">

        <h2 data-reveal="up" class="text-[#1c2445] font-black uppercase mb-5"
            style="font-size: clamp(1.4rem, 2.2vw, 2rem);">
          Tu côtises, tu récupères
        </h2>

        <p data-reveal="up" class="text-[#54607a] leading-relaxed mb-6"
           style="font-size: clamp(0.92rem, 1.3vw, 1.1rem); --reveal-delay: 100ms;">
          Tu souhaites créer un business&nbsp;? Payer une formation&nbsp;? Ou juste souffler&nbsp;?
          Peu importe ton projet, NSIA Kinda te propose une petite épargne que tu récupères
          au bout de 12&nbsp;mois. En plus, tu assures ta protection contre les imprévus de la vie.
        </p>

        <!-- Argument-clé -->
        <div data-reveal="left" class="bg-white rounded-r-xl border-l-4 px-5 py-4 mb-7 shadow-sm"
             style="border-color:#C89B2C; --reveal-delay: 180ms;">
          <p class="italic text-[#1c2445] mb-3" style="font-size: clamp(0.9rem,1.25vw,1.05rem);">
            «&nbsp;Pourquoi payer plusieurs assurances quand une seule suffit pour une protection
            complète contre les imprévus de la vie&nbsp;?&nbsp;»
          </p>
          <p class="text-[#54607a]" style="font-size: clamp(0.88rem,1.2vw,1rem);">
            NSIA KINDA réunit toutes les couvertures indispensables en un pack unique à seulement
            <strong>15&nbsp;000&nbsp;FCFA par an</strong>.
            <strong>Plus simple, plus malin, plus économique&nbsp;!</strong>
          </p>
        </div>

        <!-- Encadré icônes (stagger) -->
        <div data-stagger class="flex items-center justify-around gap-4 rounded-xl px-6 py-5 mb-8 border"
             style="background-color: #faf3df; border-color:#EDD9A3;">
          <img src="/images/kinda-icon1.svg" alt="Épargne & croissance" class="w-14 h-14 md:w-16 md:h-16 object-contain" />
          <img src="/images/kinda-icon2.svg" alt="Protection & personnes" class="w-14 h-14 md:w-16 md:h-16 object-contain" />
          <img src="/images/kinda-icon3.svg" alt="Garantie & bouclier" class="w-14 h-14 md:w-16 md:h-16 object-contain" />
        </div>

        <!-- Garanties -->
        <h3 data-reveal="up" class="text-[#1c2445] font-black uppercase mb-5"
            style="font-size: clamp(1.1rem, 1.8vw, 1.5rem); --reveal-delay: 80ms;">
          Tes garanties, claires et nettes
        </h3>

        <ul data-stagger class="space-y-4">
          <li class="flex items-start gap-3 text-[#1c2445]" style="font-size: clamp(0.9rem, 1.3vw, 1.05rem);">
            <svg class="mt-1 w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#C89B2C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 6"/></svg>
            Tu reçois un montant d'épargne au bout d'un an.
          </li>
          <li class="flex items-start gap-3 text-[#1c2445]" style="font-size: clamp(0.9rem, 1.3vw, 1.05rem);">
            <svg class="mt-1 w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#C89B2C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 6"/></svg>
            <span>Tes soins sont pris en charge <strong>jusqu'à 200&nbsp;000&nbsp;FCFA</strong> suite à un accident du quotidien.</span>
          </li>
          <li class="flex items-start gap-3 text-[#1c2445]" style="font-size: clamp(0.9rem, 1.3vw, 1.05rem);">
            <svg class="mt-1 w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#C89B2C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 6"/></svg>
            <span>Tu garantis à ta famille un montant de <strong>250&nbsp;000&nbsp;FCFA</strong> en cas de coup dur.</span>
          </li>
        </ul>
      </div>

      <!-- Droite : photo famille -->
      <div data-reveal="right" class="relative min-h-[300px] lg:min-h-[480px] overflow-hidden rounded-2xl">
        <img src="/public/images/pic-5.jpg" alt="Famille protégée par NSIA Kinda" class="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
      </div>
    </section>

    <!-- ═══ SECTION 3 : SOUSCRIRE ═══ -->
    <section ref="subscribeSection" class="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[640px]">

      <!-- Gauche : photo femme (visible desktop uniquement) -->
      <div data-reveal="left" class="hidden lg:block lg:h-auto lg:min-h-[500px] overflow-hidden">
        <img src="/images/pic-6.jpg" alt="Souscrire à NSIA Kinda aujourd'hui" class="w-full h-full object-cover object-top" loading="lazy" />
      </div>

      <!-- Droite : étapes + CTA -->
      <div class="reveal px-7 py-10 md:px-10 lg:px-12 xl:px-16 flex flex-col justify-center bg-white relative overflow-hidden">

        <!-- Filigrane fantôme de pic-6 -->
        <div class="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <img src="/images/pic-6.jpg" alt="" class="w-full h-full object-cover object-top opacity-10" />
        </div>

        <!-- Titre -->
        <h2 data-reveal="up" class="text-[#1c2445] font-black uppercase text-center mb-8 relative z-10"
            style="font-size: clamp(1.3rem, 2vw, 1.9rem);">
          Souscris dès aujourd'hui&nbsp;!
        </h2>

        <!-- Mobile : Vector 2 pleine largeur, stickman caché -->
        <!-- Desktop : côte à côte pieds alignés -->
        <div data-reveal="up" class="flex flex-col sm:flex-row sm:items-end sm:gap-3 mb-6 relative z-10"
             style="--reveal-delay: 100ms;">
          <img
            src="/images/Vector%202.png"
            alt="Étapes de souscription NSIA Kinda"
            class="w-full sm:flex-1 sm:min-w-0 h-auto"
            loading="lazy"
          />
          <img
            src="/images/vector%201.png"
            alt="Assuré NSIA Kinda"
            class="hidden sm:block sm:flex-shrink-0 h-auto"
            style="width: 28%;"
            loading="lazy"
          />
        </div>

        <!-- Prix -->
        <p data-reveal="up" class="text-[#1c2445] font-bold text-center mb-6 relative z-10"
           style="font-size: clamp(1.1rem, 1.8vw, 1.5rem); --reveal-delay: 200ms;">
          Au tarif unique de&nbsp;
          <span class="text-white font-black px-3 py-1 mx-0.5 inline-block"
                style="background-color: #C89B2C;">
            15&nbsp;000&nbsp;FCFA&nbsp;!
          </span>
        </p>

        <!-- Bouton CTA -->
        <div data-reveal="scale" class="relative z-10 mb-2" style="--reveal-delay: 300ms;">
          <a
            href="https://eur05.safelinks.protection.outlook.com/?url=https%3A%2F%2Fforms.office.com%2FPages%2FResponsePage.aspx%3Fid%3D0pJwRgt54U2bPjizhOsqIaiEtWUpoLBEmGw3567pJgdUMjBNT0FWVUxRNlhPVE9VWlMyNEZDMVRaVC4u&data=05%7C02%7Cjeremie.mboma%40nsiaassurances.com%7Ce8d437cf82bd4381b30a08dec7113b7b%7C467092d2790b4de19b3e38b384eb2a21%7C1%7C0%7C639167074330795549%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=IIaOh9KkJUhm02qr3OkHPr02LUnc5KfdfUyMOQrR55w%3D&reserved=0"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full flex items-center justify-center text-white font-bold py-4 text-base md:text-lg
                   transition-opacity duration-200 hover:opacity-90"
            style="background: linear-gradient(135deg, #1c2445 0%, #2e3a6e 100%); border-radius: 12px;"
          >
            Je souscris maintenant
          </a>
          <div class="flex justify-center mt-1.5">
          </div>
        </div>

        <!-- Lien politique -->
        <RouterLink
          to="/en-creation"
          class="relative z-10 text-center text-sm underline underline-offset-2 hover:opacity-70 transition-opacity"
          style="color: #54607a;"
        >
          Consulter notre Politique de confidentialité
        </RouterLink>
      </div>
    </section>

    <!-- ═══ FOOTER ═══ -->
    <footer style="background-color: #1c2445;">
      <div style="height:6px;background-color:#C89B2C;"></div>
      <div class="py-4 text-center">
        <p class="text-white text-xs md:text-sm px-4">
          Politique de confidentialité&nbsp;&nbsp;|&nbsp;&nbsp;Mentions légales&nbsp;&nbsp;|&nbsp;&nbsp;Liens utiles&nbsp;&nbsp;|&nbsp;&nbsp;Contacts NSIA
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

const menuOpen   = ref(false)
const subscribeSection = ref(null)

function scrollToSubscribe () {
  subscribeSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>
