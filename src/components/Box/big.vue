<template>
  <el-col :span="span">
    <div
      class="big-box"
      @mouseover="hover = true"
      @mouseout="hover = false"
    >
      <div class="box-image">
        <img :src="boxImage">
      </div>
      <div class="box-info">
        <div class="box-title">
          <span v-text="$t(box.name)" />
        </div>
        <div class="box-desc">
          <span v-text="$t(box.description)" />
        </div>
      </div>
      <div class="box-custom">
        <slot />
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
  data() {
    return {
      hover: false
    }
  },
  computed: {
    box() {
      return this.item ? this.item : null
    },
    boxImage() {
    //   return require(this.item.image)
      if (this.hover) {
        if (this.item.site === 'facebook') {
          if (this.item.type === 'twitter_praise') {
            return require('@/assets/facebook/praise_active.png')
          } else if (this.item.type === 'twitter_reply') {
            return require('@/assets/facebook/reply_active.png')
          } else if (this.item.type === 'twitter_forward') {
            return require('@/assets/facebook/forward_active.png')
          }
        } else if (this.item.site === 'twitter') {
          if (this.item.type === 'twitter_praise') {
            return require('@/assets/twitter/praise_active.png')
          } else if (this.item.type === 'twitter_reply') {
            return require('@/assets/twitter/reply_active.png')
          } else if (this.item.type === 'twitter_forward') {
            return require('@/assets/twitter/forward_active.png')
          }
        }
      } else if (this.item.site === 'facebook') {
        if (this.item.type === 'twitter_praise') {
          return require('@/assets/facebook/praise.png')
        } else if (this.item.type === 'twitter_reply') {
          return require('@/assets/facebook/reply.png')
        } else if (this.item.type === 'twitter_forward') {
          return require('@/assets/facebook/forward.png')
        }
      } else if (this.item.site === 'twitter') {
        if (this.item.type === 'twitter_praise') {
          return require('@/assets/twitter/praise.png')
        } else if (this.item.type === 'twitter_reply') {
          return require('@/assets/twitter/reply.png')
        } else if (this.item.type === 'twitter_forward') {
          return require('@/assets/twitter/forward.png')
        }
      }

      return require('@/assets/facebook/forward.png')
    },
    span() {
      const t = 24
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
    .big-box{
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
        .box-desc{
          width: 82%;
          margin: auto;
        }
    }

    .big-box:hover{
      color: #fff;
      background-color: #456dc1;
    }
</style>
