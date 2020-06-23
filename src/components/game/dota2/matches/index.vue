<template>
  <section>123</section>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getData() {
      let id = this.$route.params.match_id;
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