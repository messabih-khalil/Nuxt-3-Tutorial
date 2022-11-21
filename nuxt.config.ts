// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "aldin store",
      meta: [
        {
          name: "description",
          content: "Aldin store today",
        },
      ],
    },
  },
});
