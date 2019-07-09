import { REQUEST_SUCCESS_CODE, TOKEN_INVALID_CODE } from '@/const'

export function getErrorMessage(code) {
  if (code === REQUEST_SUCCESS_CODE) {
    return 'success'
  }
  return `error.${code}`
}

export function isLogoutMessage(code) {
  if (code === TOKEN_INVALID_CODE) {
    return true
  }
  return false
}
