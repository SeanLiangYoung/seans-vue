<template>
  <div class="notification-icon">
    <el-popover
      :title="notificationTitle"
      placement="bottom-end"
      width="442"
      trigger="hover">
      <el-button slot="reference">
        <img
          :src="notificationImage"
          alt="notification">
      </el-button>
      <el-table
        :data="notificationContent"
        :show-header="false"
        height="250">
        <el-table-column
          width="416"
          property="content"
          @click="jumpToTasks"/>
      </el-table>
    </el-popover>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Notification',
  props: {
  },
  computed: {
    ...mapGetters([
      'notification'
    ]),
    notificationContent() {
      return this.notification.message
    },
    notificationTitle() {
      const count = this.notification.message.length
      return `共${count}条消息`
    },
    notificationImage() {
      return require('@/assets/navbar/notification.png')
    }
  },
  methods: {
    jumpToTasks() {
      console.log('jumpToTasks')
      // this.$router.push({ path: '/tasks' })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.notification-icon{
  margin:10px;
  width:30px;
  .el-button {
    padding:0px;
    background-color: #313131;
    border: #313131;
  }
}
</style>
