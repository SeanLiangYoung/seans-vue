<template>
  <div v-show="true" :data="counter" class="crontab" />
</template>
<script>
export default {
  name: 'Crontab',
  props: {
    // 间隔时间
    interval: {
      type: Number,
      default: 1000
    },
    // 每次请求的callback
    callback: {
      type: Function,
      default: function() {
      }
    },
    // dispatch 名
    dispatch: {
      type: String,
      default: ''
    },
    // dispatch 传入的数据
    dispatchData: {
      type: Object,
      default: function() {
        return { }
      }
    },
    // dispatch 成功的回调
    dispatchOnSuccess: {
      type: Function,
      default: function() {
      }
    },
    // dispatch 失败的回调
    dispatchOnFailed: {
      type: Function,
      default: function() {
      }
    },
    // 停止的标志
    stop: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      counter: 0
    }
  },
  watch: {
    counter: function() {
      this._callback()
    }
  },
  mounted() {
    this.countdown()
  },
  methods: {
    onDispatch() {
      this.$store.dispatch(this.dispatch, this.dispatchData).then((response) => {
        if (this.dispatchOnSuccess && this.dispatchOnSuccess instanceof Function) {
          this.dispatchOnSuccess(response)
        }
      }).catch((response) => {
        if (this.dispatchOnFailed && this.dispatchOnFailed instanceof Function) {
          this.dispatchOnFailed(response)
        }
      })
    },
    countdown() {
      const self = this
      if (self.dispatch) {
        self.onDispatch()
        const timer = setInterval(function() {
          self.onDispatch()
          this.counter++
          if (self.stop) {
            clearInterval(timer)
          }
        }, self.interval)
      }
    },
    _callback() {
      if (this.callback && this.callback instanceof Function) {
        this.callback(...this)
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

