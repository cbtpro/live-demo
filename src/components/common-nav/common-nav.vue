<template>
  <div class="common-nav">
    <nav-header />
    <nav-list class="nav-list">
      <RouterLink v-for="route in routes" :key="route.path" :to="route.path">
        <nav-item
          class="nav-item"
          :icon="route.meta?.icon as string"
          :title="route.meta?.title as string"
        />
      </RouterLink>
    </nav-list>
  </div>
</template>

<script name="common-nav" setup lang="ts">
import navHeader from './nav-header.vue'
import navList from './nav-list.vue'
import navItem from './nav-item.vue'

import { routes } from '@/router'
</script>

<style lang="less" scoped>
.common-nav {
  background-color: #fff;
  .nav-list {
    a:first-of-type {
      margin-left: 24px;
    }

    a:last-of-type {
      margin-right: 24px;
    }
    .nav-item {
    }
  }
}
</style>
