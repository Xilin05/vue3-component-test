<template>
  <div class="component-form-test">
    测试动态表单页面

    <div class="component-box">
      <!-- <FormDetail /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import FormDetail from './form-detail.vue';
</script>

<style scoped lang="scss">
.component-form-test {
  width: 80%;
  height: auto;
  margin: 24px auto;
}
</style>
