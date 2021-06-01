import { HighlightStyle, tags as t } from '@codemirror/highlight'
import { EditorView } from '@codemirror/view'

const codeFont = 'Monaco,Menlo,Consolas,"Liberation Mono",monospace;'

export const Theme = EditorView.theme({
  '&': {
    fontSize: '0.875rem',
    height: '100%'
  },
  '&.cm-focused': {
    outline: 'none'
  },
  '&.cm-focused .cm-cursor': {
    borderLeftWidth: '2px'
  },
  '.cm-scroller': {
    fontFamily: codeFont
  },
  '.cm-matchingBracket, .cm-nonmatchingBracket': {
    backgroundColor: 'rgba(136, 136, 136, 0.3)'
  },
  '.cm-completionIcon': {
    paddingRight: '1rem'
  },
  '.cm-tooltip.cm-tooltip-autocomplete > ul': {
    fontFamily: codeFont
  }
})

export const ThemeHighlight = HighlightStyle.define([
  {
    tag: [
      t.modifier,
      t.controlKeyword,
      t.operatorKeyword,
      t.definitionKeyword,
      t.keyword
    ],
    class: 'text-red-600'
  },
  {
    tag: [t.bool, t.null],
    class: 'text-cyan-600'
  },
  {
    tag: [t.variableName],
    class: 'text-blue-gray-600'
  },
  {
    tag: [
      t.function(t.definition(t.variableName)),
      t.self,
      t.function(t.variableName),
      t.className,
      t.definition(t.className)
    ],
    class: 'text-purple-600'
  },
  {
    tag: [t.propertyName, t.function(t.propertyName)],
    class: 'text-blue-600'
  },
  {
    tag: [t.lineComment],
    class: 'text-gray-400 italic'
  },
  {
    tag: [t.number],
    class: 'text-orange-600'
  },
  {
    tag: [t.string],
    class: 'text-emerald-600'
  },
  {
    tag: [t.regexp, t.escape],
    class: 'text-fuchsia-600'
  },
  {
    tag: [
      t.updateOperator,
      t.arithmeticOperator,
      t.bitwiseOperator,
      t.compareOperator,
      t.punctuation,
      t.meta
    ],
    class: 'text-pink-600'
  },
  {
    tag: [t.paren, t.squareBracket, t.brace, t.derefOperator, t.separator],
    class: 'text-blue-gray-600'
  }
])
