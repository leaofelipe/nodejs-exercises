/**
* Callback vs. Events
*/

function callme () {
  console.log('Tick A')
}

function callme2 () {
  console.log('Tick D')
  process.nextTick(function () {
    console.log('Tick B')
  })
}

process.nextTick(callme)
callme2()
console.log('Tick C')
