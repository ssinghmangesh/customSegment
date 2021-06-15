import axios from '../../libs/axios'

export default {
  namespaced: true,
  state: {
    segments: [],
  },
  mutations: {
    async getSegments(state) {
      const res = await axios.post('/segment/get')
      state.segments = res.data
    },
    async addSegment(state, val) {
      state.segments = [...state.segments, val]
    },
  },
  actions: {},
}
