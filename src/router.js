import Vue from "vue";
import VueRouter from 'vue-router'
//导入home组件
import Home from './pages/home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // redirect: '/index'
    }
  ]
})