<template>
  <div class="pt-5">
    <table class="table text-center">
      <tbody>
        <tr>
          <td class="w-25">本金</td>
          <td>
            <input
              @input="getMoney"
              v-model="bj"
              type="text"
              class="form-control"
            />
          </td>
        </tr>
        <tr>
          <td>净赔率</td>
          <td>
            <input
              @input="getMoney"
              v-model="jpl"
              type="text"
              class="form-control"
            />
          </td>
        </tr>
        <tr>
          <td>胜率</td>
          <td>{{ sl }}</td>
        </tr>
        <tr>
          <td>投入</td>
          <td>{{ tr }}</td>
        </tr>
        <tr>
          <td>收益</td>
          <td>{{ sy }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bj: "",
      jpl: "",
      sl: "",
      tr: "",
      sy: "",
    };
  },
  methods: {
    getMoney() {
      let venom = 0.85;
      let b = parseFloat(this.jpl),
        p = 1 - b / venom / 2;
      let bj = parseFloat(this.bj);
      //   开始计算
      console.log(bj);
      console.log(b);
      if (isNaN(bj) || isNaN(b)) {
      } else {
        this.sl = p.toFixed(2);
        this.tr = ((bj * (p * b - (1 - p))) / b).toFixed(2);
        this.sy = (this.tr * b).toFixed(2);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.table td {
  vertical-align: middle;
}
</style>