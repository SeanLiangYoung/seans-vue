<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
    <crontab
      v-if="userIsAdmin"
      :interval="interval"
      :dispatch="dispatchName"
      :dispatch-data="dispatchData"
      :dispatch-on-success="onCrontabDispatchSuccess"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Crontab from '@/components/Crontab'

export default {
  name: 'AppMain',
  components: {
    Crontab
  },
  data() {
    return {
      interval: 30000,
      dispatchName: 'SystemUserNewTask',
      dispatchData: {}
    }
  },
  computed: {
    ...mapGetters([
      'adminNeedWarnning'
    ]),
    userIsAdmin() {
      return this.$store.state.user.role === 1
    },
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  },
  watch: {
    '$store.getters.adminNeedWarnning': function() {
      if (this.$store.getters.adminNeedWarnning) {
        this.open()
      }
    }
  },
  methods: {
    onCrontabDispatchSuccess(response) {
      this.$store.commit('SET_LAST_TASK', response)
    },
    open() {
      if (this.userIsAdmin) {
        this.$notify({
          title: '用户新发了新的任务',
          message: '用户新发了新的任务请注意查看',
          position: 'bottom-right',
          duration: 0
        })
      }
    }
  }
}
</script>

<style scoped>
.app-main {
  /*84 = navbar + tags-view = 50 +34 */
  min-height: calc(100vh - 100px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>

