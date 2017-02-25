/**
* Process Streams
*/

process.stdout.write(`If you want to trigger SIGTERM, close the process
from another terminal window. eg. kill -TERM ${process.pid}\n\n`)

// "Old" stream mode -> Stdin initialize paused by default,
// we need to resume
process.stdin.resume()
process.stdin.setEncoding('utf-8')

process.stdout.write('Type something: ')

process.stdin.on('data', (data) => {
  process.stdout.write(`Data: ${data}`)
})

process.stdin.on('end', () => {
  process.stderr.write('End\n')
})

process.on('SIGTERM', () => {
  process.stderr.write('Signal Interrupted! Let me clean my stuff before.\n\n')
  process.kill(process.pid, 'SIGHUP')
})

process.on('SIGINT', () => {
  process.stderr.write('Bye!\n\n')
  process.kill(process.pid, 'SIGHUP')
})

