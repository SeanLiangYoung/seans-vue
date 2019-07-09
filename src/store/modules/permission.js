import { appRouterMap, dashboardRouterMap } from '@/router'

const permission = {
//   namespaced: true,
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = appRouterMap.concat(routes)
    }
  },
  actions: {
    DashboardRoutes({ commit }, role) {
      return new Promise((resolve) => {
        let accessedRoutes
        // 1 代表 admin
        if (role.role === 1) {
          accessedRoutes = dashboardRouterMap
        } else {
          accessedRoutes = []
        }
        commit('SET_ROUTES', accessedRoutes)
        resolve()
      })
    }
  }
}

export default permission

