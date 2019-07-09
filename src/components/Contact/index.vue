<template>
  <el-row class="contact">
    <el-row class="contact-header">
      <div class="contact-title">{{ title }}</div>
      <div class="contact-subtitle">{{ subtitle }}</div>
    </el-row>
    <el-row class="contact-form">
      <el-form ref="contact" :model="contact">
        <el-row>
          <el-col :span="7">
            <el-form-item label="">
              <el-input
                v-model="contact.name"
                placeholder="请在此处留下您的姓名"
                size="large"/>
            </el-form-item>
          </el-col>
          <el-col :span="1" style="height: 1px;"/>
          <el-col :span="16">
            <el-form-item label="">
              <el-input
                v-model="contact.email"
                placeholder="请在此处留下您的邮箱"
                size="large"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="">
          <el-input
            v-model="contact.commit"
            :autosize="{ minRows: 5, maxRows: 10}"
            placeholder="请在此处留下您的疑问，我们会通过邮件，尽快回复您！"
            type="textarea"
            size="large"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">问题提交</el-button>
        </el-form-item>
      </el-form>

    </el-row>
  </el-row>

</template>

<script>
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
      default: function () {}
    }
  },
  data () {
    return {
      contact: {
        name: '',
        email: '',
        commit: ''
      }
    }
  },
  methods: {
    onSubmit: function () {
      console.log(this.contact)
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
    }
}

.el-input__inner{
              height: 50px;
              line-height: 50px;
              background: rgba(51,51,51,0.4)
            }
</style>
