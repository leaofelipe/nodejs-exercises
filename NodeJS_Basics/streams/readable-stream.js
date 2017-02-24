/**
* Readable Stream
**/

const request = require('request')

let stream = request({
  headers: {
    'User-Agent': 'nodejs'
  },
  'url': 'https://api.github.com/orgs/nodejs/repos'
})

let requestLength
let dataReceived = 0

if (!stream.readable) {
  console.log('This stream is not readable.')
  process.exit()
}

function update (data) {
  dataReceived += data.length
  let percent = Math.round((dataReceived * 100) / requestLength)
  console.log(`${data.length} (${percent}%) of ${requestLength} (100%)`)
}

stream.on('response', (data) => {
  requestLength = data.headers['content-length']
})
stream.on('data', update)
stream.on('end', () => {
  console.log('Stream completed!')
})

stream.on('error', (error) => {
  console.log(error)
})
