// @ts-check
import { reactive, watchEffect } from 'vue'

const urlHash = location.hash.slice(1)
const matchedVcsURL = location.search.match(
  /(?:github|gitlab)\.com\/(?:[\w\.\-]+\/){2,3}(?=blob).+/gi
)
export const store = reactive({
  files: {},
  result: ''
})

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

/**
 * Fetch the raw content file from GitHub and GitLab.
 * @returns text
 */
async function fetchFromVCS() {
  let rawURL
  const vcsURL = matchedVcsURL[0]

  // Public GitHub
  if (/^github/gi.test(vcsURL)) {
    // replace the url with GitHub raw url
    // GitHub raw url is like:
    // https://raw.githubusercontent.com/toyai/python-playground/main/README.md
    // trim the trailing `/` if needed
    rawURL =
      'https://raw.' +
      vcsURL
        .replace(/^github/, 'githubusercontent')
        .replace('/blob', '')
        .replace(/\/$/, '')
  }
  // TODO: Public GitLab

  try {
    const res = await fetch(rawURL, { referrerPolicy: 'no-referrer' })
    return await res.text()
  } catch (e) {
    console.error(e)
  }
}

/**
 * Setup the initial code to display.
 * This can be the code from hash URL, VCS, or `print('Hello World!')`.
 *
 * Priority of content:
 * 1. Content from urlHash
 * 2. Content from VCS
 * 3. `print('Hello World!')`
 */
export async function setupCode() {
  if (urlHash) {
    const savedFiles = JSON.parse(fromBinary(atob(urlHash)))
    for (const filename in savedFiles) {
      store.files[filename] = savedFiles[filename]
    }
  } else if (matchedVcsURL) {
    store.files['main.py'] = await fetchFromVCS()
  } else {
    store.files['main.py'] = `print('Hello World!')`
  }
}

watchEffect(() =>
  history.replaceState(
    null,
    '',
    '#' + btoa(toBinary(JSON.stringify(store.files)))
  )
)
