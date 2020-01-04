const token = localStorage.getItem('jwt')

export function isAuth (to, from, next) {
  if (token) {
    next('/')
  } else {
    next()
  }
}

export function isNotAuth (to, from, next) {
  if (!token) {
    next('/login')
  } else {
    next()
  }
}
