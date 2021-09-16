<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:0;" class="icon-arrow">手机 电话卡</a>
              <div class="children">
                <!-- <p>我是真的无语了</p> -->
                <ul v-for="(item, i) in menuList" :key="i">
                  <li v-for="(pro, j) in item" :key="j">
                    <a
                      :href="pro ? `/#/product/${pro.id}` : ''"
                      class="pro-name"
                    >
                      <img
                        :src="pro ? pro.img : '/imgs/item-box-1.png'"
                        alt=""
                      />
                      {{ pro ? pro.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="" class="icon-arrow">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="" class="icon-arrow">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="" class="icon-arrow">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="" class="icon-arrow">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="" class="icon-arrow">耳机 音箱</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="" class="icon-arrow">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="" class="icon-arrow">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a href=""><img :src="item.img" alt="" /></a>
            <div class="swiper-button-prev"></div>
            <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
            <div class="swiper-button-next"></div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          :href="`/#/product/${item.id}`"
          v-for="(item, index) in adsList"
          :key="index"
        >
          <img :src="item.img" alt="" />
        </a>
      </div>
      <div class="banner">
        <a :href="`/#/product/30`">
          <img src="/imgs/banner-1.png" alt="" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2 class="title">手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a :href="`/#/product/12`">
              <img src="/imgs/mix-alpha.jpg" alt="" />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item, i) in phoneList" :key="i">
              <div class="item" v-for="(phone, j) in item" :key="j">
                <span :class="{ 'new-pro': j % 2 == 0 }">新品</span>
                <div class="item-img">
                  <img :src="phone.mainImage" alt="" />
                </div>
                <div class="item-info">
                  <h3>{{ phone.name }}</h3>
                  <p>{{ phone.subtitle }}</p>
                  <p class="price">{{ phone.price }}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar.vue'
//导入轮播图组件
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
  },
  data () {
    return {
      //控制轮播图的属性
      swiperOptions: {
        //自动播放
        autoplay: true,
        //形成回路
        loop: true,
        //轮播动画
        effect: 'cube',
        cubeEffect: {
          slideShadows: false,
          shadow: false,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        //上下页箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        //分页按钮
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

      },
      //轮播图自己的属性:id 图片地址
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-4.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-5.jpg'
        }
      ],
      //menuList
      menuList: [
        [
          {
            id: '30',
            img: '/imgs/item-box-1.png',
            name: '小米cc9',
          },
          {
            id: '31',
            img: '/imgs/item-box-2.png',
            name: '小米8青春版',
          },
          {
            id: '32',
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro',
          },
          {
            id: '33',
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区',
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        },
        {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        },
        {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        },
        {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        },
      ],
      phoneList: [[]]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$axios.get('products', {
        params: {
          categoryId: 100012,
          pageSize: 8
        }
      }).then(res => {
        // console.log(res)
        this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
      })
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.index {
  // margin-top: 500px;
  .swiper-box {
    position: relative;
    .nav-menu {
      position: absolute;
      width: 264px;
      z-index: 9;
      height: 100%;
      background-color: #33333361;
      .menu-wrap {
        height: 100%;
        padding: 26px 0;
        box-sizing: border-box;
        .menu-item {
          height: 50px;
          line-height: 50px;
          .icon-arrow {
            position: relative;
            display: block;
            margin-left: 30px;
            color: #fff;
            font-size: 16px;
            &:after {
              content: " ";
              position: absolute;
              top: 18px;
              right: 30px;
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            position: absolute;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            left: 264px;
            top: 0px;
            z-index: 11;
            border: 1px solid #e5e5e5;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                flex: 1;
                height: 75px;
                line-height: 75px;
                padding-left: 23px;
              }
              .pro-name {
                font-size: 14px;
              }
              img {
                width: 35px;
                height: 42px;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
      .swiper-button-prev {
        left: 274px;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    height: 130px;
    margin-bottom: 50px;
    a {
      display: block;
      height: 130px;
    }
  }
  .product-box {
    // height: 740px;
    background-color: $colorJ;
    .container {
      padding-bottom: 50px;
      .title {
        height: 71px;
        line-height: 71px;
        font-size: 22px;
        font-family: FZLanTingHeiS-R-GB;
        font-weight: bold;
        color: #333333;
      }
      .wrapper {
        display: flex;
        // margin-bottom: 50px;
        .banner-left {
          width: 224px;
          height: 619px;
        }
        .list-box {
          margin-left: 16px;
          .list {
            display: flex;
            justify-content: center;
            margin-bottom: 14px;
            &:last-child {
              margin-bottom: 0px;
            }
            .item {
              width: 236px;
              height: 302px;
              font-weight: bold;
              text-align: center;
              background-color: $colorG;
              span {
                display: inline-block;
                width: 67px;
                height: 24px;
                line-height: 24px;
                font-size: 14px;
                color: $colorG;
                margin-bottom: 20px;
                &.new-pro {
                  background-color: #7ecf68;
                }
                &.kill-pro {
                  background-color: #e82626;
                }
              }
              .item-img {
                img {
                  width: 236px;
                  height: 150px;
                }
              }
              .item-info {
                h3 {
                  font-size: 14px;
                  font-weight: bold;
                  color: $colorB;
                  margin-bottom: 6px;
                }
                p {
                  font-size: 12px;
                  font-weight: bold;
                  color: $colorD;
                }
                .price {
                  font-size: 14px;
                  font-weight: bold;
                  color: #f20a0a;
                  margin-top: 13px;
                  &::after {
                    content: " ";
                    width: 16px;
                    height: 12px;
                    @include bgImg(16px, 12px, "/imgs/icon-cart-hover.png");
                    margin-left: 5px;
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>