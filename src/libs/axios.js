import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
  headers: {
    'x-workspace-id': localStorage.getItem('workspaceId'),
    'x-workspace-name': localStorage.getItem('workspaceName'),
  },
  baseURL: 'https://cs-service.herokuapp.com/',
  // baseURL: 'http://localhost:3000/',
})
https://cs-service.herokuapp.com/
Vue.prototype.$http = axiosIns

export default axiosIns

// You can add your headers here
// ================================
// baseURL: 'https://some-domain.com/api/',
// timeout: 1000,
// headers: {'X-Custom-Header': 'foobar'}
