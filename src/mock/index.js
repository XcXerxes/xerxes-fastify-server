const mockErrorEmitter = require('./events')
process.env.NODE_ENV = 'development'
require('../db/db')

// 自动建表
const Admin = require('../models/authUser.model')
const Category = require('../models/category.model')
const Article = require('../models/article.model')

const article = new Article({
  title: 'this is a test',
  caption: 'this is a best test',
  thumbnail: 'http://sdasdsd',
  content: 'this is a best test'
})
article.save((err, doc) => {
  if (err) {
    mockErrorEmitter.emit('connect-err', err)
  }
  console.log('doc is saved');//saved
})

const cate = new Category({
  cate_name: 'nodejs',
  cate_sort: 2
})
cate.save((err, doc) => {
  if (err) {
    mockErrorEmitter.emit('connect-err', err)
  }
  console.log('doc is saved');//saved
})
const user = new Admin({
  username: 'admin',
  password: 'admin',
  role: 'admin'
})
user.save((err, doc) =>{
  if (err) {
    mockErrorEmitter.emit('connect-err', err)
  }
  console.log('user authorize is saved');//saved
  process.exit(0)
})

// 处理错误
mockErrorEmitter.on('connect-err', err => {
  console.error(err)
  process.exit(1)
})