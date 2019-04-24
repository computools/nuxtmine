import axios from 'axios'

export const getMyProjects = () => {
  return axios
    .get('/api/projects')
    .then(res => Object.keys(res.data).map(k => res.data[k]))
}

export const logTime = args => {
  return axios.get('/api/projects')
}

export const getActivities = () => {
  return axios.get('/api/activities').then(res => res.data)
}
