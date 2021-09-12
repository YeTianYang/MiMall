<template>
  <div class="all">
    <nav-header></nav-header>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
    <!-- <roter-view></roter-view> -->
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'
import ServiceBar from '../components/ServiceBar.vue'
export default {
  components: {
    NavHeader,
    NavFooter,
    ServiceBar,
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