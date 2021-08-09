import Vue from 'vue'

// axios
import axios from 'axios'

/*eslint-disable*/
let isRefreshing = false;
let failedQueue = [];

const axiosIns = axios.create({
  headers: {
    'x-workspace-id': localStorage.getItem('workspaceId'),
    'x-workspace-name': localStorage.getItem('workspaceName'),
  },
  // baseURL: 'https://cs-service.herokuapp.com/',
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
})

const processQueue = (error) => {
  failedQueue.forEach(prom => {
      if (error) {
          prom.reject(error);
      } else {
          prom.resolve();
      }
  });

  failedQueue = [];
};

axiosIns.interceptors.response.use(response => response, err => {
  const originalRequest = err.config;
  if (err.response.status === 403 && !originalRequest._retry) {
    if (isRefreshing) {
      return new Promise(function(resolve, reject) {
          failedQueue.push({ resolve, reject });
      })
          .then(token => {
              return axios(originalRequest);
          })
          .catch(err => {
              return Promise.reject(err);
          });
    }
    originalRequest._retry = true;
    isRefreshing = true;

    return new Promise(function(resolve, reject) {
        axios
            .post('http://localhost:3000/refresh', {
                refreshToken: "fooToken"}, {
                  withCredentials: true
                })
            .then(({ data }) => {
                // axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.fooToken;
                // originalRequest.headers['Authorization'] = 'Bearer ' + data.fooToken;
                processQueue(null);
                resolve(axios(originalRequest));
            })
            .catch(err => {
                processQueue(null);
                // store.dispatch(showMessage({ message: 'Expired Token' }));
                reject(err);
                localStorage.removeItem('userId')
                // html = document.getElementById("login").innerHTML
                window.location.replace('/login')
                // window.location.assign('/login')
            })
            .then(() => {
                isRefreshing = false;
            });
    });
      }
  return Promise.reject(err);
})

Vue.prototype.$http = axiosIns

export default axiosIns

// You can add your headers here
// ================================
// baseURL: 'https://some-domain.com/api/',
// timeout: 1000,
// headers: {'X-Custom-Header': 'foobar'}
