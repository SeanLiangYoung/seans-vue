<template>
  <div class="navbar">
    <hamburger
      :toggle-click="toggleSideBar"
      :is-active="sidebar.opened"
      class="hamburger-container"
    />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <screenfull class="right-menu-item hover-effect screenfull" />

      <el-tooltip
        :content="$t('navbar.size')"
        effect="dark"
        placement="bottom"
      >
        <size-select class="right-menu-item hover-effect" />
      </el-tooltip>

      <lang-select class="right-menu-item hover-effect" />

      <div class="login right-menu-item">
        <el-dropdown
          placement="bottom-end"
          class="avatar-container right-menu-item hover-effect"
          trigger="click"
        >
          <div class="avatar-wrapper">
            <img
              :src="getAvatar"
              class="avatar"
              alt="profile-info-image"
            >
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/tasks">
              <el-dropdown-item>历史订单</el-dropdown-item>
            </router-link>
            <router-link to="/main">
              <el-dropdown-item>回到首页</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided>
              <span
                style="display:block;"
                @click="logout"
              >{{ $t('navbar.logOut') }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import Screenfull from '@/components/Nav/screenfull'
import SizeSelect from '@/components/Nav/sizeSelect'
import LangSelect from '@/components/Nav/langSelect'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    Screenfull,
    SizeSelect,
    LangSelect
  },
  data() {
    return {
      user: {
        avatarId: 1
      }
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'device'
    ]),
    getAvatar() {
      return require(`@/assets/avatar/avatar_${this.user.avatarId}.png`)
    }
  },
  created() {
    this.user.avatarId = this.$store.state.user.avatar
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 100px;
  overflow: hidden;
  background-color: #f7f7f7;

  .hamburger-container {
    line-height: 100px;
    width: 100px;
    height: 100%;
    text-align: center;
    float: left;
    cursor: pointer;
    transition: background .3s;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    width: 300px;
    height: 100%;
    line-height: 50px;
    display: inline-flex;

    &:focus {
      outline: none;
    }

    .right-menu-item{
      width: 40px;
      height: 100%;
      line-height: 100px;
      font-size: 20px;
      margin: 0 10px;
    }

    .login{
      padding: 25px 10px;;
      margin: 10px;
      line-height: 50px;
      height: 80px;
      .avatar{
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
