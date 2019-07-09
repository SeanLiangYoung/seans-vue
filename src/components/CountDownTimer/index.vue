<template>
  <span :endTime="endTime" :callback="callback">
    <slot v-if="unfinished" name="content"/>
    <slot v-if="finished" name="end-content"/>
  </span>
</template>
<script>
export default {
  props: {
    endTime: {
      type: Number,
      default: 0
    },
    callback: {
      type: Function,
      default: function () {
        console.log('Count Down Timer Default Callback, this: ', this)
      }
    }
  },
  data () {
    return {
      finished: false,
      t: 0
    }
  },
  computed: {
    // finished: function() {
    //   const now = new Date().getTime() / 1000
    //   if (this.endTime > now) {
    //     return false
    //   }
    //   return true
    // },
    unfinished: function () {
      return !this.finished
    }
  },
  watch: {
    finished: function () {
      console.log('status changed')
      this._callback()
    },
    t: function () {
      this.$emit('onTimerChange', this.t)
    }
  },
  mounted () {
    this.countdown(this.endTime)
  },
  finished () {
    if (this.finished) {
      console.log('finished')
    } else {
      console.log('not finished')
    }
  },
  methods: {
    countdown (timestamp) {
      const self = this
      const timer = setInterval(function () {
        const nowTime = new Date()
        const endTime = new Date(timestamp * 1000)
        self.t = parseInt((endTime.getTime() - nowTime.getTime()) / 1000)
        if (self.t < 0) {
          self.finished = true
          clearInterval(timer)
        }
        // self._callback()
      }, 1000)
    },
    _callback () {
      if (this.callback && this.callback instanceof Function) {
        this.callback(...this)
      }
    }
  }
}
</script>
