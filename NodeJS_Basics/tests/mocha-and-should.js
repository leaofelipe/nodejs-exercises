/**
* Mocha and Should.js
*/
const should = require('should')
let mf = require('./mathFunctions')

describe('MathFun', function () {
  describe('when used syncronously', function () {
    it ('should double even numbers correctly', function () {
      mf.evenDoublerSync(2).should.equal(4)
    })

    it ('should throw on odd numbers', function (done) {
      (function () { mf.evenDoublerSync(3) }).should.throw(/Odd/)
      done()
    })
  })

  describe('when used asyncronously', function () {
    it ('should double even numbers correctly', function (done) {
      mf.evenDoublerAsync(2, function (err, results) {
        should.not.exist(err) // err.should.not..... ERROR IS UNDEFINED
        results.should.equal(4)
        done()
      }) 
    })
  
    it ('should return error on odd number', function (done) {
      mf.evenDoublerAsync(3, function (err, results) {
        should.exist(err)
        should.not.exist(results)
        done()
      })
    })

  })



})
