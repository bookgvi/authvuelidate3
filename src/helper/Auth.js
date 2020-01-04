export function hasTokenExpired () {
  let isTokenExpired = true
  const expiredAt = Date.parse(localStorage.getItem('expiredAt'))
  const currentDateTime = Date.parse(new Date())
  isTokenExpired = expiredAt - currentDateTime < 0
  return isTokenExpired
}
export function isAuth (to, from, next) {
  const token = localStorage.getItem('jwt')
  const isTokenExpired = hasTokenExpired()
  if (token && !isTokenExpired) {
    next('/')
  } else {
    next()
  }
}
