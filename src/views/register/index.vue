<template>
  <div class="register-container">
    <banner
      :custom-style-object="bannerStyle">
      <template slot="banner-description">
        <!-- <Favicon/>
        <p>{{ $t('register.banner') }}</p> -->
      </template>
      <template slot="title">
        <div class="title-container">
          <p class="title">
            {{ $t('register.tooltip') }}
          </p>
        </div>
      </template>
      <template slot="content">
        <el-form ref="registerForm" :model="registerForm" :rules="registerRules" class="register-form" auto-complete="on" label-position="left">

          <el-form-item class="username" prop="username">
            <el-input
              v-model="registerForm.username"
              :placeholder="$t('register.email')"
              name="username"
              type="text"
              auto-complete="on"
            />
          </el-form-item>

          <el-form-item class="password" prop="password">
            <el-input
              v-model="registerForm.password"
              :type="passwordType"
              :placeholder="$t('register.password')"
              name="password"
              auto-complete="on"
            >
              <span slot="suffix" class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-input>
          </el-form-item>

          <el-form-item class="confirm" prop="confirm">
            <el-input
              v-model="registerForm.confirm"
              :type="passwordType"
              :placeholder="$t('register.confirm')"
              name="confirm"
              auto-complete="on"
            >
              <span slot="suffix" class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-input>

          </el-form-item>
          <el-form-item class="telephone" prop="telephone">
            <el-input
              v-model="registerForm.telephone"
              :placeholder="$t('register.phone')"
              type="text"
              name="telephone"
              auto-complete="on"
            >
              <template slot="prepend">+86</template>
            </el-input>
          </el-form-item>
          <!-- <el-form-item class="captcha" prop="captcha">
            <el-input
              v-model="registerForm.captcha"
              :type="passwordType"
              :placeholder="$t('register.captcha')"
              name="captcha"
              @keyup.enter.native="handleregister"
            >
              <template slot="append">
                <el-button :loading="loading" type="info" @click.native.prevent="handleregister">
                  {{ $t('register.getCaptcha') }}
                </el-button>
              </template>
            </el-input>
          </el-form-item> -->

          <el-button :loading="loading" class="submit" type="primary" round @click.native.prevent="handleregister">
            {{ $t('register.regist') }}
          </el-button>

        </el-form>
      </template>
    </banner>
  </div>
</template>

<script>
import { validEmail, validPhone } from '@/utils/validate'
import Banner from '@/components/Banner'
import Favicon from '@/components/Favicon'

export default {
  name: 'Register',
  components: {
    Banner,
    Favicon
  },
  data () {
    const validateEmail = (rule, value, callback) => {
      if (!validEmail(value)) {
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
    const validateConfrim = (rule, value, callback) => {
      if (value.length < 6) {
        // callback(new Error('The password can not be less than 6 digits'))
        callback(new Error('密码不可以小于6位'))
      } if (value !== this.registerForm.password) {
        callback(new Error('两次输入的内容不一致'))
      } else {
        callback()
      }
    }
    const validatePhone = (rule, value, callback) => {
      if (value.length < 11) {
        callback(new Error('手机号不可以小于11位'))
      } else if (!validPhone(value)) {
        callback(new Error('请输入合法的手机号'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        username: '',
        password: '',
        confirm: '',
        telephone: ''
        // captcha: ''
      },
      registerRules: {
        username: [{ required: true, trigger: 'blur', validator: validateEmail }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        confirm: [{ required: true, trigger: 'blur', validator: validateConfrim }],
        telephone: [{ required: true, trigger: 'blur', validator: validatePhone }]
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
        height: '570px',
        padding: '60px 60px'
      }
    }
  },
  methods: {
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
    },
    handleregister () {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('RegisterByEmail', this.registerForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/login' })
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
    .register-container{
        background: #f5f5f5;

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
            margin: 0 160px;
            background-color: #3c81e9;
        }
    }
    input.el-input__inner{
            background-color: #f5f5f5;
        }
</style>
