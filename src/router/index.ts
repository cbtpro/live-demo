import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '@/views/index.vue'

export const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页',
      icon: 'home-o',
    },
    component: Home,
  },
  {
    name: 'common-nav',
    path: '/common-nav',
    meta: {
      title: '导航',
      icon: 'home-o',
    },
    component: () => import('@/components/common-nav/common-nav.vue'),
  },
  {
    name: 'demo1',
    path: '/demo1',
    meta: {
      title: 'demo1',
    },
    component: () => import('@/views/demo1/index.vue'),
  },
  {
    name: 'scroll',
    path: '/scroll',
    meta: {
      title: 'scroll',
    },
    component: () => import('@/views/scroll/scroll.vue'),
  },
  {
    name: 'geojson',
    path: '/geojson',
    meta: {
      title: 'd3',
    },
    component: () => import('@/views/geojson/geojson.vue'),
  },
  {
    name: 'v-html',
    path: '/v-html',
    meta: {
      title: 'v-html',
      requiresAuth: false,
    },
    component: () => import('@/views/v-html/index.vue'),
  },
  {
    name: 'rainbows',
    path: '/rainbows',
    meta: {
      title: '彩虹',
      requiresAuth: false,
    },
    component: () => import('@/views/rainbows/index.vue'),
  },
  {
    name: 'about',
    path: '/about',
    meta: {
      title: '关于',
      requiresAuth: false,
    },
    component: () => import('@/views/about.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
