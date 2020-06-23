<template>
  <section>
    <table class="table text-center">
      <thead>
        <tr>
          <th>banner</th>
          <th>leagueid</th>
          <th>name</th>
          <th>ticket</th>
          <th>tier</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(dl,index) in dataList" v-bind:key="index">
              <td>{{dl.banner}}</td>
              <td>{{dl.leagueid}}</td>
              <td>{{dl.name}}</td>
              <td>{{dl.ticket}}</td>
              <td>{{dl.tier}}</td>
          </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  </section>
</template>
<script>
export default {
  data() {
    return {
      dataList: []
    };
  },
  methods: {
    getData() {
      this.axios("https://api.opendota.com/api/leagues").then(res => {
        this.dataList = res.data;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
section {
  color: red;
}
</style>