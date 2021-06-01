import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
<<<<<<< HEAD
  headers: { 'x-workspace-id': 1 },
=======
  headers: { 'x-workspace-id': 333 },
>>>>>>> local
  baseURL: 'http://localhost:3000',
})

Vue.prototype.$http = axiosIns

export default axiosIns

// You can add your headers here
// ================================
// baseURL: 'https://some-domain.com/api/',
// timeout: 1000,
// headers: {'X-Custom-Header': 'foobar'}
