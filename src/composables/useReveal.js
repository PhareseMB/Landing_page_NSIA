import { onMounted, onBeforeUnmount } from 'vue'

export function useReveal() {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    document.querySelectorAll('[data-reveal], [data-stagger]').forEach((el) => {
      observer.observe(el)
    })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
