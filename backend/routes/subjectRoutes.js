const express = require('express')
const router = express.Router()
const {
  getsubjects,
} = require('../controllers/subjectController')

const { protect } = require('../middleware/authMiddleware')

router
  .route('/:id')
  .get(protect, getsubjects)


module.exports = router
