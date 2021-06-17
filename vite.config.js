// @ts-check
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { execFileSync } from 'child_process'

const pyVer = execFileSync('python', ['-V']).toString().trim().split(' ')[1]
const commit = execFileSync('git', ['rev-parse', 'HEAD']).toString().trim()
const idArr = process.env.REVIEW_ID?.split('-')
const prNumber = idArr?.[idArr.length - 1]

const prSiteName = process.env.PG_BACKEND_SITE_NAME_PR
const prodSiteName = process.env.PG_BACKEND_SITE_NAME

// PULL_REQUEST env var is string `true` or `false`
const apiURL =
  process.env.PULL_REQUEST === 'true'
    ? `https://${prSiteName}-pr-${prNumber}.herokuapp.com`
    : process.env.NODE_ENV === 'production'
    ? `https://${prodSiteName}.herokuapp.com`
    : 'http://127.0.0.1:8000'

console.log(apiURL)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS({
      transformCSS: 'pre'
    })
  ],
  define: {
    __API_URL__: JSON.stringify(apiURL),
    __PY_VER__: JSON.stringify(pyVer),
    __COMMIT__: JSON.stringify(commit)
  }
})
