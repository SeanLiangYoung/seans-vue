<template>
  <el-breadcrumb v-if="getPosition.length > 1" separator=">" class="title">
    <el-breadcrumb-item v-for="(item, index) in getPosition" :key="index" :to="getPath">
      {{ item.menuName }}
    </el-breadcrumb-item>
    <slot />
  </el-breadcrumb>
</template>
<script>
import navberConverter from '@/mixins/navber-converter'
import { getNavberNodePath } from '@/utils/tree.js'
export default {
  name: 'Breadcrumb',
  mixins: [navberConverter],
  computed: {
    getPosition() {
      const treePath = []
      getNavberNodePath(this.getNavbarShowList, this.$router.currentRoute, treePath)
      return treePath
    },
    // 预留避免
    getPath() {
      return ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/mixin";
@import "~@/styles/variables";

.title {
	/deep/ .el-breadcrumb__inner,
  /deep/ .el-breadcrumb__inner:hover{
		@include font-color($color-text-deep);
		font-size: 12px;
    font-weight: normal;
    vertical-align: baseline;
  }
  height: 30px;
  line-height: 30px;
	// padding: 0 0 15px 0;
}
</style>

