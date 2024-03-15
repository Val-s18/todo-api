const mongoose = require('mongoose')

const { Schema } = mongoose

const TodoSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  image: [{
    type: String
  }],
  status: [{
    type: String,
    enum: ['TODO', 'IN_PROGRESS', 'DONE', 'CANCELED', 'ARCHIVED'],
    default: 'TODO'
  }],
  important: {
    type: Boolean,
    default: false
  },
  user: {
    type: Schema.Types.ObjectId,
    Ref: 'User'
  }
}, { timestamps: true })

module.exports = mongoose.models.Todo || mongoose.model('Todo', TodoSchema)
