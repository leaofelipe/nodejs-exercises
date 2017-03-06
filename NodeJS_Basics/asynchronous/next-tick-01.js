/**
* Node NextTick
*/

let myArr = []

function callme () {
  myArr.push(1)
}

function callme2 () {
  myArr.push(4)
  process.nextTick(() => {
    myArr.push(2)
  })
}

function Main () {
  process.nextTick(callme)
  callme2()
  myArr.push(3)
  return myArr
}

module.exports = Main
