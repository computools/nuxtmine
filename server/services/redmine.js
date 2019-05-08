const client = require('axios').create({
  baseURL: process.env.REDMINE_URL
})

module.exports = {
  findIssues: (key, query) => {
    return client
      .get('/issues.json', {
        params: {
          ...query,
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
      .then(res => res.data)
  },
  timeTracksForIssue: (key, issue) => {
    return client
      .get(`/time_entries.json?user_id=me&issue_id=${issue}`, {
        headers: {
          'X-Redmine-API-Key': key
        }
      })
      .then(res => res.data)
  },
  trackTime: (key, log) => {
    return client
      .post(
        'time_entries.xml',
        {
          time_entry: log
        },
        {
          headers: {
            'X-Redmine-API-Key': key
          }
        }
      )
      .catch(e => console.log(e))
  }
}
