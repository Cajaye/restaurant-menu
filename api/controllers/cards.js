const Card = require('../models/Card')
const { cards, arrOfReviews } = require('../data')

const getAllCards = (req, res) => {
    res.status(200).json(cards);
}

const getFeaturedCards = (req, res) => {
    const { cardID } = req.params;
    const firstCards = cards.slice(0, Number(cardID))
    res.status(200).json(firstCards)
}

module.exports = { getAllCards, getFeaturedCards };