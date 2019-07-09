<template>
  <div class="tab-menu row">
    <span
      id="cover"
      :style="coverStyle"
    />
    <ul id="list">
      <li
        v-for="(item, index) in buttons"
        :class="isActive(index)"
        :key="index"
        @click="clickOne(index, $event)">{{ $t(item.name) }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ButtonSilder',
  props: {
    buttons: {
      type: Array,
      required: true,
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      // left: 0,
      index: this.activeIndex,
      width: 150 - 4,
    };
  },
  computed: {
    left() {
      return this.index * this.width;
    },
    coverStyle() {
      return {
        left: `${this.left}px`,
      };
    },
  },

  methods: {

    isActive(index) {
      if (index === this.index) {
        return {
          active: true,
        };
      }
      return {};
    },
    clickOne(index, e) {
    //   e.nextAll().removeClass('active')
    //   e.prevAll().removeClass('active')
      this.index = index;
      // this.left =
    //   e.addClass('active')
    },
  },
};
</script>

<style lang="scss" scoped>
    .tab-menu{
        overflow: hidden;
        position: relative;
        border-radius: 20px;
        color: #3c8ee9;
        background: white;
        height: 40px;
        width: 450px;
        margin: 0 375px;

        ul{
            padding: 0;
            margin: 0;
            list-style: none;
        }

        li{
            float: left;
            text-align: center;
            position: relative;
            width: 150px;
            font-size: 14px;
            color: #333333;
            padding: 12px 20px;
        }
        li:hover{
            cursor: pointer;
        }

        span{
            margin: 4px;
            display: inline-block;
            height: 32px;
            width: 150px;
            position: absolute;
            top: 0;
            border-radius: 20px;
            background-color: #3c8ee9;
            transition: left .4s;
            -webkit-transition: left .4s;
            -moz-transition: left .4s;
        }

        .active{
            color: #fff;
        }
    }
</style>
