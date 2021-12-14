// @ts-check
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      cursor: {
        'ew-resize': 'ew-resize',
      },
    },
  },
  alias: {
    'header-btn': 'mx-1 inline-flex items-center content-center',
    'file-tab-btn':
      'cursor-pointer px-4 py-1 w-max h-32px border-b-3 border-solid border-b-blue-500 font-mono text-sm',
    'pane-switch-btn':
      'border rounded mx-1 py-1 px-4 hover:(bg-blue-600 text-white)',
  },
})
