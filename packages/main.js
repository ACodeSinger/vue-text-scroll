
import textScroll from "./components/vue-text-scroll.vue";

textScroll.install = function (Vue) {
  Vue.component('text-scroll', textScroll);
}

export default textScroll;
