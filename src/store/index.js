import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import menu from './modules/menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    menu
  }
})

export default store
