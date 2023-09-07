import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './quasar'
import vcalendar from 'v-calendar'

Vue.config.productionTip = false

new Vue({
  router,
  vcalendar,
  render: h => h(App)
}).$mount('#app')
