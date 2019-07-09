import request from '@/utils/request'

var baseUrl = process.env.API_VERSION

export function loginByUsername (username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: baseUrl + '/login/confirm/',
    method: 'post',
    data
  })
}

export function logout () {
  return request({
    url: baseUrl + '/logout/',
    method: 'get'
  })
}
