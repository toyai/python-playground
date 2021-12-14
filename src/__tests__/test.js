// @ts-check
import { chromium } from 'playwright-chromium'
import { createServer } from 'vite'

const PORT = 3001

async function main() {
  const server = await createServer({
    root: './src/__tests__/',
    configFile: './vite.config.js',
    server: {
      port: PORT,
    },
  })

  await server.listen()

  const browser = await chromium.launch()
  const page = await browser.newPage()
  const address = `http://localhost:${PORT}`

  page.on('console', (msg) => console.log(msg.text()))
  await page.goto(address, { waitUntil: 'domcontentloaded' })

  await browser.close()
  await server.close()
}

main()
