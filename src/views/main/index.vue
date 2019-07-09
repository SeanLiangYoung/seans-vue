<template>
  <div class="main-container">
    <!-- <component :is="currentRole"/> -->
    <!-- <a href="#service"/> -->
      <banner
        :content-width="1200"
        :content-height="305">
        <template slot="title">{{ $t(main.title) }}</template>
        <template slot="content">
          <small-box
            v-for="(item, index) in main.item"
            :item="item"
            :key="index"
            :col="main.item.length"
            :class="smBoxClass(index)"
          />
        </template>
      </banner>

      <contact title="问题反馈" subtitle="请在下方留下您问题及联系方式，我们会尽快联系你"/>
    <div class="qq" style="background-image: url(./static/icon/qq.png)">
      <a
        target="_blank"
        href="http://wpa.qq.com/msgrd?v=3&uin=809874509&site=qq&menu=yes">
        <p>在线客服</p>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '@/components/Banner'
import SmallBox from '@/components/SmallBox'
import Contact from '@/components/Contact'
// import adminMain from './admin'
// import editorMain from './editor'

export default {
  name: 'Main',
  components: {
    Banner,
    SmallBox,
    Contact
  },
  // components: { adminMain, editorMain },
  data () {
    return {
      currentRole: 'adminMain'
    }
  },
  computed: {
    ...mapGetters([
      'roles',
      'main'
    ]),
    main () {
      return this.main
    }
  },
  methods: {
    smBoxClass (index) {
      return 'sm-box-' + index +
        ' '
    }
  }
}
</script>
<style lang="scss" scoped>
#app .main-container{
  margin-left: 0px;
  .qq{
    width: 80px;
    height: 90px;
    position: fixed;
    top: 600px;
    right: 0px;
    a{
      width: 80px;
      height: 90px;
      p{
        position: relative;
        width: 40px;
        top: 38px;
        left: 40px;
        font-size: 14px;
      }
    }
  }
}
</style>
