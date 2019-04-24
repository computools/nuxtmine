import * as redmine from '~/services/redmine'

export const fetchMyIssues = ({ commit }) => {
  return redmine
    .getMyProjects()
    .then(projects => commit('setProjects', projects))
}

export const fetchActivities = ({ commit }) => {
  return redmine
    .getActivities()
    .then(activities => commit('setActivities', activities))
}

export const logTime = ({ commit }, args) => {
  return redmine.logTime(args).then(() => {
    commit('addToRecent', args.projectId)
  })
}
