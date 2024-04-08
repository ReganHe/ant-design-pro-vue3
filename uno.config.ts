// uno.config.ts
import { defineConfig, presetAttributify, presetWind } from 'unocss'

export default defineConfig({
  // ...UnoCSS选项
  presets: [
    presetAttributify({
      /* 预设选项 */
    }),
    presetWind()
    // ...自定义预设
  ]
})
