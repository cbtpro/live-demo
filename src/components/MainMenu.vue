<template>
  <div class="main-menu">
    <ul class="menu">
      <van-grid :border="false" :column-num="3">
        <van-grid-item v-for="route in routes" :key="route.path">
          <RouterLink :to="route.path">{{ route.meta?.title }}</RouterLink>
        </van-grid-item>
      </van-grid>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { routes } from '../router'

defineOptions({
  name: 'main-menu',
})
</script>

<style lang="less" scoped>
.main-menu {
  width: 100%;
  .menu {
    .item {
      list-style: none;
    }
  }
}
</style>
