/**
* Filesystem Synchronous
*/

const fs = require('fs')
let folderName = 'temp'
let file = folderName + '/file.txt'

removeDir()
fs.mkdirSync(folderName)

if (fs.existsSync(folderName)) {
  fs.writeFileSync(file, 'My Text!')
  console.log(`File size: ${fs.statSync(file).size}\n`)
}
removeDir()

function removeDir () {
  if (fs.existsSync(folderName)) {
    console.log('Folder exists, removing')
    if (fs.existsSync(file)) {
      fs.unlinkSync(file)
    }
    fs.rmdirSync(folderName)
  }
}
