export default defineEventHandler((event) => {
    const env = event.context.cloudflare?.env
    if (!env) return
    for (const key in env) {
        if (typeof env[key] === "object") continue
        process.env[key] = env[key]
        // console.log("process.env", key, env[key])
    }
})