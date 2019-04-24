import cookie from 'js-cookie'

export const authorize = (state, token) => {
  cookie.set('rm_token', token)
}

export const logout = (state, token) => {
  cookie.remove('rm_token')
}
