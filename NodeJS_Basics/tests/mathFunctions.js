let evenDoublerAsync = function (v, callback) {
  if (v % 2) {
    setTimeout(() => {
      callback(new Error('Odd input'))
    }, 100)
  } else {
    setTimeout(() => {
      callback(null, v * 2, 100)
    }, 100)
  }
}

let evenDoublerSync = function (v) {
  if (v % 2) {
    throw (new Error('Odd input'))
  } else {
    return (v * 2)
  }
}

module.exports.evenDoublerAsync = evenDoublerAsync
module.exports.evenDoublerSync = evenDoublerSync
