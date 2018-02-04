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
app.register(require('fastify-no-icon'))

app.get('/', async (req, reply) => {
  reply.send('hello world!!!!')
})

// Run the server
app.listen(serverConfig.port, '0.0.0.0')
  .then(() => {
    console.log(`server listening on ${serverConfig.port} port`)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })