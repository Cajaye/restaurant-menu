const express = require('express');
const router = express.Router();

const { getAllCards, postCards, findById } = require('../controllers/cards')

router.route('/').get(getAllCards).post(postCards)

router.route('/:id').get(findById)

module.exports = router