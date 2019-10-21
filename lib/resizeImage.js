const fs = require('fs')

module.exports = function resize(imagePath) {
  return fs.createReadStream(imagePath)
}
