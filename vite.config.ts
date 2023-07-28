import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  /** 新建项目第一步，设置base为'./'，打包后的assets以'./'开头,可以将项目部署在任何目录 */
  base: './',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  server: {
    host: '0.0.0.0',
    hmr: {
      clientPort: 443,
    },
  },
});
