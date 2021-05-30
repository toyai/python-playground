import {
  snippetCompletion,
  completeFromList,
  ifNotIn
} from '@codemirror/autocomplete'
import { keywords, builtInFunctions, builtInClasses } from './python.json'

/**
 *
 * @param {(string[] | Object.<string, string>)} builtins
 * @param {string} type
 * @param {number} boost
 * @param {boolean} info
 * @returns {import('@codemirror/autocomplete').CompletionSource} completions
 */
function makeCompletions(builtins, type, boost, info) {
  const completions = []
  for (const k in builtins) {
    completions.push(
      snippetCompletion(Array.isArray(builtins) ? builtins[k] : k, {
        label: Array.isArray(builtins) ? builtins[k] : k,
        type: type,
        info: info ? builtins[k] : '',
        boost: boost
      })
    )
  }
  return ifNotIn(['Comment', 'String'], completeFromList(completions))
}

export const completionKeywords = makeCompletions(
  keywords,
  'keyword',
  99,
  false
)
export const completionBuiltInFunctions = makeCompletions(
  builtInFunctions,
  'function',
  98,
  true
)
export const completionBuiltInClasses = makeCompletions(
  builtInClasses,
  'class',
  97,
  true
)
export default [
  completionKeywords,
  completionBuiltInFunctions,
  completionBuiltInClasses
]
