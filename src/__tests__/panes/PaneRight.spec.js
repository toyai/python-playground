import { mount } from '@vue/test-utils'
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import PaneRight from '../../panes/PaneRight.vue'

test('PaneRight', () => {
  const wrapper = mount(PaneRight)

  const resultBtn = wrapper.get('[data-test="resultBtn"]')
  const result = wrapper.get('[data-test="result"]')

  assert.is(resultBtn.text(), 'Result', 'resultBtn text should match.')
  assert.ok(resultBtn.exists(), 'resultBtn should exist')
  assert.ok(resultBtn.isVisible(), 'resultBtn should be visible.')
  assert.is(
    result.text(),
    'Click ▶ Run to see the result:',
    'result should match with the label.',
  )
  assert.ok(result.exists(), 'result should exist')
  assert.ok(result.isVisible(), 'result should be visible.')
})

test.run()
