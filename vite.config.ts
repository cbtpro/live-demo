import path from 'path'
import { defineConfig, normalizePath } from 'vite'
import Inspect from 'vite-plugin-inspect'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver, VantImports } from '@vant/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Inspect({
      build: true,
      outputDir: '.vite-inspect',
    }),
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    AutoImport({
      imports: [VantImports()],
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
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
  css: {
    postcss: {
      plugins: [
        // require('tailwindcss'),
        require('autoprefixer'),
        postcsspxtoviewport8plugin({
          unitToConvert: 'px',
          viewportWidth: (file) => {
            const condition =
              normalizePath(file).includes(
                normalizePath(path.join('node_modules', 'ui1')),
              ) ||
              normalizePath(file).includes(
                normalizePath(path.join('node_modules', 'ui2')),
              ) ||
              normalizePath(file).includes(
                normalizePath(path.join('node_modules', 'ui3')),
              )
            const designWidth = condition ? 375 : 750
            return designWidth
          },

          unitPrecision: 5, // 单位转换后保留的精度
          propList: ['*'], // 能转化为vw的属性列表
          viewportUnit: 'vw', // 希望使用的视口单位
          fontViewportUnit: 'vw', // 字体使用的视口单位
          selectorBlackList: ['.van-qLoading'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
          minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
          mediaQuery: false, // 媒体查询里的单位是否需要转换单位
          replace: true, //  是否直接更换属性值，而不添加备用属性
          exclude: [], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
          include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
          landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
          landscapeUnit: 'vw', // 横屏时使用的单位
          landscapeWidth: 1024, // 横屏时使用的视口宽度
        }),
      ],
    },
  },
  server: {
    host: true,
  },
})
