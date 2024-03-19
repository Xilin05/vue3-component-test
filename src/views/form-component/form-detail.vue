<template>
  <div class="component-form-detail">
    <el-form>
      <FormItemComp :form-state="FormData" />
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ElForm } from 'element-plus';
import FormItemComp from './modules/form-item-comp.vue';
import FormData from './config.ts';
console.log('FormData', FormData);
</script>

<style scoped lang="scss"></style>
