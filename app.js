/**
 * @author leo
 */
const fastify = require('fastify')
const pino = require('pino')
const streamLog = require('./log/log')
const serverConfig = require('./src/config')
const app = fastify({
  logger: pino(streamLog)
})
// connect mongodb
require('./src/db/db')

app.register(require('fastify-no-icon'))
app.register(require('fastify-jwt'), {secret: '12345667788888'})
app.register(require('fastify-cookie'))

app.register(require('./src/routes/backend'), { prefix: '/api/backend'})
// app.register(require('./src/routes/frontend'), { prefix: '/api/frontend'})

module.exports = app
// Run the server
app.listen(serverConfig.port, '0.0.0.0')
  .then(() => {
    console.log(`server listening on ${serverConfig.port} port`)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
})
