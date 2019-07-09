<template>
  <div class="login-container">
    <banner
      :custom-style-object="bannerStyle">
      <template slot="banner-description">
      </template>
      <template slot="title">
        <div class="title-container">
          <p class="title">
            {{ $t('login.tooltip') }}
          </p>
        </div>
      </template>
      <template slot="content">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

          <el-form-item class="username" prop="username">
            <el-input
              v-model="loginForm.username"
              :placeholder="$t('login.username')"
              name="username"
              type="text"
              auto-complete="on"
            />
          </el-form-item>

          <el-form-item class="password" prop="password">
            <el-input
              v-model="loginForm.password"
              :type="passwordType"
              :placeholder="$t('login.password')"
              name="password"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
            >
              <span slot="suffix" class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-input>

          </el-form-item>

          <el-form-item class="reset" prop="reset">
            <a href="#">{{ $t('login.reset') }}</a>
          </el-form-item>

          <el-button :loading="loading" class="submit" type="primary" round @click.native.prevent="handleLogin">
            {{ $t('login.logIn') }}
          </el-button>

        </el-form>
      </template>
    </banner>
    <section class="app-footer inline">
      <div>
        <span>版权所有© </span>
        <span>xxxxxxxxx号</span>
      </div>
    </section>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import Favicon from '@/components/Favicon'
import Banner from '@/components/Banner'

export default {
  name: 'Login',
  components: {
    Banner,
    Favicon
  },
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        // callback(new Error('Please enter the correct user name'))
        callback(new Error(this.$t('error.username.incorrect')))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        // callback(new Error('The password can not be less than 6 digits'))
        callback(new Error(this.$t('error.password.lessThan6')))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      redirect: undefined
    }
  },
  computed: {
    bannerStyle () {
      return {
        width: '580px',
        height: '440px',
        padding: '70px 60px'
      }
    }
  },
  methods: {
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch((response) => {
            this.$message.error(response)
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    .login-container{
        // background: #f5f5f5;
        height: 100%;
        .banner-container{
          min-height: calc(100vh - 100px);
          background-color: #8560d1;
        }
        .app-footer{
          height: 100px;
          margin: auto;
          width: 100%;
          background-color: #8560d1;
        }
    }
    .main-container{
        margin-left: 0px;
    }
    .title-container{
        p.title{
            font-size: 16px;
            color: #333333;
        }
    }
    .el-form{

        .el-form-item.username {
            margin-top: 38px;
            margin-bottom: 40px;
        }

        .el-form-item.password{
            margin-top: 40px;
            margin-bottom: 25px;
        }

        .el-form-item.reset{
            color: #3c81e9;
            font-size: 14px;
            margin-bottom: 25px;
        }
        .submit.el-button{
            width: 140px;
            height: 45px;
            background-color: #3c81e9;
            margin: 0 160px;
        }
    }
    input.el-input__inner{
        background-color: #f5f5f5;
    }
</style>
