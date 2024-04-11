import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { vite2Ext } from 'apite'
import UnoCSS from 'unocss/vite'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { visualizer } from 'rollup-plugin-visualizer'

const lifecycle = process.env.npm_lifecycle_event

export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  console.log(env)
  return {
    esbuild: {
      drop: []
    },
    server: {
      host: true,
      port: Number(env.VITE_PORT),
      proxy: {
        '^/basic-api': {
          target: 'http://portenergy.demo.polarwin.cn/basic-api',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/basic-api/, '')
        }
      }
    },
    build: {
      sourcemap: true,
      // terserOptions: {
      //   compress: {
      //     drop_console: false,
      //     drop_debugger: false,
      //   },
      // },
      chunkSizeWarningLimit: 5000,
      rollupOptions: {
        output: {
          // manualChunks: {
          //   vendor
          // },
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            //静态资源分拆打包
            // 可参考https://www.cnblogs.com/jyk/p/16029074.html
            // node包插件打包在一起
            if (id.includes('node_modules')) {
              return 'vendors'
            }
          }
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      }),
      vite2Ext({
        dir: 'mock'
      }) as any,
      // Components({
      //   dts: true,
      //   resolvers: [AntDesignVueResolver()],
      //   include: [/\.vue$/, /\.tsx$/],
      // }),
      vueSetupExtend(),
      lifecycle === 'report' ? visualizer({ gzipSize: true, open: true, brotliSize: true, filename: 'report.html' }) : null
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url))
        }
      ]
    },
    css: {
      preprocessorOptions: {
        less: {
          // modifyVars: generateModifyVars(),
          javascriptEnabled: true
        }
      }
    }
  }
})
