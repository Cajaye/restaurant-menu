const express = require('express');
const router = express.Router();

const { getAllCards, getFeaturedCards, postCards } = require('../controllers/cards')

router.route('/').get(getAllCards).post(postCards)

router.route('/:amount').get(getFeaturedCards)

module.exports = router