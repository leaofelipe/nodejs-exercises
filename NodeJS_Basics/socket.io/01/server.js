/**
* Socket: 01
*/

const http = require('http')
const socketio = require('socket.io')
const fs = require('fs')

function handler (req, res) {
  fs.readFile(`${__dirname}/client.html`, (err, data) => {
    if (err) {
      res.writeHead(500)
      return res.end('Error!')
    } else {
      res.writeHead(200)
      res.end(data)
    }
  })
}

let app = http.createServer(handler)
let io = socketio.listen(app)

io.sockets.on('connection', (socket) => {
  setInterval(() => {
    let timestamp = Date.now()
    console.log(`Emitted: ${timestamp}`)
    socket.emit('time', timestamp)
  }, 2000)
  socket.on('submit', (data) => {
    console.log(`Submited: ${data}`)
  })
})

app.listen(3000)
console.log('Server running.')
