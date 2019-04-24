const client = require('axios').create({
  baseURL: process.env.REDMINE_URL
})

module.exports = {
  findIssues: (key, query) => {
    return client
      .get('/issues.json', {
        params: {
          assigned_to_id: 'me'
        },
        headers: {
          'X-Redmine-API-Key': key
        }
      })
      .then(res => res.data.issues)
  },
  activities: key => {
    return client
      .get('/enumerations/time_entry_activities.json', {
        headers: {
          'X-Redmine-API-Key': key
        }
      })
      .res(res => res.data)
  },
  timeTracks: (key, project) => {
    return client.get('/time_entries.json?user_id=me')
  }
}
