const mongoose = require('mongoose')
const serverConfig = require('../config')

mongoose.connect(serverConfig.db_url, {
  autoIndex: false
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))