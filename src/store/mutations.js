import * as types from './mutation-types'
import Vue from 'vue'
export const mutations = {
  [types.SAVE_DATA] (state, payload) {
    const { page, items } = payload
    Vue.set(state, page, {})
    Vue.set(state[page], 'items', items)
  }
}
