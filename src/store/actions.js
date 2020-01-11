import * as types from './mutation-types'

export const actions = {
  async $http ({ state }, params) {
    const { payload, method, url } = params
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
  async getAll ({ state, commit, dispatch }, payload) {
    const { page, filter } = payload
    const url = state.baseURL + state.commonURL + page
    try {
      const { data } = await dispatch('$http', { payload: filter, method: 'GET', url })
      const toState = { page: page.split('/').pop(), items: data.items }
      commit(types.SAVE_DATA, toState)
      return data
    } catch (err) {
      console.warn('...Catched GET: ', err.message)
      return err
    }
  }
}
