<template>
  <div class="logo-icon">
    <a href="/prepay">
      <img
        :src="moneyImage"
        alt="money">
    </a>
  </div>
</template>
<script>
export default {
  name: 'Money',
  props: {
  },
  computed: {
    moneyImage () {
      return require('@/assets/navbar/money.png')
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.logo-icon{
  margin:10px;
}
</style>
