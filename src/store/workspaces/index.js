import axios from '../../libs/axios'

export default {
  namespaced: true,
  state: {
    workspaces: [],
    error: null,
  },
  mutations: {
    async getWorkspaces(state) {
      const res = await axios.post('/user-manager/workspace/fetch-all', { userId: localStorage.getItem('userId') })
      state.workspaces = [...res.data.data]
    },
  },
  actions: {},
}
