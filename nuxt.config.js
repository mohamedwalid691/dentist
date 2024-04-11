export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'final-dentist',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        crossorigin: 'anonymous',
        integrity:
          'sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi',

        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
      },

      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
        integrity:
          'sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==',
        crossorigin: 'anonymous',
      },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js',
        integrity:
          'sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/style/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        dir: 'ltr',
      },
      {
        code: 'ar',
        iso: 'ar-EG',
        file: 'ar-Eg.js',
        dir: 'rtl',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',

    vueI18n: {
      fallbackLocale: 'en',

      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'lang',
        redirectOn: 'root', // recommended
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    BASE_URL: 'https://admin-panel.dsdlab-iq.com/api/',
    FILE_URL: 'https://admin-panel.dsdlab-iq.com/storage/app/',
    FIREBASE_TOKEN: 'AAAAIdfsg-s:APA91bGPrbGqxD38AeyKl_jLaYjW3uZ_K9iHwPj0s7t0tQksvbIaQxMM_iszM39kILAPK81XJ5r60Vt8TDZhrm23eEQkgY0_RlR92WEYyACvauBcdL5Mih9MGieP_y2m7x83vMKqCuQm',
    APPLICATION_CODE: 'iydbTVvESX3vWGUB9JhhvqXHZJEimc5fYkp8cNTjYVL07L2VCI',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
