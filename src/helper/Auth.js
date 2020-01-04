export function isAuth (to, from, next) {
  const token = localStorage.getItem('jwt')
  if (token) {
    next('/')
  } else {
    next()
  }
}
