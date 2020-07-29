<template>
  <article class="container-fluid">
    <div class="row sel-box" :style="bw" @mousemove="move">
      <div class="col-md-6 pr-5 col-sm-12 hr d-flex align-items-center justify-content-end">
        <div class="pr-5">
          <h1>
            <span class="tit mr-3">人力资源</span>
            <small>看这边</small>
          </h1>
          <h5 class="mt-5">说技术难免“隔行如隔山”</h5>
          <h3>
            <a href="/resume/resume">或许你更想听听我的故事</a>
          </h3>
        </div>
      </div>
      <div class="col-md-6 pl-5 col-sm-12 skill d-flex align-items-center justify-content-start">
        <div class="pl-5">
          <h1>
            <span class="tit mr-3">技术总监</span>
            <small>看这边</small>
          </h1>
          <h5 class="mt-5">比起过往经历，你可能更在意</h5>
          <h3>
            <a href="/resume/welcome">“我到底能做什么”</a>
          </h3>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
let w, h;
export default {
  data() {
    return {
      bw: {
        backgroundImage: "linear-gradient(90deg, #fff 50%, gray 50%)"
      }
    };
  },
  methods: {
    move(evt) {
      // 坐标轴
      let x = evt.clientX - w;
      let y = h - evt.clientY;
      let tan = (Math.atan(x / y) * 180) / Math.PI;
      if (y > 0) {
        tan = 180 + tan;
      } else if (x > 0) {
        tan = 360 + tan;
      }
      this.bw.backgroundImage =
        "linear-gradient(" + tan + "deg, #fff 50%, gray 50%)";
    },
    getwh() {
      w = window.innerWidth / 2;
      h = window.innerHeight / 2;
    }
  },
  mounted() {
    this.getwh();
  }
};
</script>
<style lang="scss" scoped>
.sel-box {
  height: 100vh;
  transition: all .4s linear;
  .tit {
    filter: invert(.8);
  }
}
</style>