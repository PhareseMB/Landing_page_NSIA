<template>
  <section class="bg-navy w-full">
    <div class="px-6 pt-6 pb-10 md:px-10 lg:px-16 xl:px-24 md:pt-10 md:pb-14">

      <!-- Texte descriptif -->
      <p class="text-white font-normal leading-relaxed
                 text-base md:text-lg lg:text-xl
                 max-w-xs md:max-w-2xl lg:max-w-3xl">
        Auto, habitation,voyage,épargne,retraite,prévoyance&nbsp;:
        Remplissez le formulaire et un conseillervous rappelle...
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
              stroke-width="3.2"
              stroke-linecap="round"
              fill="none"
              class="arrow-curve"
            />
            <path
              d="M30 28 L36 34 L26 37"
              stroke="white"
              stroke-width="3.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              class="arrow-tip"
            />
          </svg>
        </span>

        <!-- Bouton CTA — lien externe formulaire -->
        <a
          href="https://eur05.safelinks.protection.outlook.com/?url=https%3A%2F%2Fforms.cloud.microsoft%2FPages%2FResponsePage.aspx%3Fid%3D0pJwRgt54U2bPjizhOsqIaiEtWUpoLBEmGw3567pJgdUQjFEVDhaU0k4V1YxN0RDRlVLQVJTM1NMUi4u&data=05%7C02%7Cjeremie.mboma%40nsiaassurances.com%7Cd5fcd2ce5a7247f970b208deb0c68f77%7C467092d2790b4de19b3e38b384eb2a21%7C1%7C0%7C639142564078079498%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=vQ%2B0yWwLQ3Z%2FYniUhHUnL3%2BZWvglXmhLJiDBAOzdvIA%3D&reserved=0"
          target="_blank"
          rel="noopener noreferrer"
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
        </a>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Tracé progressif de la courbe */
.arrow-curve {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: draw-curve 1.8s ease-in-out infinite;
}

/* Tracé de la pointe, décalé pour suivre la courbe */
.arrow-tip {
  stroke-dasharray: 25;
  stroke-dashoffset: 25;
  animation: draw-tip 1.8s ease-in-out infinite;
}

@keyframes draw-curve {
  0%   { stroke-dashoffset: 50; opacity: 0; }
  8%   { opacity: 1; }
  40%  { stroke-dashoffset: 0; opacity: 1; }
  75%  { stroke-dashoffset: 0; opacity: 1; }
  90%  { opacity: 0; }
  100% { stroke-dashoffset: 50; opacity: 0; }
}

@keyframes draw-tip {
  0%, 28% { stroke-dashoffset: 25; opacity: 0; }
  38%     { opacity: 1; }
  55%     { stroke-dashoffset: 0; opacity: 1; }
  75%     { stroke-dashoffset: 0; opacity: 1; }
  90%     { opacity: 0; }
  100%    { stroke-dashoffset: 25; opacity: 0; }
}
</style>
