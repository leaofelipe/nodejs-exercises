/**
* Event Emitter Return Pattern
*/

const EventEmitter = require('events').EventEmitter

let randomNumber = Math.floor(Math.random() * 20)

function getSource (max) {
  let emitter = new EventEmitter()

  process.nextTick(() => {
    let count = 0
    emitter.emit('start')

    let t = setInterval(() => {
      emitter.emit('data', ++count)
      if (count === max) {
        emitter.emit('end', count)
        clearInterval(t)
      }
    }, 10)
  })

  return emitter
}

let res = getSource(randomNumber)

res.on('start', () => {
  console.log('Get Source Started... ')
})

res.on('data', (data) => {
  console.log('Data -> ', data)
})

res.on('end', (amount) => {
  console.log(`Get Source ends with ${amount}  events`)
})
