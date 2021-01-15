export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: ["vue-slick-carousel/dist/vue-slick-carousel.css"],

  plugins: [
    { src: "./plugins/vue-slick-carousel.js" },
    { src: "~plugins/vue-backtotop.js", ssr: false }
  ],

  modules: [
    "@nuxt/content",
    "@nuxtjs/bulma",
    "nuxt-i18n",
    "vue-scrollto/nuxt",
    //"vue-scrollto/nuxt",
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox"
  ],

  i18n: {
    locales: ["en", "fr", "es"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          welcome: "Welcome",
          menu_portada: "Home",
          menu_vinos: "Wines",
          menu_mapa: "Map",
          menu_contacto: "Contact"
        },
        fr: {
          welcome: "Bienvenue",
          menu_portada: "Inicio",
          menu_vinos: "Vinues",
          menu_mapa: "Mapa",
          menu_contacto: "Contacto"
        },
        es: {
          welcome: "Bienvenido",
          menu_portada: "Inicio",
          menu_vinos: "Vinos",
          menu_mapa: "Mapa",
          menu_contacto: "Contacto"
        }
      }
    }
  },
  /*
   ** HTTP module configuration
   */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
