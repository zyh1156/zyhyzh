<template>
  <article class="container-fluid bigbac">
    <div class="container">
      <!-- 头像 -->
      <div class="row">
        <div class="col-4 lbox">
          <div class="user-img pt-5 text-center overflow-hidden">
            <img class="rounded-circle" src="~@/assets/resume/user-img.png" alt />
          </div>
          <div class="pl-5">
            <h4 class="pt-4">张永铧</h4>
          </div>
        </div>
        <div class="col-8 rbox"></div>
      </div>
      <div></div> 
      <div></div>
    </div>
  </article>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.bigbac {
  background-image: url("~@/assets/resume/psc.png");
  .lbox {
    background-color: #f7f9fa;
  }
}
.user-img {
  img {
    width: 93px;
    height: 93px;
  }
}
</style>