import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  devServer: {
    host: process.env.NUXT_HOST || "0.0.0.0",
    port: Number(process.env.NUXT_PORT) || 3000,
  },
});
