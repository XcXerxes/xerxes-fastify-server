const utils = require('../utils')
module.exports = function (req, reply, next) {
  const {authorization} = req.headers
  if (authorization) {
    const token = authorization.split(' ')[1]
    this.jwt.verify(token, (err, decoded) => {
      if (!err) {
        req.decoded = decoded
        next()
      } else {
        return reply.send(utils.sendErrorMsg({
          code: -500,
          message: '登录超时, 请重新登录...'
        }))
      }
    })
  } else {
    return reply.send(utils.sendErrorMsg({
      code: -500,
      message: '未登录，请重新登录...'
    }))
  }
}
