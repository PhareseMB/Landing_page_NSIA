import { onMounted, onUnmounted } from 'vue'

const BASE_URL = 'https://landing-page-nsia.vercel.app'

const DEFAULTS = {
  title:       'NSIA Assurances – Votre assurance commence ici',
  description: 'Auto, Habitation, Voyage, Épargne, Retraite, Prévoyance. Remplissez le formulaire et un conseiller vous rappelle.',
  image:       `${BASE_URL}/images/og-image.jpg`,
  url:         BASE_URL,
}

function setTag(selector, value) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', value)
}

function applyMeta({ title, description, image, url }) {
  document.title = title
  setTag('meta[property="og:title"]',         title)
  setTag('meta[property="og:description"]',   description)
  setTag('meta[property="og:image"]',         image)
  setTag('meta[property="og:url"]',           url)
  setTag('meta[name="twitter:title"]',        title)
  setTag('meta[name="twitter:description"]',  description)
  setTag('meta[name="twitter:image"]',        image)
}

export function useSeoMeta({ title, description, image, url }) {
  onMounted(() => applyMeta({
    title,
    description,
    image: `${BASE_URL}${image}`,
    url:   `${BASE_URL}${url}`,
  }))

  onUnmounted(() => applyMeta(DEFAULTS))
}
