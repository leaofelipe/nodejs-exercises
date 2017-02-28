/**
* Http web requests
**/

const http = require('http')

// HTTP module is more lower level then 'request' module,
// so it dont follow redirections... we need to do this on our own

let options = {
  host: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET'
}

// The callback function don't repects NODE patterns
// First parameter isn't an error, but response.
let req = http.request(options, (response) => {
  console.log(response.statusCode)
  response.pipe(process.stdout) // Pipe the response to stdout
})

// We need to close the writable stream!
req.end()

// USING the shorthand GET, we don't need to END the request,
// we'll not pass any data (writable)
http.get(options, (response) => {
  console.log(response.statusCode)
  response.pipe(process.stdout) // Pipe the response to stdout
})

