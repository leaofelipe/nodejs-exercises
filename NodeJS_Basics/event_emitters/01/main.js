/**
* Callback vs. Events
*/

const request = require('request')

let requestOptions = {
  url: 'https://api.github.com/orgs/nodejs/repos',
  headers: {
    'user-agent': 'node.js'
  }
}

/**
* Callback
*/
function myCallback (err, response, body) {
  if (err) {
    console.log('=(', err)
    return false
  }

  console.log(body.length)
}

request(requestOptions, myCallback)

/**
* Events
**/
let requestEvents = request(requestOptions)
let data = ''

requestEvents.on('data', (response) => {
  data += response
})

requestEvents.on('end', () => {
  console.log(data.length)
})

requestEvents.on('error', (error) => {
  console.log('=(', error)
})

