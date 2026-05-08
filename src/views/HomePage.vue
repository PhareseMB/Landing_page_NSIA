<template>
  <div class="min-h-screen bg-navy flex flex-col font-sans overflow-x-hidden">
    <Header />
    <main class="flex-1">
      <HeroSection />
      <CtaSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import CtaSection from '../components/CtaSection.vue'
import Footer from '../components/Footer.vue'
</script>
