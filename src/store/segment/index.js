import axios from '../../libs/axios'

export default {
  namespaced: true,
  state: {
    segments: [],
  },
  mutations: {
    async getSegments(state) {
      const res = await axios.get('/segment/get')
      state.segments = [...res.data.segments]
    },
    async addSegment(state, val) {
      state.segments = [...state.segments, val]
      await axios.post('/segment/add', val)
    },
  },
  actions: {},
}
