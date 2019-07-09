import { loginByUsername, logout } from '@/api/login'
import { getUserInfo, register } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { REQUEST_SUCCESS_CODE } from '@/const'

const user = {
  state: {
    user: '',
    userId: '',
    role: '',
    status: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    sex: '',
    telephone: '',
    age: '',
    birth: '',
    lastLogin: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLE: (state, role) => {
      state.role = role
    },
    SET_USER_ID: (state, userId) => {
      state.userId = userId
    },
    SET_SEX: (state, sex) => {
      state.sex = sex
    },
    SET_TELEPHONE: (state, telephone) => {
      state.telephone = telephone
    },
    SET_AGE: (state, age) => {
      state.age = age
    },
    SET_BIRTH: (state, birth) => {
      state.birth = birth
    },
    SET_LASTLOGIN: (state, lastLogin) => {
      state.lastLogin = lastLogin
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const res = response.data
          if (res.code === REQUEST_SUCCESS_CODE) {
            commit('SET_TOKEN', res.result.token)
            setToken(res.result.token)
            resolve()
          } else {
            reject(res.message)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          const res = response.data
          const result = response.data.result
          if (res.code === REQUEST_SUCCESS_CODE) {
            // if (result.role || result.role === 0) { // 验证返回的role是否是一个非空数组
            commit('SET_ROLE', result.role)
            // } else {
            //   reject('getInfo: role must be a non-null array!')
            // }
            commit('SET_NAME', result.username)
            commit('SET_USER_ID', result.userId)
            commit('SET_SEX', result.sex)
            commit('SET_TELEPHONE', result.telephone)
            commit('SET_AGE', result.age)
            commit('SET_BIRTH', result.birth)
            commit('SET_LASTLOGIN', result.lastLogin)
            commit('SET_AVATAR', result.avatar)
            resolve(response)
          } else {
            reject(new Error('Request failed, please try again.'))
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 注册 通过 email
    RegisterByEmail ({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        register(data).then(response => {
          const res = response.data
          if (res.code === REQUEST_SUCCESS_CODE) {
            // commit('SET_TOKEN', res.result.token)
            // setToken(res.result.token)
            resolve()
          } else {
            reject(res.message)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles ({ commit, dispatch }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.role)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
          resolve()
        })
      })
    }
  }
}

export default user
