const asyncHandler = require('express-async-handler')

const Subject = require('../models/subjectModel')

// NOTE: no need to get the user, we already have them on req object from
// protect middleware. The protect middleware already checks for valid user.

// @desc    Get user subjects
// @route   GET /api/subjects/:id
// @access  Private
const getsubjects = asyncHandler(async (req, res) => {
    console.log(req)
  const subjects = await Subject.find({ lectureId: req.user_id })

    if (!subjects) {
        res.status(404)
    throw new Error('Subjects not found')
  }

  res.status(200).json(subjects)
})

// // @desc    Get user ticket
// // @route   GET /api/tickets/:id
// // @access  Private
// const getTicket = asyncHandler(async (req, res) => {
//   const ticket = await Ticket.findById(req.params.id)

//   if (!ticket) {
//     res.status(404)
//     throw new Error('Ticket not found')
//   }

//   if (ticket.user.toString() !== req.user.id) {
//     res.status(401)
//     throw new Error('Not Authorized')
//   }

//   res.status(200).json(ticket)
// })


module.exports = {
  getsubjects,
}
