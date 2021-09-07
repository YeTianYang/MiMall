<template>
  <div>
    <NavHeader></NavHeader>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
export default {
  components: {
    NavHeader,
  }
}
</script>

<style>
/* 导入重置scss文件 */
@import "../assets/scss/reset.scss";
</style>