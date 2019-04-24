import * as actions from './issues/actions'
import * as mutations from './issues/mutations'
import * as getters from './issues/getters'

const state = {
  projects: [],
  activities: [{ id: 0, name: 'Sample' }],
  recent: []
}

export default {
  state,
  actions,
  mutations,
  getters
}
