<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
      v-for="(item,index)
      in photoList"
      :key="index"
    >
      <img :src="item" alt="">
    </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'Home',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      photoList: [
        'https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20210716/93a5b5a907b646979214dd47226cf640.png',
        'https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20210826/1b7c58ada0c24ff9b7e9238ae902a322.png',
        'https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20210531/5a098f97ef6a47c985901fcd69695707.png',
        'https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20210727/06fcf958e1f84cb2b74122c81f754803.png',
        'https://ydw-b2c.oss-cn-beijing.aliyuncs.com/20201124/bf76d403570a47e79c707ec03de78636.png'
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false);
  }
}
</script>

<style scoped>
  .recommendPage .swiper-container{
    position: relative;
    width: 100%;
  }
  .recommendPage .swiper-container .swiper-slide{
    width: 100%;
    color: #000;
    font-size: 16px;
    text-align: center;
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    bottom: 5px;
    left: 0;
    width: 100%;
  }
  .recommendPage .swiper-container .swiper-slide img{
    width: 90%;
    margin-left: -4px;
    border-radius: 7px;
    margin-top: 30px;
  }
</style>
