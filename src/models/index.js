const fs = require('fs')
const path = require('path')
const dirs = fs.readdirSync(path.resolve(__dirname, '..', 'models'))
let db = {}
dirs.filter(item => item !== 'index.js').forEach(item => {
  db[item.split('.')[0]] = require(`./${item}`)
})

module.exports = db