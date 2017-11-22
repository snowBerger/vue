// store入口
import Vue from 'vue'
import Vuex from 'vuex'
import * as state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import note from './modules/note'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    note
  }
})
