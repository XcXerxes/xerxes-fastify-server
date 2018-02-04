const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('article', new Schema({
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    required: true,
    default: 0
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'authUser'
  },
  _cate: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  }
}, {
  timestamps: { createdAt: 'created_at' , updatedAt: 'updated_at'},
  strict: true
}))
