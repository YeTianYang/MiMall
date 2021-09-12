<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">河畔一角主页</a>
      <a href="">Vue全栈课程</a>
      <a href="">React全家桶课程</a>
      <a href="">微信支付专项课程（H5+小程序+Node+Mongo）</a>
    </div>
    <div class="copyright">
      Copyright @2019
      <a href="http://www.imooc.com/u/index/allcourses" class="domain"
        >mi.future.com</a
      >
      All Rights Reserved
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'

}
</script>
<style lang ="scss">
@import "../assets/scss/config.scss";
.footer {
  text-align: center;
  height: 234px;
  background-color: #333;
  border-top: 4px solid $colorA;
  box-sizing: border-box;
  color: #999;
  font-size: 16px;
  line-height: 28px;
  .footer-logo {
    margin-top: 46px;
    img {
      width: 53px;
    }
    p {
      margin-top: 13px;
    }
  }
  .footer-link {
    margin-top: 31px;

    a {
      color: #999;
      &:after {
        content: " ";
        /* width: 1px; */
        border-right: 1px solid #999;
        margin: 0 5px;
      }
      &:last-child:after {
        display: none;
      }
    }
  }
  .copyright {
    .domain {
      color: $colorA;
      margin: 0 3px;
    }
  }
}
</style>