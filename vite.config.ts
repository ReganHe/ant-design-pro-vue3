import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import { createVitePlugins } from './build/vite/plugin'

export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = loadEnv(mode, root)
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
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true
        }
      }
    },
    plugins: createVitePlugins(env, isBuild)
  }
})
