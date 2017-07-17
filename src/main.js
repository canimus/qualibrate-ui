import Vue from 'vue'
import App from './App'

import {sync} from 'vuex-router-sync'
import store from './store'
import router from './router'
import VueMoment from 'vue-moment'

sync(store, router)
Vue.use(VueMoment)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
