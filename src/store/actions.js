import * as types from './mutation-types'
import Vue from 'vue'

export const actions = {
  async authLogin ({ state }, payload) {
    try {
      const res = await Vue.$http.post(state.LoginURL, payload)
      return res
    } catch (err) {
      console.warn('...Catched authorization: ', err.message)
      return err
    }
  },
  async getAll ({ state, commit }, payload) {
    const { page, filter } = payload
    const URL = state.commonURL + page
    try {
      const { data } = await Vue.$http.get(URL, filter).then(resp => resp.data)
      const toState = { page: page.split('/').pop(), items: data.items }
      commit(types.SAVE_DATA, toState)
      return data
    } catch (err) {
      console.warn('...Catched GET: ', err.message)
      return err
    }
  }
}
