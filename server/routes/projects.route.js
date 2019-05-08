const Router = require('koa-router')
const router = new Router()
const { checkKey } = require('../middlewares/check-key')
const redmine = require('../services/redmine')

const mapIssuesToProjects = issues => {
  return issues.reduce((acc, value) => {
    if (!acc[value.project.id]) {
      acc[value.project.id] = value.project
      acc[value.project.id].issues = []
    }
    acc[value.project.id].issues.push({
      author: value.author.name,
      description: value.description,
      id: value.id,
      startDate: value.start_date,
      projectId: value.project.id,
      name: value.subject
    })
    return acc
  }, {})
}

router.get('/', checkKey, async ctx => {
  const issues = await redmine.findIssues(ctx.state.key)
  ctx.status = 200
  ctx.body = mapIssuesToProjects(issues)
})

module.exports = router
