const asyncHandler = require('express-async-handler')

const Subject = require('../models/subjectModel')

// NOTE: no need to get the user, we already have them on req object from
// protect middleware. The protect middleware already checks for valid user.

// @desc    Get user subjects
// @route   GET /api/subjects/:id
// @arrayess  Private
const getsubjects = asyncHandler(async (req, res) => {
    // console.log("Hi"+req.params.id)
  const subjects = await Subject.find({ lectureId: req.params.id })

    if (!subjects) {
        res.status(404)
    throw new Error('Subjects not found')
  }

  const subs=[]

  const groupedSubjects = subjects.reduce((accumulator, subject) => {
    const subjectCode = subject.subjectCode;
    if (!accumulator.includes(subjectCode)) {
      accumulator.push(subjectCode);
      subs.push(subject)
    }
    return accumulator;
  }, []);

  res.status(200).json(subs)
})


const getSubjectsYears = asyncHandler(async (req, res) => {
  const subs=[]
  // console.log("Hi"+req.params.subject_id)
  // console.log("User_ID:"+req.params.user_id)
  console.log("SubjectCode:"+req.params.subjectcode)
  const subjects = await Subject.find({ lectureId: req.params.user_id ,subjectCode:req.params.subjectcode})
  if (!subjects) {
    res.status(404)
    throw new Error('Subjects not found')
  }
  console.log(subjects)

  const groupedSubjects = subjects.reduce((accumulator, subject) => {
    const subjectYear = subject.year;
    if (!accumulator.includes(subjectYear)) {
      accumulator.push(subjectYear);
      // console.log(accumulator)
      subs.push(subject)
    }
    return accumulator;
  }, []);
  res.status(200).json(subs)
})

// // @desc    Get user ticket
// // @route   GET /api/tickets/:id
// // @arrayess  Private
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
  getsubjects,getSubjectsYears
}
