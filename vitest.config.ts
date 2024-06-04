import { fileURLToPath } from 'node:url'
import { ConfigEnv, configDefaults, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

export default defineConfig((configEnv: ConfigEnv) =>
  mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      test: {
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'e2e/*'],
        root: fileURLToPath(new URL('./', import.meta.url))
      }
    })
  )
)
