import axios from '../../libs/axios'

export default {
  namespaced: true,
  state: {
    segments: [],
    error: null,
  },
  mutations: {
    async getSegments(state) {
      const res = await axios.get('/segment/get')
      state.segments = [...res.data.segments]
    },
    async addSegment(state, val) {
      try {
        const res = await axios.post('/segment/add', val)
        state.segments = [...state.segments, res.data.segment]
      } catch (err) {
        state.error = err.response.data.message
      }
    },
    async deleteSegment(state, val) {
      try {
        await axios.post('/segment/delete', { segmentId: val })
        state.segments = state.segments.filter(segment => segment.segment_id !== val)
      } catch (err) {
        state.error = err.response.data.message
      }
    },
    clearError(state) {
      state.error = null
    },
  },
  actions: {},
}
