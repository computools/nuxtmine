const Router = require('koa-router')
const router = new Router()
const { checkKey } = require('../middlewares/check-key')
const redmine = require('../services/redmine')

router.get(':id/last', checkKey, async ctx => {
  const tracks = await redmine.timeTracksForIssue(ctx.state.key, ctx.params.id)
  ctx.status = 200
  ctx.body = tracks.time_entries
})

router.post(':id/log', checkKey, async ctx => {
  await redmine.trackTime(ctx.state.key, {
    issue_id: parseInt(ctx.params.id),
    spent_on: ctx.request.body.date,
    hours: ctx.request.body.hours,
    activity_id: ctx.request.body.activity_id,
    comments: ctx.request.body.comments
  })
  ctx.status = 201
})

module.exports = router
