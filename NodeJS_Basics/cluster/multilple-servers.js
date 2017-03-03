/**
* Multiple servers
*/

const cluster = require('cluster')
const http = require('http')
const numWorkers = 2

// To test a worker server, use curl http://localhost:3000

if (cluster.isMaster) {
  // Fork Workers
  for (let i = 0; i < numWorkers; i++) {
    console.log('Master: about to fork a worker')
    cluster.fork()
  }

  cluster.on('fork', (worker) => {
    console.log(`master: fork event (worker ${worker.id})`)
  })

  cluster.on('online', (worker) => {
    console.log(`master: online event (worker ${worker.id})`)
  })

  cluster.on('listening', (worker, address) => {
    console.log(`master: listening event 
    (worker ${worker.id}), pid ${worker.process.pid}, address ${address.address}:${address.port}`)
  })

  cluster.on('exit', (worker, code, signal) => {
    console.log(`master: exit event (worker ${worker.id})`)
  })
} else {
  console.log(`worker: worker #${cluster.worker.id} ready!`)

  let count = 0

  // Workers can share Connections, like HTTP and TCP
  http.createServer((req, res) => {
    res.writeHead(200)
    count++
    console.log(`Worker #${cluster.worker.id} is increment count to ${count}`)
    res.end(`Hello from worker #${cluster.worker.id} (pid ${cluster.worker.process.pid})`)
    if (count === 3) {
      cluster.worker.destroy()
    }
  }).listen(3000, 'localhost')
}
