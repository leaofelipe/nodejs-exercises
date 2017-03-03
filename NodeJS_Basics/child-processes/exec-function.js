/**
* Exec function
*/

const exec = require('child_process').exec

// Execute UNIX command
let command = 'uptime | cut -d "," -f 1'
let child = exec(command, (err, stdout, stderr) => {
  if (err) {
    console.log('Error: ', stderr)
  } else {
    console.log('Output: ', stdout)
  }
})

console.log('Process PID: ', child.pid)
