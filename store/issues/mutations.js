export const setProjects = (state, projects) => {
  state.projects = projects
}

export const addToRecent = (state, projectId) => {
  const recent = state.recent.find(r => r.projectId)
  if (recent) {
    recent.lastUpdate = Date.now()
  } else {
    state.recent.push({
      projectId,
      lastUpdate: Date.now()
    })
  }
}

export const setActivities = (state, activities) => {
  state.activities = activities
}
