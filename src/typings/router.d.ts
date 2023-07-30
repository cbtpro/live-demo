import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    /** 是否需要登录 */
    requiresAuth?: boolean;
    /** 页面title */
    title: string;
  }
}
