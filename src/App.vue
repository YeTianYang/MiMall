<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      res: {}
    }
  },
  components: {
  },
  mounted () {
    //本地json
    // this.$axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })
    //本地集成mockjs实现数据mock
    this.$axios.get('/user/login').then((res) => {
      this.res = res
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
