<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
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
      ]
    }
  }

}
</script>

<style lang="scss">
.index {
  // margin-top: 500px;
  .swiper-box {
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
      }
    }
  }
}
</style>