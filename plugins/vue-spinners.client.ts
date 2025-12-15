import { defineNuxtPlugin } from '#app'
import { VueSpinnersPlugin } from 'vue3-spinners';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSpinnersPlugin)
})
