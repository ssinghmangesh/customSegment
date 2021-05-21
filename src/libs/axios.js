import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
  headers: { 'x-workspace-id': 9 },
  baseURL: 'http://localhost:3000',
})

Vue.prototype.$http = axiosIns

export default axiosIns

// You can add your headers here
// ================================
// baseURL: 'https://some-domain.com/api/',
// timeout: 1000,
// headers: {'X-Custom-Header': 'foobar'}
