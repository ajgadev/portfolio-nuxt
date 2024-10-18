// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  runtimeConfig: {
    public: {
      githubRepoUrl: process.env.GITHUB_REPO_URL
    }
  },
  colorMode: {
    classSuffix: ''
  }
})
