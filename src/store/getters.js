const getters = {
  header: state => state.app.header,
  main: state => state.app.main,
  dashboard: state => state.app.dashboard,
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.role,
  setting: state => state.user.setting
}
export default getters
