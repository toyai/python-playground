import { mount } from '@vue/test-utils'
import Download from '../../header/Download.vue'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

test('download button', () => {
  const wrapper = mount(Download)

  const download = wrapper.get('[data-test="downloadText"]')

  assert.ok(download.exists(), 'Download text should exist.')
  assert.ok(download.isVisible(), 'Download text should be visible.')
})

test.run()
