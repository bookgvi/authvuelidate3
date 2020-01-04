import Vue from 'vue'
export const actions = {
  async login ({ state }, payload) {
    try {
      const { data } = await Vue.$http.post(state.LoginURL, payload)
      return data
    } catch (err) {
      console.warn('...Catched: ', err.message)
      return err
    }
  }
}
