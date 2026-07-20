<template>
  <div class="min-h-screen bg-white font-sans overflow-x-hidden">

    <NavNonVie />

    <!-- ═══ SECTION 1 : HERO ═══ -->
    <section class="bg-white relative overflow-hidden pb-12">

      <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <img src="/images/logo-nsia.png" alt="" class="w-[80%] md:w-[55%] object-contain opacity-[0.04]" />
      </div>

      <div class="w-full overflow-hidden bg-gray-100">
        <img
          src="/images/Cover page Non Vie.png"
          alt="NSIA Assurances – Protégez tout ce qui compte"
          class="w-full h-auto object-cover"
          loading="eager"
        />
      </div>

      <div class="px-5 pt-10 md:px-10 relative z-10">
        <h1 data-reveal="up"
            class="text-[#1c2445] font-black uppercase leading-tight mb-4 md:whitespace-nowrap"
            style="font-size: clamp(1.4rem, 2.6vw, 2.2rem);">
          PROTEGEZ TOUT CE QUI <span style="color: #C89B2C;">COMPTE.</span>
        </h1>

        <p data-reveal="up"
           class="text-[#1c2445] leading-relaxed mb-8 max-w-2xl"
           style="font-size: clamp(0.95rem, 1.4vw, 1.1rem); --reveal-delay: 100ms;">
          Votre voiture, votre maison, votre entreprise, vos voyages… NSIA Assurances Gabon vous
          accompagne avec des garanties simples, utiles et pensées pour votre tranquillité.
        </p>

        <a href="https://eur05.safelinks.protection.outlook.com/?url=https%3A%2F%2Fforms.office.com%2FPages%2FResponsePage.aspx%3Fid%3D0pJwRgt54U2bPjizhOsqIaiEtWUpoLBEmGw3567pJgdUQjFEVDhaU0k4V1YxN0RDRlVLQVJTM1NMUi4u&data=05%7C02%7Cjeremie.mboma%40nsiaassurances.com%7Cd2e9bb1b3e964e3be7c108dee6312595%7C467092d2790b4de19b3e38b384eb2a21%7C1%7C0%7C639201296027618886%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=A7Bsl4GInZyA%2BWdqrDjPowcfMhljwEs3eDQY4RRn6u8%3D&reserved=0"
            target="_blank"
            rel="noopener noreferrer"
            data-reveal="scale"
            class="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl cursor-pointer text-[#1c2445]
                   bg-gradient-to-b from-[#eef2fa] to-[#cfd9ef] border border-white shadow-md
                   hover:-translate-y-0.5"
            style="--reveal-delay: 240ms;">
         
          Souscrire maintenant
         </a>
      </div>
    </section>

    <!-- ═══ SECTION 2 : NOS OFFRES NON VIE ═══ -->
    <section class="px-5 py-12 md:px-10 lg:px-16 bg-white">

      <p data-reveal="up"
         class="font-bold uppercase mb-2"
         style="color: #C89B2C; font-size: 0.8rem; letter-spacing: 0.1em;">
        NOS OFFRES
      </p>

      <h2 data-reveal="up"
          class="text-[#1c2445] font-black leading-tight mb-4"
          style="font-size: clamp(1.5rem, 2.8vw, 2.2rem); --reveal-delay: 80ms;">
        Une protection pour chaque moment de votre vie
      </h2>

      <p data-reveal="up"
         class="text-[#1c2445] mb-8 max-w-2xl"
         style="font-size: clamp(0.9rem, 1.3vw, 1rem); --reveal-delay: 160ms; text-align: justify;">
        Choisissez l'assurance qui vous correspond. Souscription simple, garanties
        claires, et un accompagnement à chaque étape.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <OffreCard
          v-for="offre in offres"
          :key="offre.label"
          :icon="offre.icon"
          :label="offre.label"
          :titre="offre.titre"
          :description="offre.description"
          :delay="offre.delay"
        />
      </div>
    </section>

    <!-- ═══ SECTION 3 : POURQUOI NSIA ? ═══ -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-5 py-10 md:py-14 md:px-10 lg:px-20 bg-white items-center">

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

        <ul data-stagger class="space-y-4 mb-10">
          <li v-for="point in pointsForts" :key="point"
              class="flex items-center gap-3 text-[#1c2445]"
              style="font-size: clamp(0.9rem, 1.3vw, 1rem);">
            <svg class="w-4 h-4 flex-shrink-0" style="color:#C89B2C;" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 2l10 6-10 6V2z"/>
            </svg>
            {{ point }}
          </li>
        </ul>

        <div data-reveal="up">
          <h3 class="text-[#1c2445] font-black mb-5 md:whitespace-nowrap" style="font-size: clamp(1.2rem, 1.8vw, 1.4rem);">
            Prêt à être <span style="color: #C89B2C;">protégé&nbsp;?</span>
          </h3>
          <a href="https://eur05.safelinks.protection.outlook.com/?url=https%3A%2F%2Fforms.office.com%2FPages%2FResponsePage.aspx%3Fid%3D0pJwRgt54U2bPjizhOsqIaiEtWUpoLBEmGw3567pJgdUQjFEVDhaU0k4V1YxN0RDRlVLQVJTM1NMUi4u&data=05%7C02%7Cjeremie.mboma%40nsiaassurances.com%7Cd2e9bb1b3e964e3be7c108dee6312595%7C467092d2790b4de19b3e38b384eb2a21%7C1%7C0%7C639201296027618886%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=A7Bsl4GInZyA%2BWdqrDjPowcfMhljwEs3eDQY4RRn6u8%3D&reserved=0"
             class="flex sm:inline-flex items-center justify-center font-bold px-6 py-3 text-white transition-opacity hover:opacity-90"
             style="background-color: #1c2445; border-radius: 8px;">
            Envoyer ma demande
          </a>
        </div>
      </div>

      <div data-reveal="right" class="flex justify-center mt-8 md:mt-0">
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

    <NavFooter />

  </div>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
import NavNonVie  from '../components/NavNonVie.vue'
import NavFooter   from '../components/NavFooter.vue'
import OffreCard   from '../components/OffreCard.vue'

useReveal()

const offres = [
  {
    icon:        '/images/Auto.svg',
    label:       'AUTO',
    titre:       "Roulez l'esprit tranquille.",
    description: "Assurez votre véhicule contre les imprévus de la route et bénéficiez d'un accompagnement adapté en cas de besoin.",
    delay: 0,
  },
  {
    icon:        '/images/Voyage.svg',
    label:       'VOYAGE',
    titre:       'Partez sereinement, où que vous alliez.',
    description: "Profitez d'une couverture adaptée face aux imprévus de santé, d'assistance ou d'urgence lors de vos déplacements.",
    delay: 80,
  },
  {
    icon:        '/images/MULTIRISQUE HABITATION.svg',
    label:       'MULTIRISQUE HABITATION',
    titre:       "Votre maison mérite d'être protégée.",
    description: "Couvrez votre logement et vos biens contre les principaux risques du quotidien : incendie, dégâts des eaux, vol et autres sinistres.",
    delay: 160,
  },
  {
    icon:        '/images/INDIVIDUELLE ACCIDENT.svg',
    label:       'INDIVIDUELLE ACCIDENT',
    titre:       'Un accident ne prévient pas. Anticipez.',
    description: "Protégez-vous ainsi que vos proches avec une indemnisation prévue en cas d'accident.",
    delay: 240,
  },
  {
    icon:        '/images/MULTIRISQUE PROFESSIONNELLE.svg',
    label:       'MULTIRISQUE PROFESSIONNELLE',
    titre:       'Sécurisez votre activité professionnelle.',
    description: "Protégez votre entreprise, vos biens, vos responsabilités et votre continuité d'activité face aux imprévus.",
    delay: 320,
  },
  {
    icon:        '/images/RC CHEF DE FAMILLE.svg',
    label:       'RC CHEF DE FAMILLE',
    titre:       'Un incident du quotidien peut coûter cher.',
    description: "Protégez votre responsabilité et celle de votre foyer en cas de dommage causé à un tiers.",
    delay: 400,
  },
]

const pointsForts = [
  'Souscription en ligne',
  'Réseau de proximité',
  'Garanties claires',
  'Indemnisation rapide',
]
</script>
