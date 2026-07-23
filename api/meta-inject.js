const fs   = require('fs')
const path = require('path')

const BASE_URL = 'https://landing-page-nsia.vercel.app'

const META = {
  '/offres-vie': {
    title:       'Offres Vie – NSIA Vie Gabon',
    description: "Épargne, retraite, éducation, prévoyance… Découvrez nos solutions d'assurance vie adaptées à chaque étape de votre vie.",
    image:       BASE_URL + '/images/Cover%20page%20NSIA%20Vie.png',
    url:         BASE_URL + '/offres-vie',
  },
  '/offres-non-vie': {
    title:       'Offres Non Vie – NSIA Assurances Gabon',
    description: 'Auto, Habitation, Voyage, Multirisque Professionnelle… Protégez tout ce qui compte avec NSIA Assurances Gabon.',
    image:       BASE_URL + '/images/Cover%20page%20Non%20Vie.png',
    url:         BASE_URL + '/offres-non-vie',
  },
  '/kinda': {
    title:       'NSIA Kinda – Tu glisses mais tu ne tombes pas',
    description: "Pour seulement 15 000 FCFA par an, bénéficiez d'une protection, d'un appui pour vos proches, tout en épargnant à votre rythme.",
    image:       BASE_URL + '/images/og-image.jpg',
    url:         BASE_URL + '/kinda',
  },
}

function htmlAttr(val) {
  return val.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

function patch(html, pattern, value) {
  return html.replace(pattern, (_, pre, post) => pre + htmlAttr(value) + post)
}

function injectMeta(html, { title, description, image, url }) {
  html = html.replace(/(<title>)[^<]*(<\/title>)/, (_, o, c) => o + title + c)
  html = patch(html, /(<meta name="description" content=")[^"]*(")/,            description)
  html = patch(html, /(<meta property="og:title" content=")[^"]*(")/,            title)
  html = patch(html, /(<meta property="og:description" content=")[^"]*(")/,      description)
  html = patch(html, /(<meta property="og:image" content=")[^"]*(")/,            image)
  html = patch(html, /(<meta property="og:url" content=")[^"]*(")/,              url)
  html = patch(html, /(<meta name="twitter:title" content=")[^"]*(")/,           title)
  html = patch(html, /(<meta name="twitter:description" content=")[^"]*(")/,     description)
  html = patch(html, /(<meta name="twitter:image" content=")[^"]*(")/,           image)
  return html
}

module.exports = (req, res) => {
  const route = req.query.route
  const meta  = META[route]

  let html
  try {
    html = fs.readFileSync(path.join(process.cwd(), 'dist', 'index.html'), 'utf-8')
  } catch {
    res.status(500).send('Internal Server Error')
    return
  }

  if (meta) html = injectMeta(html, meta)

  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
  res.send(html)
}
