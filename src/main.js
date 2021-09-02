import Vue from 'vue'
//导入路由
import router from './router'
import axios from 'axios'
Vue.prototype.$axios = axios

import App from './App.vue'
//接口基地址
// axios.defaults.baseURL = '/api';

axios.defaults.timeout = 8000
//响应拦截器
axios.interceptors.response.use(function (response) {
  //接口获得的值为response.data
  let res = response.data;
  //状态码==0 获取数据
  if (res.status == 0) {
    return res.data
    //登入信息错误，跳转到登入页面
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
