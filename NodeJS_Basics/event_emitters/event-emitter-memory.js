/**
* Event emitter memory
*/

const EventEmitter = require('events').EventEmitter
const os = require('os')

function memoryStatus () {
  let emitter = new EventEmitter()
  let historyMem

  emitter.emit('start')

  setInterval(() => {
    let mem = os.freemem()
    emitter.emit('data', mem.toString())
  }, 1000)

  return emitter
}

let memory = memoryStatus()

memory.on('start', () => {
  process.stdout.write('Process starting...')
})

memory.on('data', (data) => {
  let dataMb = parseInt(data, 10)
  process.stdout.write(`Free memory: ${dataMb}\n`)
})
