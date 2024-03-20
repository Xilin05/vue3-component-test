<template>
  <div class="layout-container">
    <header class="layout-header"><Header /></header>
    <section class="layout-section">
      <router-view></router-view>
    </section>
    <footer class="layout-footer"></footer>
  </div>
</template>

<script setup lang="ts">
import Header from './header/index.vue';
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
  overflow: hidden;

  section {
    height: 100%;
  }
}
</style>
