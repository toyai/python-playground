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
import { indentOnInput } from '@codemirror/language'
import { lineNumbers, highlightActiveLineGutter } from '@codemirror/gutter'
import { defaultKeymap, defaultTabBinding } from '@codemirror/commands'
import { bracketMatching } from '@codemirror/matchbrackets'
import { closeBrackets, closeBracketsKeymap } from '@codemirror/closebrackets'
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search'
import { autocompletion, completionKeymap } from '@codemirror/autocomplete'
import { commentKeymap } from '@codemirror/comment'
import { rectangularSelection } from '@codemirror/rectangular-selection'
import { defaultHighlightStyle } from '@codemirror/highlight'
import { lintKeymap } from '@codemirror/lint'
import { python } from '@codemirror/lang-python'
import pythonBuiltIns from './python.js'

/**
 * @type {import('@codemirror/state').Extension}
 */
export const extensions = [
  python(),
  history(),
  foldGutter(),
  lineNumbers(),
  drawSelection(),
  indentOnInput(),
  closeBrackets(),
  autocompletion({
    override: pythonBuiltIns
  }),
  bracketMatching(),
  highlightActiveLine(),
  rectangularSelection(),
  highlightSpecialChars(),
  highlightActiveLineGutter(),
  highlightSelectionMatches(),
  defaultHighlightStyle,
  EditorState.tabSize.of(2),
  EditorState.allowMultipleSelections.of(true),
  keymap.of([
    ...closeBracketsKeymap,
    ...commentKeymap,
    ...completionKeymap,
    ...defaultKeymap,
    ...foldKeymap,
    ...historyKeymap,
    ...lintKeymap,
    ...searchKeymap,
    defaultTabBinding
  ])
]
