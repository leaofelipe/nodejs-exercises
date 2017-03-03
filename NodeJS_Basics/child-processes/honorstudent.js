let mf = require('../tests/mathFunctions')

process.on('message', (m) => {
  if (m.cmd === 'double') {
    console.log(`Asked for double ${m.number}`)
    mf.evenDoublerAsync(m.number, (err, result) => {
      if (err) {
        console.log(err)
      }
      process.send({answer: result})
    })
  } else if (m.cmd === 'done') {
    process.exit()
  }
})
