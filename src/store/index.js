import Vue from 'vue'
import Vuex from 'vuex'
import VuexAlong from 'vuex-along'
import app from './modules/app'
import permission from './modules/permission'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    permission,
    user
  },
  getters,
  plugins: [
    VuexAlong({
      local: {}
    })
  ]
})

export default store
