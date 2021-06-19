import { mount } from '@vue/test-utils'
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import PaneLeft from '../../panes/PaneLeft.vue'

test('PaneLeft', async () => {
  const wrapper = mount(PaneLeft)

  const mainPy = wrapper.get('[data-test="mainPy"]')
  const loading = wrapper.get('[data-test="loadingStatus"]')

  assert.is(mainPy.text(), 'main.py', 'mainPy text should match.')
  assert.ok(mainPy.exists(), 'mainPy code should exist')
  assert.ok(mainPy.isVisible(), 'mainPy text should be visible.')
  assert.is(loading.text(), 'Loading Code...', 'loading text should match.')
  assert.ok(loading.exists(), 'loading text should exist')
  assert.ok(loading.isVisible(), 'loading text should be visible.')
})

test.run()
