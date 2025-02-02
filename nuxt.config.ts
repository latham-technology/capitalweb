// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@fortawesome/fontawesome-svg-core/styles.css'],

    modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo'],

    devtools: { enabled: false },
})
