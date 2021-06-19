import { mount } from '@vue/test-utils'
import EmbedCode from '../../header/EmbedCode.vue'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

test('EmbedCode button', () => {
  const wrapper = mount(EmbedCode)

  const embed = wrapper.get('[data-test="embedText"]')

  assert.ok(embed.exists(), 'embed text should exist.')
  assert.ok(embed.isVisible(), 'embed text should be visible.')
})

test.run()
