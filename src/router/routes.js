import { isAuth, isNotAuth } from '../helper/Auth'

export const routes = [
  {
    path: '/login',
    name: 'login',
    beforeEnter: isAuth,
    component: () => import('../views/Login')
  },
  {
    path: '/',
    name: 'home',
    beforeEnter: isNotAuth,
    component: () => import('../views/Home'),
    children: [
      { path: '', component: () => import('../views/Hello') },
      { path: 'customers', name: 'customers', component: () => import('../views/Customers') },
      { path: 'hello', name: 'hello', component: () => import('../views/Hello') },
      { path: 'about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') }
    ]
  }
]
