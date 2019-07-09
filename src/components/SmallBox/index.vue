<template>
  <div v-if="box">
    <el-col :span="span">
      <div class="box-sm">
        <div class="box-image">
          <img :src="boxImage">
        </div>
        <div class="box-info">
          <div class="box-title"><span v-html="$t(box.name)"/></div>
          <div class="box-desc"><span v-html="$t(box.description)"/></div>
        </div>
      </div>
    </el-col>
  </div>
</template>
<script>
export default {
  name: 'SmallBox',
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
      return require('@/assets/banner/icon.png')
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
    .box-sm{
        margin-top: 68px;
        margin-bottom: 56px;
        height: 181px;
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

        .box-title{
            margin-top: 20px;
            margin-bottom: 18px;
        }
    }

</style>
