
const serverConfig = require('../config')
const fastifyMongodb = require('fastify-mongodb')

/**
 * @author leo
 * @param {fastify app} app
 * @return Promise
 */

module.exports = async app => {
  try {
    const db = await app.register(fastifyMongodb,{
      url: serverConfig.db_url
    })
    console.log(console.log('Connected to mongo successfully!'))    
    return db
  } catch (error) {
    throw error
  }
  // return new Promise((resolve, reject) => {
  //   app.register(fastifyMongodb,{
  //     url: serverConfig.db_url
  //   }, err => {
  //     if (err) {
  //       throw err
  //     } else {
  //       console.log('Connected to mongo successfully!')
  //       resolve()
  //     }
  //   })
  // })
}