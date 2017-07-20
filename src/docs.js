import Vue from 'vue'
import Docs from './components/Docs.vue'

import {sync} from 'vuex-router-sync'
import store from './store'
import router from './router'
import VueMoment from 'vue-moment'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
import VueTruncate from 'vue-truncate-filter'
import {ClientTable} from 'vue-bulma-tables-2'

sync(store, router)
Vue.use(VueMoment)
Vue.use(VueLodash, lodash)
Vue.use(VueTruncate)
Vue.use(ClientTable)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<qfp-docs/>',
  components: {
    'qfp-docs': Docs
  }
})

