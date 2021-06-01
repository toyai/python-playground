// @ts-check
// largely stripped from https://github.com/vuejs/vitepress/blob/master/scripts/release.js

const fs = require('fs')
const path = require('path')
const semver = require('semver')
const prompts = require('prompts')
const child_process = require('child_process')

const pkgDir = process.cwd()
const pkgPath = path.resolve(pkgDir, 'package.json')
const pkg = require(pkgPath)
const currentVersion = pkg.version

const preId = process.argv.slice(2)[0]

/**
 * @type {import('semver').ReleaseType[]}
 */
const versionIncrements = [
  'patch',
  'minor',
  'major',
  'prepatch',
  'preminor',
  'premajor',
  'prerelease'
]

/**
 * @param {import('semver').ReleaseType} i
 */
const inc = (i) => semver.inc(currentVersion, i, preId)

/**
 * @param {string} bin
 * @param {string[]} args
 */
const run = (bin, args) => child_process.execFileSync(bin, args)

/**
 * @param {string} msg
 */
const step = (msg) => console.log('\x1b[36m%s\x1b[0m', msg)

async function main() {
  /**
   * @type {{ release: string }}
   */
  const { release: targetVersion } = await prompts({
    type: 'select',
    name: 'release',
    message: 'Select release type',
    choices: versionIncrements.map((i) => {
      return { title: `${i} (${inc(i)})`, value: inc(i) }
    })
  })

  if (!semver.valid(targetVersion)) {
    throw new Error(`Invalid target version: ${targetVersion}`)
  }

  const tag = `v${targetVersion}`

  /**
   * @type {{ yes: boolean }}
   */
  const { yes } = await prompts({
    type: 'confirm',
    name: 'yes',
    message: `Releasing ${tag}. Confirm?`
  })

  if (!yes) {
    return
  }

  step('\nUpdating package version...')
  updateVersion(targetVersion)

  step('\nGenerating changelog...')
  run('pnpm', ['run', 'changelog'])
  step('\nFormatting...')
  run('pnpm', ['run', 'fmt'])

  const { yes: changelogOk } = await prompts({
    type: 'confirm',
    name: 'yes',
    message: '\nChangelog generated. Does it look good?'
  })

  if (!changelogOk) {
    return
  }

  step('\nCommitting changes...')
  run('git', ['add', '-A'])
  run('git', ['commit', '-m', `release: ${tag}`])

  step('\nPushing to GitHub...')
  run('git', ['tag', tag])
  run('git', ['push', 'origin', tag])
  run('git', ['push', '-u', 'origin', 'main'])
}

/**
 * @param {string} version
 */
function updateVersion(version) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  pkg.version = version
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
}

main().catch((err) => console.error(err))
