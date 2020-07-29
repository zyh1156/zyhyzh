<template>
  <swiper class="swiper-box" ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <div class="w-100 h-100 d-flex align-items-center justify-content-center text-center box0">
        <div>
          <h1 class="zyh">ZYHZYH</h1>
          <h5>的网站</h5>
          <h3>该怎么写</h3>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="w-100 h-100 d-flex align-items-center justify-content-center text-center box1">
        <div>
          <h5>可能在于</h5>
          <h2>你想了解什么</h2>
        </div>
        <div></div>
      </div>
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
import $ from "jquery";
export default {
  data() {
    return {
      swiperOptions: {
        mousewheel: true,
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination"
        },
        on: {
          slideNextTransitionEnd: function() {
            console.log(this.activeIndex);
          }
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
.zyh {
  font: 64px/1 -webkit-pictograph;
}
// 动画开始前
.swiper-slide {
  .box0 {
    h5,
    h3 {
      opacity: 0;
      transition: all 0.8s;
    }
    h5 {
      transform: translateY(-60px);
    }
    h3 {
      transform: translateY(-100px);
    }
  }
}
// 动画结束后
.swiper-slide-active {
  .box0 {
    h5,
    h3 {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
  