const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  answers_count: {
    type: Number,
    required: true,
  },
  answers: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('question', questionSchema);
