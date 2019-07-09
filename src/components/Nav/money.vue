<template>
  <div class="logo-icon">
    <a href="/prepay">
      <!-- <img
        :src="moneyImage"
        alt="money"> -->
      <span> <svg-icon icon-class="cny" />{{ balance }}</span>
    </a>

  </div>
</template>
<script>
export default {
  name: 'Money',
  props: {
  },
  computed: {
    moneyImage() {
      return require('@/assets/navbar/money.png')
    }
  },
  created() {
    this.balance = this.$store.state.user.balance
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.logo-icon{
  height: 30px;
  margin: 10px;
  background: #1d1d1d;
  padding: 0px 10px;
  border-radius: 25%/50%;
  color: #fff;
  line-height: 30px;
  top: 25px;
  position: relative;
}
</style>
