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
      await axios.post('/segment/add', val)
      state.segments = [...state.segments, val]
    },
    async deleteSegment(state, val) {
      await axios.post('/segment/delete', { segmentId: val })
      state.segments = state.segments.filter(segment => segment.segment_id !== val)
    },
  },
  actions: {},
}
