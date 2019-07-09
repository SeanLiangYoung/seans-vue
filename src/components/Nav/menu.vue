<template>
  <div class="nav-menu">
    <el-menu
      :default-active="this.$store.getters.activityMenu"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#313131"
      text-color="#fff"
      active-text-color="#fff"
      @select="handleSelect">
      <el-menu-item
        index="1"
        @click="goto(item.service.url)">
        <a>{{ $t(item.service.content) }}</a>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">{{ $t(item.facebook.content) }}</template>
        <el-menu-item
          index="2-1"
          @click="goto(item.facebook.url)">
          <a >{{ $t(item.facebook.praise) }}</a>
        </el-menu-item>
        <el-menu-item
          index="2-2"
          @click="goto(item.facebook.url)">
          <a >{{ $t(item.facebook.reply) }}</a>
        </el-menu-item>
        <el-menu-item
          index="2-3"
          @click="goto(item.facebook.url)">
          <a >{{ $t(item.facebook.forward) }}</a>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">{{ $t(item.twitter.content) }}</template>
        <el-menu-item
          index="3-1"
          @click="goto(item.twitter.url)">
          <a >{{ $t(item.twitter.praise) }}</a>
        </el-menu-item>
        <el-menu-item
          index="3-2"
          @click="goto(item.twitter.url)">
          <a >{{ $t(item.twitter.reply) }}</a>
        </el-menu-item>
        <el-menu-item
          index="3-3"
          @click="goto(item.twitter.url)">
          <a >{{ $t(item.twitter.forward) }}</a>
        </el-menu-item>
      </el-submenu>
      <el-menu-item
        index="4"
        @click="goto(item.contact.url)">
        <a >{{ $t(item.contact.content) }}</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // activeIndex:
      // elMenuItem: {
      //   'width': '160px',
      //   'margin': '0 40px',
      //   'text-align': 'center'
      //   // 'padding': '0 12px'
      // },
      // //   elMenuItemTitle: {
      // //     'font-size': '20px'
      // //   },

    }
  },
  computed: {
    item() {
      return this.items
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    },
    goto(selecter) {
      document.querySelector(selecter).scrollIntoView(true)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.nav-menu {
  ul.el-menu--horizontal.el-menu {
    min-width: 160px;

    li.el-menu-item{
      width: 160px;
      margin: 0 20px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      font-size: 18px;
    }

    li.el-submenu{
      height: 100px;
      line-height: 100px;
      width:160px;
      min-width: 160px;
      margin: 0 20px;
      div.el-submenu__title{
        font-size: 18px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        padding-left: 0px;
        padding-right: 0px;
        i.el-icon-arrow-down{
          display: none;
        }
      }

    }

  }
}

div.el-menu--horizontal{
  width: 160px;

  ul.el-menu.el-menu--popup{
    font-size: 18px;
    min-width: 160px;
    width: 160px;
    height: 60px;

    li.el-menu-item{
      font-size: 18px;
      width: 160px;
      height: 60px;
      line-height: 60px;
    }
  }
}
// .el-menu--horizontal.el-menu .el-menu-item{
//       font-size: 18px;
//       width: 160px;
//       height: 60px;
// }
// .el-menu--horizontal>.el-submenu .el-submenu__title{
//     height: 100px;
//     line-height: 100px;
//     text-align: center;
//     i.el-icon-arrow-down{
//       display: none;
//     }
// }

</style>
