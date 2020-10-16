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
          <td></td>
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
      let venom = .85;
      let b = parseFloat(this.jpl),
        p = 1 - b / venom / 2;
        b=3;
        p=0.4;
      let bj = parseFloat(this.bj);
      //   开始计算
      if (isNaN(bj) || isNaN(b)) {
      } else {
        this.sl = p.toFixed(2);
        this.tr = ((b * p - 1) / (b - 1));
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