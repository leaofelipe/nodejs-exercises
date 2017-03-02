/**
* Mocha and Should.js
*/
const should = require('should')
let mf = require('./mathFunctions')

describe('MathFun', () => {
  describe('when used syncronously', () => {
    it('should double even numbers correctly', () => {
      mf.evenDoublerSync(2).should.equal(4)
    })

    it('should throw on odd numbers', (done) => {
      (function () { mf.evenDoublerSync(3) }).should.throw(/Odd/)
      done()
    })
  })

  describe('when used asyncronously', () => {
    it.skip('should double even numbers correctly', (done) => { // skip or ONLY
      mf.evenDoublerAsync(2, (err, results) => {
        should.not.exist(err) // err.should.not..... ERROR IS UNDEFINED
        results.should.equal(4)
        done()
      })
    })

    it('should return error on odd number', (done) => {
      mf.evenDoublerAsync(3, (err, results) => {
        should.exist(err)
        should.not.exist(results)
        done()
      })
    })
  })
})
