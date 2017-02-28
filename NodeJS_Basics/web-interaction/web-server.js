/**
* Web Server
*/

const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  if (req.url === '/mock.txt') {
    fs.createReadStream(`${__dirname}/mock.txt`).pipe(res) // Create a readable stream for my file and pipe it to response
  } else {
    res.end('Hi!')
  }
}).listen(3000)
// .listen(process.env.PORT, process.env.IP)

// USE THIS WAY FOR .ENV files!
/* console.log(`Server running at ${process.env.IP}:${process.env.PORT}`) */
console.log('Server running!')
