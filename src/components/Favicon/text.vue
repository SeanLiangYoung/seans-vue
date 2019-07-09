<template>
  <div class="logo-icon">
    <a href="/main">
      <span class="title">{{ title }}</span>
      <span class="sub-title">{{ subTitle }}</span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'TextFavicon',
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.logo-icon{
  height: 100px;
  padding: 20px 60px;
  img{
    height: 40px;
  }
  a{
    color: #fff;
    line-height: normal;

    .title{
      font-size: 30px;
      margin-right: 10px;
    }
    .sub-title{
      font-size: 15px;
    }
  }
}
</style>
