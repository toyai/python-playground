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
  alias: {
    'header-btn':
      'focus:outline-none mx-1 inline-flex items-center content-center',
    'file-tab-btn':
      'focus:outline-none cursor-pointer px-4 py-1 w-max h-35px border-b-3 border-solid border-b-blue-500 font-mono text-sm'
  }
})
