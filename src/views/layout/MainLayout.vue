<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'" class="drawer-bg" @click="handleClickOutside"/>
    <app-header>
      <template slot="left-menu">
        <component :is="currentLeftMenu" :title="routeTitle" :sub-title="routeSubTitle"/>
      </template>
      <template slot="menu">
        <component :is="currentMenu" :items="menuItem"/>
      </template>
      <template slot="right-menu">
        <money v-if="show"/>
        <notification />
        <navgap v-if="show"/>
        <lang-select class="set-language" />
        <div v-if="userAlreadyLogin" class="login">

          <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
            <div class="avatar-wrapper">
              <img
                :src="getAvatar"
                class="avatar"
                alt="profile-info-image">
              <i class="el-icon-caret-bottom"/>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item divided>
                <span style="display:block;" @click="logout">{{ $t('navbar.logOut') }}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </div>
        <el-row v-else class="login">
          <el-col :span="12">
            <TextButton
              v-if="show"
              :directed2="loginUrl"
              :content="$t(loginContent)" />
          </el-col>
          <el-col :span="12">
            <TextButton
              v-if="show"
              :directed2="registUrl"
              :content="$t(registContent)"/>
          </el-col>
        </el-row>
      </template>
    </app-header>
    <app-main/>
    <app-footer/>
  </div>
</template>

<script>
import { AppHeader, AppMain, AppFooter } from './components'
import { mapGetters } from 'vuex'
import { getToken } from '@/utils/auth'
import ResizeMixin from './mixin/ResizeHandler'
import Favicon from '@/components/Favicon/index'
import TextFavicon from '@/components/Favicon/text'
import NavMenu from './components/navMenu'
import Money from '@/components/NavMoney'
import Notification from '@/components/NavNotification'
import Navgap from './components/navgap'
import TextButton from './components/textButton'
import variables from '@/styles/variables.scss'
import ErrorLog from '@/components/ErrorLog'
import LangSelect from '@/components/LangSelect'

export default {
  name: 'MainLayout',
  components: {
    Favicon,
    TextFavicon,
    NavMenu,
    Money,
    Navgap,
    TextButton,
    Notification,
    ErrorLog,
    LangSelect,
    AppHeader,
    AppMain,
    AppFooter
  },
  mixins: [ResizeMixin],
  data () {
    return {
      currentLeftMenu: '',
      currentMenu: '',
      show: '',
      user: {
        avatarId: 1
      }
    }
  },
  computed: {
    ...mapGetters([
      'header'
    ]),
    menuItem () {
      return this.header
    },
    variables () {
      return variables
    },
    loginUrl () {
      return this.header.login.url
    },
    loginContent () {
      return this.header.login.content
    },
    registUrl () {
      return this.header.regist.url
    },
    registContent () {
      return this.header.regist.content
    },
    device () {
      return this.$store.state.app.device
    },
    classObj () {
      return {
        mobile: this.device === 'mobile'
      }
    },
    routeTitle () {
      return '优速推'
    },
    routeSubTitle () {
      if (this.$route.name === 'Task') {
        return '服务购买'
      } else if (this.$route.name === 'Prepay') {
        return '充值中心'
      } else {
        return ''
      }
    },
    getAvatar () {
      return require('@/assets/avatar/avatar_' + this.user.avatarId + '.png')
    },
    userAlreadyLogin () {
      return getToken()
    }
  },
  watch: {
    '$route' (to, from) {
      // react to route changes...
      if (to.name === 'Main') {
        // 如果访问的是 main 页面
        this.currentLeftMenu = 'Favicon'
        this.currentMenu = 'nav-menu'
        this.show = true
      } else {
        this.currentLeftMenu = 'Favicon'
        this.currentMenu = ''
        this.show = false
      }
    }
  },
  beforeMount () {
    // todo:: 这里在时候浏览器自带的 前进、回退 时会出现问题
    if (this.$route.name === 'Main') {
      // 如果访问的是 main 页面
      this.currentLeftMenu = 'Favicon'
      this.currentMenu = 'nav-menu'
      this.show = true
    } else {
      this.currentLeftMenu = 'Favicon'
      this.currentMenu = ''
      this.show = false
    }
    // currentLeftMenu
    // currentMenu
    // show
  },
  created () {
    this.user.avatarId = this.$store.state.user.avatar
  },
  methods: {
    handleClickOutside () {
      console.log(this.mobile)
    },
    logout () {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    }
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
    // &.mobile.openSidebar{
    //   position: fixed;
    //   top: 0;
    // }
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
  .login{
    padding: 0 20px;
    .avatar{
      width: 30px;
      height: 30px;
    }
  }
</style>
