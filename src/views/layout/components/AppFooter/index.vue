<template>
  <section class="app-footer inline">
    <div>
      <!-- <span>© 2019 SeanLiang</span>
      <span>京ICP备xxxxxxx号</span>
      <span>京公网安备xxxxxxxxx号</span> -->
    </div>
    <crontab
      v-if="userAlreadyLogin"
      :interval="interval"
      :callback="onCrontabCallback"
      :dispatch="dispatchName"
      :dispatch-data="dispatchData"
      :dispatch-on-success="onCrontabDispatchSuccess"
      :dispatch-on-failed="onCrontabDispatchFailed"
    />
  </section>
</template>

<script>
// import { mapGetters } from 'vuex'
// import SidebarItem from './SidebarItem'
import { getToken } from '@/utils/auth'
import variables from '@/styles/variables.scss'
import Crontab from '@/components/Crontab'

export default {
  components: {
    Crontab
  },
  data() {
    return {
      interval: 60000,
      dispatchName: 'GetUserNotification',
      dispatchData: {}
    }
  },
  computed: {
    // ...mapGetters([
    //   'permissionRouters',
    //   'sidebar'
    // ]),
    variables() {
      return variables
    },
    userAlreadyLogin() {
      return getToken()
    }
  },
  methods: {
    onCrontabCallback() {
      // console.log('On Crontab Callback')
    },
    onCrontabDispatchSuccess(response) {
      console.log('On Crontab Dispatch Success: ', response)
    },
    onCrontabDispatchFailed(error) {
      console.log('On Crontab Dispatch Failed: ', error)
    }
  }

}
</script>

<style lang="scss" scoped>
.app-footer{
  height: 100px;
  overflow: hidden;
  background-color: #313131;

  div{
    height: 100%;
    line-height: 100px;
    text-align: center;
    font-size: 14px;
    color: #f6f7f8;
  }
}
</style>

