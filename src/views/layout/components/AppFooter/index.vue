<template>
  <section class="app-footer inline">
    <div>
      <span>© 2019 SeanLiang</span>
      <span>京ICP备xxxxxxx号</span>
      <span>京公网安备xxxxxxxxx号</span>
    </div>
  </section>
</template>

<script>
// import { mapGetters } from 'vuex'
// import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: {
  },
  data () {
    return {

    }
  },
  computed: {
    // ...mapGetters([
    //   'permission_routers',
    //   'sidebar'
    // ]),
    variables () {
      return variables
    }
  }
}
</script>

<style lang="scss" scoped>
.app-footer{
  height: 100px;
  overflow: hidden;
  background-color: #313131;

  div{
    height: 100%;
    line-height: 100px;
    text-align: center;
    font-size: 14px;
    color: #f6f7f8;
  }
}
</style>
