import request from '@/utils/request'

var baseUrl = process.env.API_VERSION

export function getUserInfo () {
  return request({
    url: baseUrl + '/user/info/',
    method: 'get'
  })
}

export function register (data) {
  // const form = new FormData()
  // form.append('username', data.email)
  // form.append('password', data.password)
  // form.append('phone', data.phone)
  return request({
    url: baseUrl + '/register',
    method: 'post',
    data: data
  })
}
