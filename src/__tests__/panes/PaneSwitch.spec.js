import { mount } from '@vue/test-utils'
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import PaneSwitch from '../../panes/PaneSwitch.vue'

test('PaneSwitch', async () => {
  const wrapper = mount(PaneSwitch)

  // get buttons
  const switchBtnCode = wrapper.get('[data-test="switchBtnCode"]')
  const switchBtnResult = wrapper.get('[data-test="switchBtnResult"]')

  // test buttons' innerText
  assert.is(switchBtnCode.text(), 'Code')
  assert.is(switchBtnResult.text(), 'Result')

  // click Code button
  await switchBtnCode.trigger('click')

  // test Code is emitted
  assert.is(
    wrapper.emitted('btnChange').length,
    1,
    'PaneSwitch should emit one value'
  )
  assert.is(
    wrapper.emitted('btnChange')[0][0],
    'Code',
    'PaneSwitch should emit Code'
  )

  // click Result button
  await switchBtnResult.trigger('click')

  // test Result is emitted
  // Code + Result, so 2
  assert.is(
    wrapper.emitted('btnChange').length,
    2,
    'PaneSwitch should have two values'
  )
  assert.is(
    wrapper.emitted('btnChange')[1][0],
    'Result',
    'PaneSwitch should emit Result'
  )
})

test.run()
