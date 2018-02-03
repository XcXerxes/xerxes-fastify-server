const  tee = require('pino-tee')
const fs = require('fs')

const stream = tee(process.stdin)
stream.tee(fs.createWriteStream('log/info'), line => line.level >= 20)
stream.pipe(process.stdout)

module.exports = stream