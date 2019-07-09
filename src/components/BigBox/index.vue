<template>
  <el-col :span="span">
    <div class="box">
      <div class="box-image">
        <img :src="boxImage">
      </div>
      <div class="box-info">
        <div class="box-title"><span v-html="$t(box.name)"/></div>
        <div class="box-desc"><span v-html="$t(box.description)"/></div>
      </div>
      <div class="box-custom">
        <slot/>
      </div>
    </div>
  </el-col>
</template>
<script>
export default {
  name: 'BigBox',
  props: {
    item: {
      type: Object,
      required: true
    },
    col: {
      type: Number,
      required: true
    }
  },
  data () {
    return {

    }
  },
  computed: {
    box () {
      return this.item ? this.item : null
    },
    boxImage () {
    //   return require(this.item.image)
      return require('@/assets/facebook/forward.png')
    },
    span () {
      var t = 24
      if (t / this.col === t * 1.0 / this.col) {
        // console.log(t / this.col)
        return t / this.col
      }
      return 8
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .box{
        height: 500px;
        width: 372px;
        background-color: #fff;
        padding-top: 68px;
        padding-bottom: 60px;
    }
    .box-image{
        width: 100%;
        height: 90px;
        float: left;
        text-align: center;
        img{
            height: 100%;
        }
    }
    .box-info{
        width: 100%;
        /* padding: 150px 0 250px;
        height: 150px; */
        float: left;
        text-align: center;
        margin-top: 35px;
        margin-bottom: 30px;
        .box-title{
            margin-bottom: 15px;
        }
    }

</style>
