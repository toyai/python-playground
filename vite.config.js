// @ts-check
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import execa from 'execa'

const commit = execa.sync('git', ['rev-parse', 'HEAD']).stdout

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
