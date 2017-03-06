'use strict'

const should = require('should')
let main = require('../../NodeJS_Basics/asynchronous/next-tick-01')

describe('Asynchronous - 01', () => {
  describe('when main function called', () => {
    let result

    before((done) => {
      process.nextTick(() => {
        result = main()
        done()
      })
    })

    it('array must have lenght of 4', () => {
      result.should.have.length(4)
    })

    it('array must be [4, 3, 1, 2]', () => {
      should.deepEqual(result, [4, 3, 1, 2])
    })
  })
})
