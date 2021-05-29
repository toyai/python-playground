import { snippetCompletion, completeFromList } from '@codemirror/autocomplete'
import { keywords, builtInFunctions, builtInClasses } from './python.json'

function makeCompletions(builtins, type, boost, info) {
  const completions = []
  for (const k in builtins) {
    completions.push(
      snippetCompletion(k, {
        label: k,
        type: type,
        info: info ? builtins[k] : '',
        boost: boost
      })
    )
  }
  return completions
}

export const completionKeywords = completeFromList(
  makeCompletions(keywords, 'keyword', 99, false)
)
export const completionBuiltInFunctions = completeFromList(
  makeCompletions(builtInFunctions, 'function', 98, true)
)
export const completionBuiltInClasses = completeFromList(
  makeCompletions(builtInClasses, 'class', 97, true)
)
export default [
  completionKeywords,
  completionBuiltInFunctions,
  completionBuiltInClasses
]
