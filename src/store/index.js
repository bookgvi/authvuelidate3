import Vue from 'vue'
import Vuex from 'vuex'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'
Vue.use(Vuex)
const state = {
  LoginURL: '/api/auth/login'
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
