module.exports = {
  async checkKey(ctx, next) {
    // console.log(ctx)
    if (ctx.cookies.get('rm_token')) {
      ctx.state.key = ctx.cookies.get('rm_token')
      await next()
    } else {
      return ctx.throw(401, 'Redmine token is missing')
    }
  }
}
