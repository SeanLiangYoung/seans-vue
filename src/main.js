import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '@/icons'
import '@/styles/index.scss'
import '@/directive'
// �� permission �м��ض�̬��Ȩ��
import './router/permission'

import i18n from './lang'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
