import { NuxtConfig } from "@nuxt/types"

const nuxtConfig: NuxtConfig = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "poke-toolbase_starter",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  serverMiddleware: [
    // API middleware
    "~/api/index.ts"
  ],

  // publicRuntimeConfig: {
  //   HOST: process.env.HOST
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/static/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/composition-api/module"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}

export default nuxtConfig
