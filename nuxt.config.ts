export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/financia/' : '/'
  },
  modules: ['@pinia/nuxt'],
  ssr: false
})
