const userSchemas = require('./authUser.schemas')
const assert = require('assert')
const db = require('../../models')
const utils = require('../../utils')
/**
 * 后台登录
 * @param {*} req 
 * @param {*} reply 
 */
exports.login = async function (req, reply) {
  try {
    const {username, password} = req.body
    const result = await db.authUser.findOne({username})
    if (result) {
      if (result.password === password) {
        const token = this.jwt.sign({username, id: result._id}, {expiresIn: '5h'})
        reply.setCookie('token', token)
          .send(utils.sendSuccessMsg({message: '登录成功', data: {
            username: result.username
        }}))
      } else {
        reply.send(utils.sendErrorMsg({
          message: '密码错误'
        }))
      }
    } else {
      reply.send(utils.sendErrorMsg({
        message: '用户名不存在'
      }))
    }
  } catch (error) {
    reply.send(utils.sendErrorMsg({
      message: error.toString()
    }))
  }
}

exports.getItem = async (req, reply) => {
  try {
    const result = await db.authUser.findOne({username: 'admin'})
    reply.send({
      data: {username: result.username}
    })
  } catch (error) {
    reply.send(utils.sendErrorMsg({
      message: error.toString()
    }))
  }
}