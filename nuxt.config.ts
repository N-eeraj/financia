export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  routeRules: {
    '/': { prerender: true },
    '/login': { prerender: true },
    '/sign-up': { prerender: true },
    '/dashboard/**': { ssr: false },
  }
})
