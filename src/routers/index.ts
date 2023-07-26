import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        name: 'home',
        path: '/home',
        component: () => import('../views/index.vue')
    },
];


export default createRouter({
  history: createWebHashHistory(),
  routes,
});
