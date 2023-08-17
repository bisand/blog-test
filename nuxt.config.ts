// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@hebilicious/authjs-nuxt"],
  // Optional default config
  //  authJs: {
  //    verifyClientOnEveryRequest: true,
  //    guestRedirectTo: "/", // where to redirect if the user is authenticated
  //    authenticatedRedirectTo: "/", // where to redirect if the user is not authenticated
  //    baseUrl: ""
  //  },
  nitro: {
    preset: "cloudflare-pages"
  },
  // Set environment variables via .dev.vars file for local development
  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_SECRET // You can generate one with `openssl rand -base64 32`
    },
    github: {
      clientId: process.env.NUXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET
    },
    public: {
      authJs: {
        baseUrl: process.env.NUXT_ORIGIN,
        verifyClientOnEveryRequest: true
      }
    }
  }
})
