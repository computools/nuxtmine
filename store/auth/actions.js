import cookie from 'js-cookie'

export const authorize = (store, token) => {
  console.log('asdasd')
  cookie.set('rm_token', token)
}

export const logout = store => {
  cookie.remove('rm_token')
}
