<template>
  <div class="nav-menu">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#313131"
      text-color="#fff"
      active-text-color="#fff"
      @select="handleSelect">
      <el-menu-item index="1" @click="goto(item.menu1.url)"><a>{{ $t(item.menu1.content) }}</a></el-menu-item>
      <el-submenu index="2">
        <template slot="title">{{ $t(item.menu2.content) }}</template>
        <el-menu-item index="2-1" @click="goto(item.menu2.url)"><a >{{ $t(item.menu2.content) }}</a></el-menu-item>
        <el-menu-item index="2-2" @click="goto(item.menu2.url)"><a >{{ $t(item.menu2.content) }}</a></el-menu-item>
        <el-menu-item index="2-3" @click="goto(item.menu2.url)"><a >{{ $t(item.menu2.content) }}</a></el-menu-item>
      </el-submenu>
      <el-menu-item index="3" @click="goto(item.menu3.url)"><a >{{ $t(item.menu3.content) }}</a></el-menu-item>
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
  data () {
    return {
    }
  },
  computed: {
    item () {
      return this.items
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    },
    goto (selecter) {
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
      margin: 0 40px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      font-size: 20px;
    }

    li.el-submenu{
      height: 100px;
      line-height: 100px;
      width:160px;
      min-width: 160px;
      margin: 0 40px;
      div.el-submenu__title{
        font-size: 20px;
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

</style>
