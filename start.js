#!/usr/bin/env node
const exec = require('child_process').exec

exec(`electron ${__dirname}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    return stdout;
  })