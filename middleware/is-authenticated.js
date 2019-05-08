export default async function(ctx) {
  if (process.server) {
    const cookie = require('cookie')
    const parsedCookie = cookie.parse(ctx.req.headers.cookie)
    if (!parsedCookie.rm_token) {
      ctx.redirect('/auth')
    }
  } else {
    const cookie = await import('js-cookie')
    if (!cookie.get('rm_token')) {
      ctx.redirect('/auth')
    }
  }
}
