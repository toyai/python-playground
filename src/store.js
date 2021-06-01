// @ts-check
import { reactive, watchEffect } from 'vue'

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa#unicode_strings
// convert a Unicode string to a string in which
// each 16-bit unit occupies only one byte
/**
 *
 * @param {string} string
 * @returns converted
 */
function toBinary(string) {
  const codeUnits = new Uint16Array(string.length)
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i)
  }
  return String.fromCharCode(...new Uint8Array(codeUnits.buffer))
}

/**
 *
 * @param {string} binary
 * @returns encoded
 */
function fromBinary(binary) {
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return String.fromCharCode(...new Uint16Array(bytes.buffer))
}

const files = {}
const urlHash = location.hash.slice(1)
if (urlHash) {
  const savedFiles = JSON.parse(fromBinary(atob(urlHash)))
  for (const filename in savedFiles) {
    files[filename] = savedFiles[filename]
  }
} else {
  files['main.py'] = `print('Hello World!')\n`
}

export const store = reactive({
  files: files
})

watchEffect(() =>
  history.replaceState(
    null,
    '',
    '#' + btoa(toBinary(JSON.stringify(store.files)))
  )
)
