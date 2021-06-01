// @ts-check
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { execFileSync } from 'child_process'

const commit = execFileSync('git', ['rev-parse', 'HEAD']).toString().trim()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS({
      transformCSS: 'pre'
    })
  ],
  define: {
    __COMMIT__: JSON.stringify(commit)
  }
})
