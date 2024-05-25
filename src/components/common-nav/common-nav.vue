<template>
  <div class="common-nav">
    <nav-header title="导航" class="nav-header">
      <template #suffix>
        <div class="suffix">
          <div class="count">{{ routeList.length }}</div>
          <more-link class="more-link" />
        </div>
      </template>
    </nav-header>
    <nav-list class="nav-list">
      <div class="inner">
        <RouterLink
          v-for="route in routeList"
          :key="route.path"
          :to="route.path"
        >
          <nav-item
            class="nav-item"
            :icon="route.meta?.icon as string"
            :title="route.meta?.title as string"
          />
        </RouterLink>
      </div>
      <more-button class="more-button" />
    </nav-list>
  </div>
</template>

<script name="common-nav" setup lang="ts">
import navHeader from './nav-header.vue'
import moreLink from './more-link.vue'
import moreButton from './more-button.vue'
import navList from './nav-list.vue'
import navItem from './nav-item.vue'

import { routes } from '@/router'
const routeList = routes.filter((route) => {
  return route.path !== '/'
})
</script>

<style lang="less" scoped>
.common-nav {
  background-color: #fff;
  .nav-header {
    .suffix {
      display: flex;
      align-items: center;
      flex: 1;
      .count {
        margin-left: 20px;
        font-size: 28px;
        color: #3981f4;
        letter-spacing: 0;
        font-weight: 500;
      }
      .more-link {
        flex: auto;
        justify-content: flex-end;
        margin-right: 24px;
      }
    }
  }
  .nav-list {
    .inner {
      display: flex;
      column-gap: 12px;
      // padding: 0 0 32px;
      position: relative;
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
}
</style>
