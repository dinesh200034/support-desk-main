const { text } = require('express')
const mongoose = require('mongoose')

const answerSchema = mongoose.Schema(
  {
    paperNo: {
      type: String,
      required: [true, 'Please add the Paper No'],
    },
    questionNo: {
      type: Number,
      required:[true, 'Please add the Question No']
    },
    text: {
      type: String,
    },

  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Answer', answerSchema)
