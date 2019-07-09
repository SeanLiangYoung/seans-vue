<template>
  <div class="banner-container">
    <div class="banner-image">
      <img src="https://source.unsplash.com/collection/190727/1920x427">
      <!-- <img :src="bannerImage"> -->
      <div class="banner-image-description">
        <slot name="banner-description" />
      </div>
    </div>
    <div
      :style="[ contentStyleObject , customStyleObject ]"
      class="banner-content"
    >
      <slot name="title" />
      <el-row>
        <slot name="content" />
      </el-row>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Banner',
  props: {
    contentWidth: {
      type: Number,
      default: 1200
    },
    contentHeight: {
      type: Number,
      default: 305
    },
    customStyleObject: {
      type: Object,
      default: null
    }
  },
  computed: {

    bannerImage() {
      // return require(this.sectiondata.image)
      return require('@/assets/banner/banner.png')
    },
    contentStyleObject() {
      return {
        width: `${this.contentWidth}px`,
        height: `${this.contentHeight}px`
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.banner-image{
  img{
    width: 100%;
  }
  .banner-image-description{
    position: absolute;
    text-align: center;
    width: 100%;
    top: 80px;
    p{
      margin: 0;
      font-size: 26px;
      color: #f6f7f8;
    }
  }
}
.banner-content{
  background-color: #fff;
  margin: auto;
  top: -68px;
  position: relative;
}
</style>
