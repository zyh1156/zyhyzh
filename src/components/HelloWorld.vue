<template>
  <article class="container-fluid">
    <head2></head2>
    <section class="row container">
      <div class="col-12"></div>
    </section>
    <section class="container box1">
      <div class="row">
        <div class="col-6">
          <div style="background-color:var(--indigo)">
            <div class="iconfont icon-GamePadyouxishoubing"></div>
            <h1>游戏</h1>
            <h5>Games</h5>
          </div>
        </div>
        <div class="col-6">
          <div style="background-color:var(--indigo)">
            <h1>音乐</h1>
            <h5>Music</h5>
          </div>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-6"></div>
      <div class="col-3"></div>
      <div class="col-3"></div>
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
import head2 from "../cube/header";
import foot from "../cube/footer";
export default {
  data() {
    return {};
  },
  components: {
    head2,
    foot
  }
};
</script>
<style lang="scss" scoped>
.box1 {
  color: #fff;
}
</style>
