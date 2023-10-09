const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  author: {
    type: String,
    required: true,
    minlength: 2,
  },
  year: {
    type: Number,
    required: true,
    minlength: 4,
  },
  type: {
    type: String,
    required: true,
    enum: ['classic', 'fiction', 'fantasy', 'other'],
    default: 'other'
  }
});

module.exports = mongoose.model('book', bookSchema);