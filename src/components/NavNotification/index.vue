<template>
  <div class="notification-icon">
    <el-popover
      placement="top-start"
      title="标题"
      width="150"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <el-button slot="reference">
        <img
          :src="notificationImage"
          alt="notification">
      </el-button>
    </el-popover>
  </div>
</template>
<script>
export default {
  name: 'Notification',
  props: {
  },
  computed: {
    notificationImage () {
      return require('@/assets/navbar/notification.png')
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.notification-icon{
  margin:10px;
  .el-button {
    background-color: #313131;
    border: #313131;
  }
}
</style>
