<template>
    <swiper class="swiper-box" ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <div class="swiper-cont">1</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-cont">2</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-cont">3</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-cont">4</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-cont">5</div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </template>
  
  <script>
  import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
  import "swiper/css/swiper.css";
  export default {
    data() {
      return {
        swiperOptions: {
          mousewheel: true,
          direction: "vertical",
          pagination: {
            el: ".swiper-pagination"
          }
        }
      };
    },
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper;
      }
    },
    mounted() {}
  };
  </script>
  <style lang="scss" scoped>
  .swiper-box {
    width: 100vw;
    height: 100vh;
  }
  </style>
  