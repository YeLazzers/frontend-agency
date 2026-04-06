#!/usr/bin/env node
// Usage: node frontend-agency/setup.js

import { existsSync, mkdirSync, lstatSync, unlinkSync, symlinkSync } from 'fs'
import { join, dirname, relative } from 'path'
import { fileURLToPath } from 'url'

const AGENCY_DIR = dirname(fileURLToPath(import.meta.url))
const PROJECT_DIR = join(AGENCY_DIR, '..')

/**
 * List of symlinks to create in the project.
 * src  — path relative to agency root
 * dest — path relative to project root
 */
const LINKS = [
  { src: '.claude/settings.json',  dest: '.claude/settings.json'  },
  { src: '.claude/skills',         dest: '.claude/skills'         },
  { src: 'skills-lock.json',       dest: '.claude/skills-lock.json' },
  { src: '.mcp.json',              dest: '.mcp.json'              },
]

for (const { src, dest } of LINKS) {
  const srcAbs  = join(AGENCY_DIR, src)
  const destAbs = join(PROJECT_DIR, dest)
  const relSrc  = relative(dirname(destAbs), srcAbs)

  if (!existsSync(srcAbs)) {
    console.log(`— skip  ${dest} (not in agency)`)
    continue
  }

  mkdirSync(dirname(destAbs), { recursive: true })

  const stat = lstatSync(destAbs, { throwIfNoEntry: false })

  if (stat?.isSymbolicLink()) {
    unlinkSync(destAbs)
    symlinkSync(relSrc, destAbs)
    console.log(`↻ updated  ${dest}`)
  } else if (stat) {
    console.log(`⚠ skip     ${dest} (real file exists, remove manually to replace)`)
  } else {
    symlinkSync(relSrc, destAbs)
    console.log(`✓ linked   ${dest}`)
  }
}

console.log('\nDone. Restart Claude Code to apply changes.')
