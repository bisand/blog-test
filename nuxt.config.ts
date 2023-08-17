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
      get secret() { return process.env.NUXT_SECRET } // You can generate one with `openssl rand -base64 32`
    },
    github: {
      get clientId() { return process.env.GITHUB_CLIENT_ID },
      get clientSecret() { return process.env.GITHUB_CLIENT_SECRET }
    },
    public: {
      authJs: {
        baseUrl: process.env.CF_PAGES_URL,  // Due to Cloudflare's env var handleing, we have to use static values here
        verifyClientOnEveryRequest: true    // whether to hit the /auth/session endpoint on every client request
      }
    }
  }
})
