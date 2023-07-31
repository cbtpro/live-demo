<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { RouterView } from 'vue-router'

import MainMenu from '@/components/MainMenu.vue'
</script>

<template>
  <div class="container">
    <div class="left">
      <main-menu />
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  .left {
    width: 100px;
  }
  .content {
  }
}
</style>
