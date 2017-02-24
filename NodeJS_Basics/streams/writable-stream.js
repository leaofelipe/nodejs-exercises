/**
* Writable Stream
**/

const fs = require('fs')
let zlib = require('zlib')
let request = require('request')

let stream = request('http://www.felipeleao.com')

stream.pipe(zlib.createGzip())
stream.pipe(fs.createWriteStream('teste.html.gz'))

fs.unlink('teste.html.gz', (err) => {
  if (err) console.log('File not exists.')
})
