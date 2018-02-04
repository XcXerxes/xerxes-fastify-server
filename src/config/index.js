const config = {
  dev: {
    db_url: 'mongodb://localhost:27017/xcxerxes',
    port: 3000
  },
  prod: {
    port: 9999
  }
}
if (process.env.NODE_ENV === 'development') {
  module.exports = config.dev
} else {
  module.exports = config.prod
}