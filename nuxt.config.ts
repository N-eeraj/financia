export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/financia/' : '/'
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  ssr: false,

  tailwindcss: {
    configPath: '~/tailwind.js',
  },
})
