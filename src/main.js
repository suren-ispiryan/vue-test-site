import Vue from 'vue'
import App from '@/App.vue'
import Router from '@/router/index.js'
// Import Bootstrap and Icons
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Import Jquery
import $ from 'jquery'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Import axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Router,
  Jquery: $,
  // axios: axios,
  // VueAxios: VueAxios,
}).$mount('#app')

