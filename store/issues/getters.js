export const recent = state => {
  return [...state.recent]
    .sort((a, b) => {
      return a.lastUpdate > b.lastUpdate ? 1 : -1
    })
    .map(rec => {
      return state.projects.find(project => project.id)
    })
}
export const activities = state => state.activities
