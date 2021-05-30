// @ts-check
import {
  keymap,
  highlightSpecialChars,
  drawSelection,
  highlightActiveLine
} from '@codemirror/view'
import { EditorState, Transaction } from '@codemirror/state'
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
import { python } from '@codemirror/lang-python'
import pythonBuiltIns from './python.js'

const fourSpaces = '    '

// copied from `insertTab`, changed \t with 4 spaces
const insertFourSpaces = ({ state, dispatch }) => {
  if (state.selection.ranges.some((r) => !r.empty))
    return indentMore({ state, dispatch })
  dispatch(
    state.update(state.replaceSelection(fourSpaces), {
      scrollIntoView: true,
      annotations: Transaction.userEvent.of('input')
    })
  )
  return true
}

const tabBinding = { key: 'Tab', run: insertFourSpaces, shift: indentLess }
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
  indentUnit.of(fourSpaces),
  highlightActiveLine(),
  rectangularSelection(),
  highlightSpecialChars(),
  highlightActiveLineGutter(),
  highlightSelectionMatches(),
  defaultHighlightStyle,
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
    tabBinding
  ])
]
