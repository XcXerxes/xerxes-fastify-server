const authUser = require('../api/authUser/authUser.api')
const authSchemas = require('../api/authUser/authUser.schemas')
const auth = require('../middlewares/auth')

module.exports = (app, options, next) => {
  // 用户管理
  app.post('/login', {
    schema: {
      body: authSchemas.LOGIN_USER,
    }
  }, authUser.login)
  
  next()
}