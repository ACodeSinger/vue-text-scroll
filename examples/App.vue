<template>
  <div id="app">
    <span>文字滚动组件</span>
    <text-scroll :text-group="textGroup"></text-scroll>
  </div>
</template>

<script>
import textScroll from '../packages/components/vue-text-scroll.vue';

export default {
  name: 'app',
  components: {
    textScroll,
  },
  data() {
    return {
      textGroup: [
        '夕阳之歌',
        '女人花',
        '明天你要嫁给我',
        '似是故人来',
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
