<template>
  <div class="text-button">
    <a :href="directed2"> {{ content }}
      <slot/>
    </a>
  </div>
</template>
<script>
export default {
  name: 'TextButton',
  props: {
    content: {
      type: String,
      default: ''
    },
    directed2: {
      type: String,
      default: '/'
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .text-button
  {
    font-size: 16px;
    color: #f6f7f8;
    margin: 4px
  }
</style>
