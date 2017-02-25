/**
* Show buffer from stream
**/

const request = require('request')
const Buffer = require('buffer').Buffer

let stream = request({
  headers: {
    'User-Agent': 'nodejs'
  },
  'url': 'https://api.github.com/users/leaofelipe/repos'
})

stream.on('data', (data) => {
  let buffer = Buffer.from(data) // Get Binary
  console.log(buffer.toString('utf-8'))
})

