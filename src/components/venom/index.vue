<template>
  <section class="container-fluid pt-4">
      <!-- 标题 -->
    <div class="text-center">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-success">凯利公式</button>
        <button type="button" class="btn btn-secondary">Right</button>
      </div>
    </div>
    <!-- 表格内容 -->
    <kelly></kelly>
  </section>
</template>
<script>
import kelly from './kelly'
export default {
  data() {
    return {
        
    };
  },
  components:{
      kelly
  }
};
</script>