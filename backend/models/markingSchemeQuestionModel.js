const { text } = require('express')
const mongoose = require('mongoose')

const markingSchemeQuestionSchema = mongoose.Schema(
  {
    markingSchemeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'MarkingScheme',
    },
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Subject',
    },
    questionNumber: {
      type: Number,
    },
    text:{
      type:String,
    },

  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('MarkingSchemeQuestion', markingSchemeQuestionSchema)
