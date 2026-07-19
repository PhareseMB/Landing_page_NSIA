<template>
  <div
    data-reveal="up"
    class="flex flex-col rounded-lg p-4 lg:p-5"
    style="background-color: #f4f2ea;"
    :style="{ '--reveal-delay': delay + 'ms' }"
  >
    <!-- Icône + label -->
    <div class="flex items-center gap-3 mb-3">
      <img
        :src="icon"
        :alt="label"
        class="card-icon object-contain flex-shrink-0"
      />
      <span class="card-label font-black uppercase leading-tight" style="color:#C89B2C; letter-spacing:0.03em;">
        {{ label }}
      </span>
    </div>

    <!-- Titre -->
    <h3 class="card-title text-[#1c2445] font-black leading-snug mb-1">{{ titre }}</h3>

    <!-- Description -->
    <p class="card-desc text-[#1c2445] leading-relaxed" style="text-align: justify;">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon:        { type: String, required: true },
  label:       { type: String, required: true },
  titre:       { type: String, required: true },
  description: { type: String, required: true },
  delay:       { type: Number, default: 0 },
})
</script>

<style scoped>
/* ── Mobile < 640px : 1 colonne, cartes pleine largeur ── */
.card-icon  { width: 130px; height: 130px; }
.card-label { font-size: 1.1rem; }
.card-title  { font-size: 1.2rem; }
.card-desc   { font-size: 1rem; }

/* ── sm 640-767px : 2 colonnes ── */
@media (min-width: 640px) {
  .card-icon  { width: 100px; height: 100px; }
  .card-label { font-size: clamp(0.85rem, 1.5vw, 1rem); }
  .card-title  { font-size: clamp(1rem,   1.6vw, 1.15rem); }
  .card-desc   { font-size: clamp(0.875rem, 1.2vw, 0.95rem); }
}

/* ── md 768-1023px : 3 colonnes étroites ── */
@media (min-width: 768px) {
  .card-icon  { width: 80px; height: 80px; }
  .card-label { font-size: clamp(0.78rem, 1.4vw, 1rem); }
  .card-title  { font-size: clamp(0.95rem, 1.6vw, 1.2rem); }
  .card-desc   { font-size: clamp(0.82rem, 1.1vw, 0.95rem); }
}

/* ── lg 1024-1279px : 3 colonnes larges ── */
@media (min-width: 1024px) {
  .card-icon  { width: 110px; height: 110px; }
  .card-label { font-size: clamp(0.9rem,  1.6vw, 1.2rem); }
  .card-title  { font-size: clamp(1rem,   1.8vw, 1.3rem); }
  .card-desc   { font-size: clamp(0.875rem, 1.3vw, 1rem); }
}

/* ── xl ≥ 1280px ── */
@media (min-width: 1280px) {
  .card-icon { width: 140px; height: 140px; }
}
</style>
