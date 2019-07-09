import request from '@/utils/request'

const baseUrl = `/login/${process.env.API_VERSION}`

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: `${baseUrl}/confirm`,
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: `${baseUrl}/logout`,
    method: 'get'
  })
}
