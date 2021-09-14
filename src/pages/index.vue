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
              <a href="">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="">耳机 音箱</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="">生活 箱包</a>
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
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-pox"></div>
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
      ]
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
}
</style>