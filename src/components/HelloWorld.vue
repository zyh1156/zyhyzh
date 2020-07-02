<template>
  <article class="container-fluid">
    <section class="row banner">
      <div class="col-12 d-flex justify-content-center align-items-center text-center">
        <div>
          <h1 class="zyh">ZYHZYH</h1>
          <a href="/resume" class="d-block about font-weight-bold">About Me</a>
        </div>
      </div>
    </section>
    <section class="container font-weight-bold pt-3 box1">
      <div class="row">
        <div class="col-lg-6 col-12">
          <div>
            <div class="tips">最新</div>
            <div class="tit mt-4">关于Vue的研究</div>
            <div class="time mt-4">·6月23</div>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div>
            <div class="tips">最热</div>
            <div class="mt-4 tit">是什么蒙蔽了我的双眼</div>
            <div class="mt-4 time">·7月28</div>
          </div>
        </div>
      </div>
    </section>
    <section class="box2 row justify-content-center">
      <div class="container row">
        <div class="col-lg-6 col-12 me-img">
          <img class="img-fluid" src="@/assets/resume/user-img.png" alt />
        </div>
        <div class="col-6"></div>
      </div>
    </section>
    <section class="row">
      <div class="col-3"></div>
      <div class="col-3"></div>
      <div class="col-6"></div>
    </section>
    <!-- 四大分区 -->
    <section class="row">
      <div class="col-3"></div>
      <div class="col-3"></div>
      <div class="col-3"></div>
      <div class="col-3"></div>
    </section>
    <foot></foot>
  </article>
</template>

<script>
import foot from "../cube/footer";
export default {
  data() {
    return {};
  },
  components: {
    foot
  }
};
</script>
<style lang="scss" scoped>
.banner {
  height: 100vh;
  background: black
    url(https://gamevideo.wmupd.com/dota2media/media/ti10battlepass/match_predictions_bg.png)
    right center no-repeat;
  .zyh {
    color: #fff;
    font: 64px/1 -webkit-pictograph;
    letter-spacing: 6px;
  }
  .about {
    margin: 110px auto 0;
    width: 144px;
    height: 58px;
    line-height: 58px;
    border-radius: 29px;
    background-color: #fff;
  }
}
.box1 {
  .col-6 {
    height: 470px;
    padding-top: 340px;
    .tips {
    }
    .tit {
      font-size: 16px;
    }
    .time {
    }
  }
}
.box2 {
  background-color: black;
  height: 595px;
  .me-img {
    padding-top: 50px;
    img {
      width: 380px;
    }
  }
}
</style>
