<template>
  <section class="app-header">
    <div class="left-menu">
      <slot name="left-menu" />
    </div>
    <div class="menu">
      <slot name="menu" />
    </div>
    <div class="right-menu">
      <slot name="right-menu" />
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.app-header {
  height: 100px;
  width: 100%;
  overflow: hidden;
  background-color: #313131;
  display: inline-flex;
  position: fixed;
  top: 0px;
  z-index: 2;
  .menu{
    margin: auto;
  }
  .left-menu{
    height: 100%;
    line-height: 100px;
    display: inline-flex;
  }
  .right-menu {
    right: 0px;
    height: 100%;
    line-height: 100px;
    display: inline-flex;
  }
}
</style>
