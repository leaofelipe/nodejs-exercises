/**
* Spawn
*/

// Spawn gives you more control to stdin, stdout and stderr
const spawn = require('child_process').spawn
let ps = spawn('ps', ['aux'])
let grep = spawn('grep', ['node'])

ps.stdout.pipe(grep.stdin)
grep.stdout.pipe(process.stdout)

grep.stderr.on('data', (data) => {
  console.log(data)
})
