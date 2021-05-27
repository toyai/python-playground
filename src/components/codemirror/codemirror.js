//@ts-check
import {
  keymap,
  highlightSpecialChars,
  drawSelection,
  highlightActiveLine
} from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { history, historyKeymap } from '@codemirror/history'
import { foldGutter, foldKeymap } from '@codemirror/fold'
import { indentOnInput, indentUnit } from '@codemirror/language'
import { lineNumbers, highlightActiveLineGutter } from '@codemirror/gutter'
import { defaultKeymap, indentLess, indentMore } from '@codemirror/commands'
import { bracketMatching } from '@codemirror/matchbrackets'
import { closeBrackets, closeBracketsKeymap } from '@codemirror/closebrackets'
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search'
import { autocompletion, completionKeymap } from '@codemirror/autocomplete'
import { commentKeymap } from '@codemirror/comment'
import { rectangularSelection } from '@codemirror/rectangular-selection'
import { defaultHighlightStyle } from '@codemirror/highlight'
import { lintKeymap } from '@codemirror/lint'
import { python, pythonLanguage } from '@codemirror/lang-python'

// `defaultTabBinding` from CodeMirror uses 1 tab for a indent
// while we want 4 spaces so we map a custom key with
// `indentMore` - 4 spaces indent to the right and
// `indentLess` - 4 spaces indent to the left
const tabToSpacesKeymap = [
  { key: 'Tab', run: indentMore },
  { key: 'Shift-Tab', run: indentLess }
]

/**
 * @type {import('@codemirror/state').Extension}
 */
export const extensions = [
  // sort them by their name width
  python(),
  history(),
  foldGutter(),
  lineNumbers(),
  drawSelection(),
  indentOnInput(),
  closeBrackets(),
  autocompletion(),
  bracketMatching(),
  indentUnit.of('    '),
  highlightActiveLine(),
  rectangularSelection(),
  highlightSpecialChars(),
  highlightActiveLineGutter(),
  highlightSelectionMatches(),
  defaultHighlightStyle.fallback,
  EditorState.allowMultipleSelections.of(true),
  // sort them by their name width
  keymap.of([
    ...lintKeymap,
    ...foldKeymap,
    ...searchKeymap,
    ...commentKeymap,
    ...defaultKeymap,
    ...historyKeymap,
    ...completionKeymap,
    ...tabToSpacesKeymap,
    ...closeBracketsKeymap
  ])
]
