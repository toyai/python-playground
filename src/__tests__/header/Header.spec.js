import { mount } from '@vue/test-utils'
import Header from '../../header/Header.vue'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

test('Header bar', () => {
  const wrapper = mount(Header)

  const logo = wrapper.get('[data-test="logo"]')
  const playground = wrapper.get('[data-test="playgroundText"]')
  const pyVer = wrapper.get('[data-test="pyVer"]')

  assert.is(logo.attributes('alt'), 'Python Logo', 'Alt text should match.')
  assert.ok(playground.exists(), 'playground text should exist.')
  assert.ok(playground.isVisible(), 'playground text should be invisible.')
  assert.is(
    playground.text(),
    'Python Playground',
    'playground title should match.',
  )
  assert.ok(pyVer.exists(), 'pyVer text should exist.')
  assert.ok(pyVer.isVisible(), 'pyVer text should be invisible.')
  assert.match(pyVer.text(), /\(v[\d\.]+\)/, 'pyVer should match.')
})

test.run()
