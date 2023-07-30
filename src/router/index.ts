import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from '@/views/index.vue';

export const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页',
    },
    component: Home,
  },
  {
    name: 'scroll',
    path: '/scroll',
    meta: {
      title: 'scroll事件',
    },
    component: () => import('@/views/scroll/scroll.vue'),
  },
  {
    name: 'geojson',
    path: '/geojson',
    meta: {
      title: 'd3绘制geojson图',
    },
    component: () => import('@/views/geojson/geojson.vue'),
  },
  {
    name: 'about',
    path: '/about',
    meta: {
      title: '关于',
    },
    component: () => import('@/views/about.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
