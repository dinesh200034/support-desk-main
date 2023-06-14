const express = require('express')
const router = express.Router()
const {
  getsubjects,
  getSubjectsYears,
} = require('../controllers/subjectController')

const { protect } = require('../middleware/authMiddleware')

router
  .route('/:id')
  .get(protect, getsubjects)

  router.route('/years/:user_id/:subjectcode').get(protect, getSubjectsYears)


module.exports = router
