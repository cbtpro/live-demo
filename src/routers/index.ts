import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from '@/views/index.vue';

const routes: RouteRecordRaw[] = [
  {
      name: 'home',
      path: '/',
      component: Home,
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/about.vue'),
  }
];


export default createRouter({
  history: createWebHashHistory(),
  routes,
});
