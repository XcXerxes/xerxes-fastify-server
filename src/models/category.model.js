const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('category', new Schema({
  cate_name: {
    type: String,
    required: true,
    maxlength: 10,
    unique: true
  },
  cate_sort: {
    type: Number,
    required: true,
    max: 4,
    unique: true
  }
}, {
  timestamps: { createdAt: 'created_at' , updatedAt: 'updated_at'},
  strict: true
}))
