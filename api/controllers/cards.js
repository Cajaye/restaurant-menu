const Card = require('../models/Card')

const getAllCards = async (req, res) => {
    const { featured, title, price, rating } = req.query
    const queryObject = {}
    if (featured) {
        queryObject.featured = featured === 'true' ? 'true' : 'false'
    }
    if (title) {
        queryObject.title = { $regex: title, $options: 'i' }
    }
    if (price) {
        queryObject.price = Number(price)
    }
    if (rating) {
        queryObject.rating = Number(rating)
    }
    const card = await Card.find(queryObject)
    res.status(200).json({ card, nbHits: card.length });
}


const postCards = async (req, res) => {
    const card = await Card.create(req.body)
    res.status(200).json({ card })
}

const findById = async (req, res) => {
    const { id } = req.params
    const card = await Card.findById(id)
    res.status(200).json({ card })
    if (!card) throw Error('cannot find card')
}
module.exports = { getAllCards, postCards, findById };