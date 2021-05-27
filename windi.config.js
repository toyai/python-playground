//@ts-check
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: true,
  theme: {
    extend: {
      cursor: {
        'ew-resize': 'ew-resize'
      },
      fontFamily: {
        sans: [
          '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,ui-sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
        ]
      }
    }
  }
})
