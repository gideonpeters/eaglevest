import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "@/assets/styles/main.scss"
import vuetify from './plugins/vuetify';
import VueCountdown from "@chenfengyuan/vue-countdown"

Vue.config.productionTip = false

Vue.component('vue-countdown', VueCountdown);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
