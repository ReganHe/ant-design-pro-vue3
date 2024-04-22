import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import UnoCSS from 'unocss/vite'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { visualizer } from 'rollup-plugin-visualizer'

const lifecycle = process.env.npm_lifecycle_event

export default defineConfig(({ command, mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  console.log(env)
  return {
    base: env.VITE_PUBLIC_PATH,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url))
        }
      ]
    },
    server: {
      host: true,
      port: Number(env.VITE_PORT),
      proxy: {
        '^/api': {
          target: 'http://portenergy.demo.polarwin.cn',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/basic-api')
        }
      }
    },
    build: {
      target: 'es2015',
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: false
        }
      },
      minify: 'terser',
      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 2000
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
      // Components({
      //   dts: true,
      //   resolvers: [AntDesignVueResolver()],
      //   include: [/\.vue$/, /\.tsx$/],
      // }),
      vueSetupExtend(),
      lifecycle === 'report' ? (visualizer({ gzipSize: true, open: true, brotliSize: true, filename: 'report.html' }) as Plugin) : []
    ],
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
