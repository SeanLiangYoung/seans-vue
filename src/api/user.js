import request from '@/utils/request'

const baseUrl = `/user/${process.env.API_VERSION}`

export function getUserInfo() {
  return request({
    url: `${baseUrl}/info`,
    method: 'get'
  })
}
