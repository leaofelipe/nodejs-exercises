/**
* Event Emitter Inherit Pattern
*/

const util = require('util')
const emitter = require('events').EventEmitter

function Resource (num) {
  let max = num
  let self = this

  process.nextTick(() => {
    let count = 0
    self.emit('start')

    let t = setInterval(() => {
      self.emit('data', ++count)
      if (count === max) {
        self.emit('end', count)
        clearInterval(t)
      }
    }, 10)
  })
}

util.inherits(Resource, emitter)

let res = new Resource(5)

res.on('data', response => {
  console.log(`Data -> ${response}`)
})

res.on('start', () => {
  console.log('It starts!')
})

res.on('end', (total) => {
  console.log(`Total of ${total} events displayed`)
})
