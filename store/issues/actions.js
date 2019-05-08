export default {
  fetchMyIssues({ commit }) {
    return this.$axios
      .$get('/api/projects')
      .then(res => Object.keys(res).map(k => res[k]))
      .then(projects => commit('setProjects', projects))
  },
  fetchActivities({ commit }) {
    return this.$axios
      .$get('/api/activities')
      .then(activities => commit('setActivities', Object.values(activities)[0]))
  },
  logTime(
    { commit },
    { issueId, comment, activityId, date, hours, projectId }
  ) {
    return this.$axios.post(`/api/issues/${issueId}/log`, {
      activity_id: parseInt(activityId),
      comments: comment,
      hours: hours,
      issue_id: parseInt(issueId),
      date: date
    })
  },
  getLastLogsForIssue({ commit }, issueId) {
    return this.$axios.$get(`/api/issues/${issueId}/last`).then(logs => {
      commit('setLastLogs', {
        issue: issueId,
        logs
      })
    })
  }
}
