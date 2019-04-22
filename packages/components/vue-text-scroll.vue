<template>
  <div class="TextScroll" ref="textScroll" :style="textScrollStyle">
    <div class="TextScroll-wrapper" :style="wrapperStyle">
      <div class="TextScroll-item" v-for="(item, key) in textGroup"
           :style="itemStyle"
           :key="key">{{ item }}</div>
      <div class="TextScroll-item" :style="itemStyle">{{ textGroup[0] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextScroll',
  props: {
    width: {
      type: [Number, String],
      default: '100%',
    },
    height: {
      type: [Number, String],
      default: '36',
    },
    letterSpacing: {
      type: [Number, String],
      default: 0,
    },
    background: {
      type: String,
      default: '#ccc',
    },
    color: {
      type: String,
      default: '#fff',
    },
    textGroup: {
      type: Array,
      default: () => (['暂无内容']),
    },
    textStyle: {
      type: Object,
      default: () => ({}),
    },
    timeout: {
      type: [Number, String],
      default: 2000,
    },
    animationTime: {
      type: [Number, String],
      default: 800,
    },
  },
  watch: {
    textIndex(newVal) {
      this.moveToLast = false;
      if (newVal === 0) {
        setTimeout(() => {
          this.moveToLast = true;
        }, this.animationTime + 100);
      }
    },
  },
  computed: {
    textScrollStyle() {
      return {
        width: this.width.indexOf('%') !== -1 ? this.width : `${this.width}px`,
        height: this.height.indexOf('%') !== -1 ? this.height : `${this.height}px`,
        background: this.background,
        color: this.color,
        textAlign: 'center',
        overflow: 'hidden',
        borderRadius: '5px',

      };
    },
    itemStyle() {
      return Object.assign({}, this.textStyle, {
        width: '100%',
        lineHeight: `${this.height}px`,
        letterSpacing: `${this.letterSpacing}px`,
      });
    },
    wrapperStyle() {
      return this.moveToLast
        ? {
          position: 'relative',
          marginTop: 0,
          transition: 'none',
        }
        : {
          position: 'relative',
          marginTop: `-${this.wrapperMarginTop}px`,
          transition: `all ${this.animationTimeFormat}s`,
        };
    },
    wrapperMarginTop() {
      return this.textIndex === 0
        ? this.textGroup.length * this.height
        : this.textIndex * this.height;
    },
    animationTimeFormat() {
      return (this.animationTime / 1000).toFixed(1);
    },
  },
  data() {
    return {
      moveToLast: true,
      textIndex: 0,
      timer: null,
    };
  },
  methods: {
    animation() {
      if (this.textGroup.length > 1) {
        this.timer = setInterval(() => {
          this.textIndex = (this.textIndex + 1) % this.textGroup.length;
        }, this.timeout);
      }
    },
  },
  mounted() {
    this.animation();
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
</style>
