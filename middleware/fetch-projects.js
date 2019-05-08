export default function(ctx) {
  return Promise.all([
    ctx.store.dispatch('issues/fetchMyIssues'),
    ctx.store.dispatch('issues/fetchActivities')
  ])
}
