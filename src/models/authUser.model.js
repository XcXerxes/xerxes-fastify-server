const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 15,
    index: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 32
  },
  role: {
    type: String,
    required: true,
    maxlength: 15
  }
}, { 
  timestamps: { createdAt: 'created_at' , updatedAt: 'updated_at'},
  strict: true
})

adminSchema.post('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  next();
});

module.exports = mongoose.model('authUser', adminSchema)
