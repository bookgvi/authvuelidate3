import * as types from './mutation-types'
import Vue from 'vue'

export const actions = {
  async __http ({ state }, params) {
    const { payload, method, url } = params
    console.log(url)
    const jwt = localStorage.getItem('jwt')
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url)
      xhr.setRequestHeader('Content-Type', 'application/json')
      if (jwt) {
        xhr.setRequestHeader('Authorization', `Bearer ${jwt}`)
      }
      xhr.addEventListener('load', () => {
        if (xhr.status === 200 || xhr.readyState === 4) {
          resolve(JSON.parse(xhr.response))
        } else {
          const error = new Error(xhr.statusText)
          error.code = xhr.status
          reject(error)
        }
      })
      xhr.addEventListener('error', () => {
        reject(new Error('Network error...'))
      })
      xhr.send(JSON.stringify(payload))
    })
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
