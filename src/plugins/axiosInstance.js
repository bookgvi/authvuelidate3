import axios from 'axios'
import Vue from 'vue'

const config = {
  baseURL: 'https://pre.ugoloc.ucann.ru'
}
const instance = axios.create(config)

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('jwt')
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`
  }
  return config
}, error => Promise.reject(error))
instance.interceptors.response.use(response => response, error => {
  const response = error.response
  if (response) {
    switch (response.status) {
      case 401:
      case 403:
        localStorage.removeItem('jwt')
        // location.reload(true) // if server response is correct!!! Not now
        break
    }
    Promise.reject(error)
  }
})

Plugin.install = (Vue, option) => {
  Vue.$http = instance
  window.$http = instance
  Object.defineProperty(Vue.prototype, '$http', {
    get () { return instance }
  })
}

Vue.use(Plugin)

export default Plugin
