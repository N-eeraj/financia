export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/financia/' : '/',
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  ssr: false,
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  tailwindcss: {
    configPath: '~/tailwind.js',
  },
})
