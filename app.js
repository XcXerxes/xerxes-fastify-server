/**
 * @author leo
 */
const fastify = require('fastify')
const pino = require('pino')
const streamLog = require('./log/log')

const app = fastify({
  logger: pino(streamLog)
})
app.register(require('fastify-no-icon'))

app.get('/', async (req, reply) => {
  reply.send('hello world!!!!')
})

// Run the server
app.listen(3000, '0.0.0.0')
  .then(() => {
    console.log(`server listening on 3000 port`)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })