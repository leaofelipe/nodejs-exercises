/**
* Filesystem Asynchronous
*/

const fs = require('fs')
let folderName = 'temp'
let file = folderName + '/file.txt'

removeDir()

fs.mkdir(folderName, (err) => {
  if (err) console.log('Error!')

  // fs exist is deprecated
  fs.exists('temp', (exists) => {
    if (exists) {
      fs.writeFile(file, 'My Text!', () => {
        fs.stat(file, (err, stats) => {
          if (err) console.log('Error!')
          console.log(`File size: ${stats.size}\n`)
          removeDir()
        })
      })
    }
  })
})

function removeDir () {
  if (fs.existsSync(folderName)) {
    console.log('Folder exists, removing')
    if (fs.existsSync(file)) {
      fs.unlinkSync(file)
    }
    fs.rmdirSync(folderName)
  }
}
