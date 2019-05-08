export const setProjects = (state, projects) => {
  state.projects = projects
}

export const setActivities = (state, activities) => {
  state.activities = activities
}
export const setLastLogs = (state, { issue, logs }) => {
  state.previousLogs = {
    issue,
    logs
  }
}
