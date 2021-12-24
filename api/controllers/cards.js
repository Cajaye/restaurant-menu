const Card = require('../models/Card')

const getAllCards = async (req, res) => {
    try {
        const card = await Card.find({})
        res.status(200).json(card);
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getFeaturedCards = async (req, res) => {
    try {
        const { amount } = req.params;
        const card = await Card.find({})
        const firstCards = card.slice(0, Number(amount))
        res.status(200).json(firstCards)
    } catch (error) {
        res.status(404).json({ msg: error })
    }
}
const postCards = async (req, res) => {
    try {
        const card = await Card.create(req.body)
        res.status(200).json({ card })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}
module.exports = { getAllCards, getFeaturedCards, postCards };