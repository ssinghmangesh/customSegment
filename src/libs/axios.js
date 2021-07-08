import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
  headers: {
    'x-workspace-id': localStorage.getItem('workspaceId') || 56788582584,
    'x-workspace-name': localStorage.getItem('workspaceName') || 'indian-dress-cart.myshopify.com',
  },
  baseURL: 'https://custom-segment-service.herokuapp.com/',
})

Vue.prototype.$http = axiosIns

export default axiosIns

// You can add your headers here
// ================================
// baseURL: 'https://some-domain.com/api/',
// timeout: 1000,
// headers: {'X-Custom-Header': 'foobar'}
