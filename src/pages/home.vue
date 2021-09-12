<template>
  <div class="all">
    <nav-header></nav-header>
    <nav-footer></nav-footer>
    <!-- <roter-view></roter-view> -->
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
  components: {
    NavHeader,
    NavFooter,
  }
}
</script>

<style lang = "scss">
/* 导入重置scss文件 */
@import "../assets/scss/reset.scss";
.all {
  /* position: relative; */
}
</style>