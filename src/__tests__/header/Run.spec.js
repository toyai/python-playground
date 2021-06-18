import { mount } from '@vue/test-utils'
import Run from '../../header/Run.vue'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

test('run code button', async () => {
  const wrapper = mount(Run)

  const status = wrapper.get('[data-test="runStatus"]')

  assert.is(status.text(), 'Run', 'Button should include Run')

  await wrapper.find('button').trigger('click')
  assert.is(status.text(), 'Running', 'Button should include Running')

  // assert.is(status.text(), 'Run', 'Button should re-include Run')
})

test.run()
