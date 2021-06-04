// @ts-check
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      cursor: {
        'ew-resize': 'ew-resize'
      }
    }
  },
  shortcuts: {
    'header-btn':
      'focus:outline-none mx-1 inline-flex items-center content-center'
  }
})
