import { mount } from '@vue/test-utils'
import Share from '../../header/Share.vue'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

test('copy shareable URL', async () => {
  const wrapper = mount(Share)

  await wrapper.find('button').trigger('click')
  const share = wrapper.get('[data-test="shareText"]')

  assert.ok(share.exists(), 'Share text should exist.')
  assert.ok(share.isVisible(), 'Share text should be visible.')
})

test.run()
