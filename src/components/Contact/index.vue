<template>
  <el-row class="contact">
    <el-row class="contact-header">
      <div class="contact-title">
        {{ title }}
      </div>
      <div class="contact-subtitle">
        {{ subtitle }}
      </div>
    </el-row>
    <el-row class="contact-form">
      <el-form ref="contact" :model="contact" :rules="contactRules">
        <el-row>
          <el-col :span="7">
            <el-form-item prop="username" label="">
              <el-input
                v-model="contact.username"
                :placeholder="getContactUsernamePlaceholder"
                size="large"
              />
            </el-form-item>
          </el-col>
          <el-col :span="1" style="height: 1px;" />
          <el-col :span="16">
            <el-form-item prop="email" label="">
              <el-input
                v-model="contact.email"
                :placeholder="getContactEmailPlaceholder"
                size="large"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item prop="content" label="">
          <el-input
            v-model="contact.content"
            :autosize="{ minRows: 5, maxRows: 10}"
            :placeholder="getContactContentPlaceholder"
            type="textarea"
            size="large"
          />
        </el-form-item>

        <el-form-item>
          <el-button round type="primary" @click="onSubmit">
            {{ $t('contact.submit') }}
          </el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </el-row>
</template>

<script>
import { validContactName, validEmail, validContactContent } from '@/utils/validate.js'
import { getErrorMessage } from '@/utils/errorHandler'

export default {
  name: 'Contact',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    callback: {
      type: Function,
      default() {}
    }
  },
  data() {
    const checkUsername = (rule, value, callback) => {
      if (!validContactName(value)) {
        callback(new Error(this.$t('validation.invalidContactName')))
      }
      callback()
    }
    const checkEmail = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error(this.$t('validation.invalidEmail')))
      }
      callback()
    }
    const checkContent = (rule, value, callback) => {
      if (!validContactContent(value)) {
        callback(new Error(this.$t('validation.invalidContactContent')))
      }
      callback()
    }
    return {
      contact: {
        username: '',
        email: '',
        content: ''
      },
      contactRules: {
        username: [{ validator: checkUsername, required: true, trigger: 'blur' }],
        email: [{ validator: checkEmail, required: true, trigger: 'blur' }],
        content: [{ validator: checkContent, required: true, trigger: 'blur' }]
      }
    }
  },
  computed: {
    getContactUsernamePlaceholder() {
      return this.$t('contact.username.placeholder')
    },
    getContactEmailPlaceholder() {
      return this.$t('contact.email.placeholder')
    },
    getContactContentPlaceholder() {
      return this.$t('contact.content.placeholder')
    }
  },
  methods: {
    onSubmit() {
      // validate
      // dispatch
      this.$refs.contact.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Contact', this.contact).then((response) => {
            this.loading = false
            console.log(response)
            this.$message({
              message: response,
              type: 'success'
            })
            this.$refs.contact.resetFields()
          }).catch((code) => {
            console.log(code)
            // this.$message('error')
            this.$message({
              message: this.$t(getErrorMessage(code)),
              type: 'error'
            })
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
.contact{
    background-color: #fff;
    .contact-header{
        width: 1200px;
        margin: auto;
        padding: 68px 30px;
        height: 220px;
        .contact-title{
            font-size: 33px;
            color: #333;
            text-align: center;
        }
        .contact-subtitle{
          padding-top: 30px;
          padding-bottom: 60px;
          font-size: 16px;
          color: #333;
          text-align: center;
        }
    }
    .contact-form{
      width: 1200px;
      margin: auto;
      .el-row.el-form-item{

        height: 50px;
        line-height: 50px;
        .el-form-item__content{
          height: 50px;
          line-height: 50px;
          .el-input {
            height: 50px;
            line-height: 50px;

          }
        }
      }

      .el-button{
        margin: 54px 435px 114px;
        height: 50px;
        width: 330px;
      }
      .el-form-item {
        margin-bottom: 30px;
      }
    }
}

.el-input__inner{
              height: 50px;
              line-height: 50px;
              background: rgba(51,51,51,0.4)
            }
</style>
