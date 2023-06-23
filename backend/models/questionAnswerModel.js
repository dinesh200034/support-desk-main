const { text } = require('express')
const mongoose = require('mongoose')

const questionAnswerSchema = mongoose.Schema(
  {
    paperId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Paper',
    },
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Subject',
    },
    questionNo: {
      type: String,
      required: [true, 'Please add the Question No'],
    },
    OCR_accuracy:{
      type:Number,
    },
    OMR_accuracy:{
        type:Number,
    },
    marks:{
      type:Number,
    },
    numberOfPoints:{
      type:Number
    },

  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('QuestionAnswer', questionAnswerSchema)
