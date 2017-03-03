/**
* Fork
*/

const fork = require('child_process').fork

let child = fork(`${__dirname}/honorstudent.js`)

child.on('message', (m) => {
  console.log('Answer: ', m.answer)
  child.send({cmd: 'done'})
})

child.send({cmd: 'double', number: 20})
