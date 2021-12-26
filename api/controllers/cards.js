const Card = require('../models/Card')
const asyncWrapper = require('../middlewares/async')

const getAllCards = asyncWrapper(async (req, res) => {
    const card = await Card.find({})
    res.status(200).json(card);
})

const getFeaturedCards = asyncWrapper(async (req, res) => {
    const { amount } = req.params;
    const card = await Card.find({})
    const firstCards = card.slice(0, Number(amount))
    res.status(200).json(firstCards)
})

const postCards = asyncWrapper(async (req, res) => {
    const card = await Card.create(req.body)
    res.status(200).json({ card })
})
module.exports = { getAllCards, getFeaturedCards, postCards };