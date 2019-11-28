import axios from 'axios'
import { MessageBox } from 'element-ui'
import NProgress from 'nprogress'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { REQUEST_SUCCESS_CODE, REQUEST_TOKEN_EXPIRED } from '@/const'
const queryString = require('qs')
const { VUE_APP_BASE_API: api, VUE_APP_API_VERSION: version, VUE_APP_WEB: web } = process.env

// create an axios instance
const service = axios.create({
  baseURL: api + version, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  transformRequest: [function(data, config) {
    if (!config['Content-Type']) {
      return queryString.stringify(data)
    }
    for (const key in data) { // 删除空数据
      if (!data[key] && data[key] !== 0) {
        delete data[key]
      }
    }
    switch (config['Content-Type'].toLowerCase()) {
      case 'application/x-www-form-urlencoded':
        return queryString.stringify(data, { arrayFormat: 'brackets' })
      case 'application/json;charset=utf-8':
        return JSON.stringify(data)
      case 'mutipart/form-data;charset=utf-8':
        const form = new FormData()
        for (const key in data) {
          form.append([key], data[key])
        }
        return form
      default:
        return queryString.stringify(data)
    }
  }],
  timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (config.headers['Content-Type'] && config.headers['Content-Type'].toLowerCase() === 'mutipart/form-data;charset=utf-8') {
      // emppty
    } else {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    NProgress.start()
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

  /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
  response => {
    NProgress.done()
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== REQUEST_SUCCESS_CODE) {
      // 开发时 请开启这个 可以直接看到后端返回的错误
      // Message({
      //   message: res.message || 'Error',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === REQUEST_TOKEN_EXPIRED) {
        // to re-login
        /*  MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                     confirmButtonText: 'Re-Login',
                     cancelButtonText: 'Cancel',
                     type: 'warning'
                 }).then(() => {
                     store.dispatch('user/clearUserInfo').then(() => {
                         // location.reload('/')
                         console.log('web', web)
                         location.assign(`/${web}`)
                     })
                 }) */

        MessageBox.alert('登录超时，请重新登录！', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          customClass: 'reLoginMessageBox',
          callback: (action) => {
            store.dispatch('user/clearUserInfo').then(() => {
              location.assign(`/${web}`)
            })
          }
        })
      }
      return Promise.resolve({ code: res.code })
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    NProgress.done()
    /*  Message({
                 // message: error.message,
                 message: '网络异常操作失败',
                 type: 'error',
                 duration: 5 * 1000
             }) */
    MessageBox.alert('数据请求失败，请刷新重试', '提示', {
      confirmButtonText: '刷新',
      cancelButtonText: '取消',
      showCancelButton: true,
      type: 'warning',
      customClass: 'reLoginMessageBox',
      callback: (action) => {
        if (action === 'confirm') {
          location.reload()
        }
      }
    })
    return Promise.reject(error)
  }
)

export default service
