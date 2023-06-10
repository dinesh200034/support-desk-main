const asyncHandler = require('express-async-handler')

const Ticket = require('../models/ticketModel')

// NOTE: no need to get the user, we already have them on req object from
// protect middleware. The protect middleware already checks for valid user.

// @desc    Get user tickets
// @route   GET /api/tickets
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find({ user: req.user.id })

  res.status(200).json(tickets)
})

// @desc    Get user ticket
// @route   GET /api/tickets/:id
// @access  Private
const getTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    res.status(404)
    throw new Error('Ticket not found')
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  res.status(200).json(ticket)
})

// @desc    Create new ticket
// @route   POST /api/tickets
// @access  Private
// const createTicket = asyncHandler(async (req, res) => {
//   const { paper,description } = req.body

//   console.log("This is body", paper);
//   console.log("This is body", description);

//   if (!paper || !description) {
//     res.status(400)
//     throw new Error('Please add paper and description')
//   }

//   const ticket = await Ticket.create({
//     paper,
//     description,
//     user: req.user.id,
//     status: 'new',
//   })

//   res.status(201).json(ticket)
// })
const createTicket = async (req, res, next) => {
  const { description } = req.body;
  const paperFile = req.files['paper'][0];
  const markingSchemeFile = req.files['markingScheme'][0];

  try {
    const ticket = new Ticket({
      user: req.user._id,
      description,
      paper: paperFile.path,
      markingScheme: markingSchemeFile.path,
      status: 'new',
    });

    await ticket.save();

    res.status(201).json(ticket);
  } catch (error) {
    next(error);
  }
};



// @desc    Delete ticket
// @route   DELETE /api/tickets/:id
// @access  Private
const deleteTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    res.status(404)
    throw new Error('Ticket not found')
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  await ticket.remove()

  res.status(200).json({ success: true })
})

// @desc    Update ticket
// @route   PUT /api/tickets/:id
// @access  Private
const updateTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    res.status(404)
    throw new Error('Ticket not found')
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.status(200).json(updatedTicket)
})

module.exports = {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
}
