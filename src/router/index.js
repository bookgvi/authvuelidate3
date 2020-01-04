import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from '@/router/routes'
import { hasTokenExpired } from '@/helper/Auth'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('jwt')
  const isTokenExpired = hasTokenExpired()
  if ((!token || isTokenExpired) && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})

export default router
