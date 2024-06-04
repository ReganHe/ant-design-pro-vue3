import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { configCompressPlugin } from './compress'
import { configVisualizerConfig } from './visualizer'
import { configSvgIconsPlugin } from './svgSprite'

export function createVitePlugins(env: any, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    // have to
    vueJsx(),
    // support name
    vueSetupExtend()
  ]

  // @vitejs/plugin-legacy
  env.VITE_LEGACY === 'true' &&
    isBuild &&
    vitePlugins.push(
      legacy({
        targets: ['defaults', 'not IE 11']
      })
    )

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild))

  // rollup-plugin-visualizer
  process.env.REPORT === 'true' && vitePlugins.push(configVisualizerConfig())

  // The following plugins only work in the production environment
  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(configCompressPlugin(env.VITE_BUILD_COMPRESS, env.VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE === 'true'))
  }

  return vitePlugins
}
