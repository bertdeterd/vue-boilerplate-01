import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.prototype.$http = axios.create();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

