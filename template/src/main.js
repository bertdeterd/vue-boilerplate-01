import Vue from 'vue'
import App from './App'

import axios from 'axios'

import router from './router'

Vue.config.productionTip = false

Vue.prototype.$http = axios.create();


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

