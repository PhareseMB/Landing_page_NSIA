<template>
  <div class="min-h-screen bg-white font-sans overflow-x-hidden">

    <NavVie />

    <!-- ═══ SECTION 1 : HERO ═══ -->
    <section class="bg-white relative overflow-hidden pb-12">

      <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <img src="/images/Logo Vie.png" alt="" class="w-[80%] md:w-[55%] object-contain opacity-[0.04]" />
      </div>

      <div class="w-full overflow-hidden bg-gray-100">
        <img
          src="/images/Cover page NSIA Vie.png"
          alt="NSIA Vie – Protégez votre avenir et celui de vos proches"
          class="w-full h-auto object-cover"
          loading="eager"
        />
      </div>

      <div class="px-5 pt-10 md:px-10 relative z-10">
        <h1 data-reveal="up"
            class="text-[#1c2445] font-black uppercase leading-tight mb-4 md:whitespace-nowrap"
            style="font-size: clamp(1.4rem, 2.6vw, 2.2rem);">
          CONSTRUISEZ VOTRE <span style="color: #C89B2C;">AVENIR,</span> PROTÉGEZ L'ESSENTIEL.
        </h1>

        <p data-reveal="up"
           class="text-[#1c2445] leading-relaxed mb-8 max-w-2xl"
           style="font-size: clamp(0.95rem, 1.4vw, 1.1rem); --reveal-delay: 100ms;">
          Épargne, retraite, éducation, prévoyance… NSIA Vie Gabon vous accompagne à chaque
          étape de la vie avec des solutions adaptées à vos besoins et à votre budget.
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

    <!-- ═══ SECTION 2 : NOS OFFRES VIE ═══ -->
    <section class="px-5 py-12 md:px-10 lg:px-16 bg-white">

      <p data-reveal="up"
         class="font-bold uppercase mb-2"
         style="color: #C89B2C; font-size: 0.8rem; letter-spacing: 0.1em;">
        NOS OFFRES
      </p>

      <h2 data-reveal="up"
          class="text-[#1c2445] font-black leading-tight mb-4"
          style="font-size: clamp(1.5rem, 2.8vw, 2.2rem); --reveal-delay: 80ms;">
        Une solution pour chaque projet de vie.
      </h2>

      <p data-reveal="up"
         class="text-[#1c2445] mb-8 max-w-2xl"
         style="font-size: clamp(0.9rem, 1.3vw, 1rem); --reveal-delay: 160ms; text-align: justify;">
        Choisissez la couverture qui correspond à vos objectifs. Épargne, protection,
        retraite ou prévoyance — nous avons la solution qu'il vous faut.
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

    <!-- ═══ SECTION 3 : POURQUOI NSIA VIE ? ═══ -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-5 py-10 md:py-14 md:px-10 lg:px-20 bg-white items-center">

      <div class="flex flex-col">

        <p data-reveal="up"
           class="font-bold uppercase mb-3"
           style="color: #C89B2C; font-size: 0.8rem; letter-spacing: 0.1em;">
          POURQUOI NSIA VIE ?
        </p>

        <h2 data-reveal="up"
            class="text-[#1c2445] font-black mb-3"
            style="font-size: clamp(1.4rem, 2.5vw, 2rem); --reveal-delay: 80ms;">
          Des solutions adaptées à chaque projet de vie.
        </h2>

        <p data-reveal="up"
           class="text-[#54607a] mb-8 leading-relaxed"
           style="font-size: clamp(0.9rem, 1.3vw, 1rem); --reveal-delay: 160ms;">
          NSIA Vie vous accompagne dans la préparation de votre avenir, la protection de vos proches et la sécurisation de vos projets personnels ou professionnels.
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
            Vous souhaitez construire <span style="color: #C89B2C;">votre avenir&nbsp;?</span>
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
            alt="Famille protégée par NSIA Vie"
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
import { useReveal }   from '../composables/useReveal'
import { useSeoMeta }  from '../composables/useSeoMeta'
import NavVie    from '../components/NavVie.vue'
import NavFooter from '../components/NavFooter.vue'
import OffreCard from '../components/OffreCard.vue'

useReveal()

useSeoMeta({
  title:       'Offres Vie – NSIA Vie Gabon',
  description: 'Épargne, retraite, éducation, prévoyance… Découvrez nos solutions d\'assurance vie adaptées à chaque étape de votre vie.',
  image:       '/images/Cover page NSIA Vie.png',
  url:         '/offres-vie',
})

const offres = [
  {
    icon:        '/images/Landing page NSIA VIE/14.svg',
    label:       'ÉPARGNE VIE',
    titre:       'Maintenez votre niveau de vie à la retraite.',
    description: "Constituez progressivement une retraite complémentaire et préparez vos revenus futurs avec une solution adaptée à vos objectifs.",
    delay: 0,
  },
  {
    icon:        '/images/Landing page NSIA VIE/13.svg',
    label:       'NSIA LIBRE RETRAITE',
    titre:       'Préparez votre avenir en toute liberté.',
    description: "Constituez un capital de fin de carrière ou un complément de retraite grâce à une épargne flexible et sécurisée.",
    delay: 80,
  },
  {
    icon:        '/images/Landing page NSIA VIE/10.svg',
    label:       'ÉPARGNE PLUS',
    titre:       "Chaque épargne compte pour un futur plus serein.",
    description: "Épargnez pour financer vos projets importants : études, mariage, achat de véhicule, logement ou tout autre objectif de vie.",
    delay: 160,
  },
  {
    icon:        '/images/Landing page NSIA VIE/11.svg',
    label:       'NSIA PESSU PESSU',
    titre:       'Commencez à épargner, même avec un petit montant.',
    description: "Avec une épargne accessible dès 1 500 FCFA, avancez pas à pas vers vos projets tout en protégeant votre capital.",
    delay: 240,
  },
  {
    icon:        '/images/Landing page NSIA VIE/12.svg',
    label:       'NSIA ÉTUDES',
    titre:       'Préparez l’avenir de votre enfant dès maintenant.',
    description: "Garantissez à votre enfant une bourse d’études pour l’accompagner dans son parcours scolaire et universitaire.",
    delay: 320,
  },
  {
    icon:        '/images/Landing page NSIA VIE/6.svg',
    label:       'NSIA ASSISTANCE FUNÉRAILLES',
    titre:       'Préservez la tranquillité de vos proches.',
    description: "Anticipez les frais liés aux obsèques et offrez à votre famille un accompagnement financier dans les moments difficiles.",
    delay: 400,
  },
  {
    icon:        '/images/Landing page NSIA VIE/9.svg',
    label:       'NSIA RETRAITE PRESTIGE',
    titre:       'Préparez votre retraite avec sérénité et privilèges.',
    description: "Avec NSIA Retraite Prestige, préparez votre avenir tout en accédant à des avantages privilégiés.",
    delay: 480,
  },
  {
    icon:        '/images/Landing page NSIA VIE/8.svg',
    label:       'NSIA HOMME CLÉ',
    titre:       'Protégez la continuité de votre entreprise.',
    description: "Sécurisez votre activité face à l’absence ou à la disparition d’une personne essentielle à son fonctionnement.",
    delay: 560,
  },
]

const pointsForts = [
  'Épargne accessible',
  'Protection des proches',
  'Préparation de l’avenir',
  'Accompagnement personnalisé',
]
</script>
