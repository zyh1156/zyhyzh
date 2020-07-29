<template>
  <section>
    <div class="box0 text-center">
      <div class="tit-sup">为什么坚持&nbsp;·&nbsp;想一想当初</div>
      <div class="zyhzyh">zyhzyh</div>
      <router-link class="d-flex more" to="/resume">
          <span class="iconfont icon-read"></span>
          <span>了解更多</span>
      </router-link>
    </div>
    <div class="box1"></div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.box0 {
  color: #fff;
  height: 100vh;
  padding-top: 40vh;
  background: url(https://gamevideo.wmupd.com/dota2media/media/ti10battlepass/match_predictions_bg.png)
      right center no-repeat,
    linear-gradient(to right, #030202, #1b292e);
  .tit-sup {
  }
  .zyhzyh {
    margin-top: 3vh;
    font-size: 60px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: -webkit-pictograph;
  }
  .more{
      color: #333;
      width: 144px;
      height: 48px;
      margin: 12vh auto 0;
      background: #fff;
      border-radius: 24px;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      .iconfont{
          font-size: 20px;
          margin-right: 10px;
      }
  }
}
</style>