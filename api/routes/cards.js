const express = require('express');
const router = express.Router();

const { getAllCards, getFeaturedCards } = require('../controllers/cards')

router.route('/').get(getAllCards)

router.route('/:cardID').get(getFeaturedCards)

module.exports = router