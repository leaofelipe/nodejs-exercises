/**
* Event Emitter Inherit Pattern
*/

const util = require('util')
const emitter = require('events').EventEmitter

function Resource (num) {
  let max = num
  let self = this

  process.nextTick(function () {
    let count = 0
    self.emit('start')

    let t = setInterval(function () {
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

res.on('data', function (response) {
  console.log(`Data -> ${response}`)
})

res.on('start', function () {
  console.log('It starts!')
})

res.on('end', function (total) {
  console.log(`Total of ${total} events displayed`)
})
