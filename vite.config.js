// @ts-check
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { execFileSync } from 'child_process'

const pyVer = execFileSync('python', ['-V']).toString().trim().split(' ')[1]
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
    __PY_VER__: JSON.stringify(pyVer),
    __API_URL__: JSON.stringify(process.env.PLAYGROUND_API_URL),
    __COMMIT__: JSON.stringify(commit)
  }
})
