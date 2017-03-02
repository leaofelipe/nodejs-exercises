/**
* Assert
*/

const assert = require('assert')
let mf = require('./mathFunctions')

assert.equal(mf.evenDoublerSync(2), 4)

// We can pass a regular expression to compare
// the throw message
assert.throws(() => {
  mf.evenDoublerSync(3)
}, /Odd/)

mf.evenDoublerAsync(2, (err, results) => {
  assert.ifError(err)
  assert.equal(results, 4, 'Even doubler failed on even number') // Print if test fails
})

mf.evenDoublerAsync(3, (err, results) => {
  assert.notEqual(err, null)
})
