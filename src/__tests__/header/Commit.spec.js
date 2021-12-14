import { mount } from '@vue/test-utils'
import { version } from '../../../package.json'
import Commit from '../../header/Commit.vue'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

test('renders a commit', () => {
  const wrapper = mount(Commit)

  const commit = wrapper.get('[data-test="commit"]')

  assert.is(
    commit.text(),
    `v${version}@${__COMMIT__.slice(0, 7)}`,
    'commit should match.',
  )
})

test.run()
