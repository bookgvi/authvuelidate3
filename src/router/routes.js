export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home'),
    children: [
      {
        path: '',
        component: () => import('../views/Hello')
      },
      {
        path: 'hello',
        name: 'hello',
        component: () => import('../views/Hello')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  }
]
