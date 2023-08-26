import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/core/providers/google"
import { GOOGLE_ID, GOOGLE_SECRET } from "$env/static/private"

const example_whitelist = [
  // Your email address here
  // Issue is reproducable when auth fails (so don't put your email here if reproducing)
]

export const handle = SvelteKitAuth({
  providers: [
    Google({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (example_whitelist.includes(profile.email)) {
        return true
      }

      return '/failed'
    }
  }
})
