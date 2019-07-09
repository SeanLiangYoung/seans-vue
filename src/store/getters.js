const getters = {
  header: state => state.app.header,
  main: state => state.app.main,
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  dashboard: state => state.app.dashboard,
  activityMenu: state => state.app.activityMenu,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  permissionRouters: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes
}
export default getters
