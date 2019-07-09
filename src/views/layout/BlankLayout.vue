<template>
  <div :class="classObj" class="app-wrapper">
    <div class="main-container">
      <transition>
        <keep-alive :include="cachedViews">
          <router-view :key="key"/>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'BlankLayout',
  mixins: [ResizeMixin],
  computed: {
    device () {
      return this.$store.state.app.device
    },
    classObj () {
      return {
        mobile: this.device === 'mobile'
      }
    },
    key () {
      return this.$route.fullPath
    },
    cachedViews () {
      return this.$store.state.tagsView.cachedViews
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    width: 100%;
    background-color: #c7c7c7;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
