// @ts-check
import {
  keymap,
  highlightSpecialChars,
  drawSelection,
  highlightActiveLine
} from '@codemirror/view'
import { EditorState, Transaction } from '@codemirror/state'
import { history, historyKeymap } from '@codemirror/history'
import { codeFolding, foldGutter, foldKeymap } from '@codemirror/fold'
import { indentOnInput, indentUnit } from '@codemirror/language'
import { lineNumbers, highlightActiveLineGutter } from '@codemirror/gutter'
import { defaultKeymap, indentLess, indentMore } from '@codemirror/commands'
import { bracketMatching } from '@codemirror/matchbrackets'
import { closeBrackets, closeBracketsKeymap } from '@codemirror/closebrackets'
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search'
import { autocompletion, completionKeymap } from '@codemirror/autocomplete'
import { commentKeymap } from '@codemirror/comment'
import { defaultHighlightStyle } from '@codemirror/highlight'
import { python } from '@codemirror/lang-python'
import pythonBuiltIns from './python.js'
import { Theme, ThemeHighlight } from './theme.js'

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
  // sorted by
  // https://github.com/codemirror/basic-setup/blob/main/src/basic-setup.ts
  lineNumbers(),
  highlightActiveLineGutter(),
  highlightSpecialChars(),
  history(),
  codeFolding(),
  foldGutter(),
  drawSelection(),
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  Theme,
  ThemeHighlight,
  defaultHighlightStyle.fallback,
  bracketMatching(),
  closeBrackets(),
  autocompletion({
    override: pythonBuiltIns
  }),
  highlightActiveLine(),
  highlightSelectionMatches(),
  python(),
  indentUnit.of(fourSpaces),
  keymap.of([
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...searchKeymap,
    ...historyKeymap,
    ...foldKeymap,
    ...commentKeymap,
    ...completionKeymap,
    tabBinding
  ])
]
