const Router = require('koa-router')
const router = new Router()
const { checkKey } = require('../middlewares/check-key')
const redmine = require('../services/redmine')

router.get('/', checkKey, async ctx => {
  const activities = await redmine.activities(ctx.state.key)
  ctx.status = 200
  ctx.body = activities
})

module.exports = router
