<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { RouterView } from 'vue-router'

import MainMenu from '@/components/MainMenu.vue'
</script>

<template>
  <div class="container">
    <!-- <div class="top">
      <main-menu />
    </div> -->
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>
<style lang="less">
@import url(@/assets/reset.scss);
</style>
<style lang="less" scoped>
.container {
  font-size: 36px;
  width: 100vw;
  height: 100vh;
  background-color: #eff2f6;
  .top {
    width: 750px;
  }
  .content {
    width: 750px;
  }
}
</style>
