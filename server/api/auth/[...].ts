import GithubProvider from "@auth/core/providers/github"
import type { AuthConfig } from "@auth/core/types"
import { NuxtAuthHandler, } from "#auth"

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.
// Refer to Auth.js docs for more details

const authOptions: AuthConfig = {
  get secret() { return process.env.NUXT_SECRET },
  providers: [
    GithubProvider({
      get clientId() { return process.env.NUXT_GITHUB_CLIENT_ID },
      get clientSecret() { return process.env.NUXT_GITHUB_CLIENT_SECRET }
    })
  ],
}

const runtimeConfig = useRuntimeConfig()
console.log("runtimeConfig", JSON.stringify(runtimeConfig))

export default NuxtAuthHandler(authOptions, runtimeConfig)
