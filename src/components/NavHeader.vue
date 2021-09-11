<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:" class="my-cart" @click="toCart">
            <span class="icon-cart"></span>
            购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a :href="`/#/product/${item.id}`" target="blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt="" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyworld" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data () {
    return {
      username: '',
      phoneList: [],
    }
  },
  //过滤器
  filters: {
    currency (val) {
      if (!val) {
        return '0,00'
      } else {
        return '￥' + val.toFixed(2) + '元'
      }
    }
  },
  mounted () {
    this.getProductList()

  },
  methods: {
    //前往登录页面
    login () {
      this.$router.push('/login')
    },
    //前往购物车页面
    toCart () {
      this.$router.push('/cart')
    },
    //获取手机产品列表
    getProductList () {
      this.$axios.get('/products', {
        params: {
          categoryId: '100012'
        }
      }).then(res => {
        // console.log(res)
        if (res.list.length > 6) {
          this.phoneList = res.list.slice(0, 6)
        }
        // this.phoneList = res.list
      })
    },


  },

}
</script>

<style lang ="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        margin-right: 17px;
        color: #b0b0b0;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #fff;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart.png");
          /* display: inline-block;
          width: 16px;
          height: 12px;
          background: url("/imgs/icon-cart.png") no-repeat center;
          background-size: contain; */
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      .header-logo {
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          /* background-color: blue; */
          &:before {
            content: " ";
            @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
            /* display: inline-block;
            width: 55px;
            height: 55px;
            background: url("/imgs/mi-logo.png") no-repeat center;
            background-size: 55px; */
            transition: margin 0.2s;
          }
          &:after {
            content: " ";
            @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px);
            /* display: inline-block;
            width: 55px;
            height: 55px;
            background: url("/imgs/mi-home.png") no-repeat center;
            background-size: 55px; */
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          span {
            cursor: pointer;
            margin-right: 21px;
            font-family: FZLanTingHeiS-R-GB;
            &:hover {
              color: $colorA;
            }
          }

          &:hover {
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0px;
            width: 1226px;
            height: 0px;
            opacity: 0;
            border-top: 1px solid #e5e5e5;
            overflow: hidden;
            transition: all 0.5s;
            ul {
              width: 100%;
              .product {
                position: relative;
                width: 16.6%;
                height: 220px;
                float: left;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                a {
                  display: inline-block;
                }
                img {
                  width: auto;
                  height: 110px;
                  margin-top: 26px;
                }
                .pro-img {
                  height: 137px;
                }
                .pro-name {
                  color: #333;
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                }
                .pro-price {
                  color: $colorA;
                  font-weight: bold;
                }
                &:before {
                  content: " ";
                  position: absolute;
                  top: 28px;
                  right: 0;
                  width: 1px;
                  height: 100px;
                  border-right: 1px solid $colorF;
                }
                &:last-child::before {
                  display: none;
                }
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            /* display: inline-block;
            width: 18px;
            height: 18px;
            background: url("/imgs/icon-search.png") no-repeat center;
            background-size: contain; */
            margin-left: 18px;
          }
        }
      }
    }
  }
}
</style>