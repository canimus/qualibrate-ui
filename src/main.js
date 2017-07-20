import Vue from 'vue'
import App from './App'

import {sync} from 'vuex-router-sync'
import store from './store'
import router from './router'
import VueMoment from 'vue-moment'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
import VueTruncate from 'vue-truncate-filter'

sync(store, router)
Vue.use(VueMoment)
Vue.use(VueLodash, lodash)
Vue.use(VueTruncate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

