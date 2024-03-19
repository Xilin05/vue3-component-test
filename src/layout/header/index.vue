<template>
  <div class="component-layout-header"></div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const { options } = useRouter()
const routers = options.routes || []

const mainRouters =
  routers.filter((route: any) => route.name.includes('Layout'))?.[0]
    ?.children || []
console.log('router', mainRouters)
</script>

<style scoped lang="scss"></style>
