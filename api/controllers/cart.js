const Cart = require('../models/Cart')
const Card = require('../models/Card')
const { StatusCodes } = require('http-status-codes')
const { NotFoundError } = require('../errors/index')

const getUsersCart = async (req, res) => {
    const cart = await Cart.find({ addedBy: req.user.userId })
    const added = cart.map((item) => item.added)
    const card = await Card.find({ _id: { $in: added } })
    res.status(StatusCodes.OK).json({ card, amount: card.length })
}

const addToCart = async (req, res) => {
    req.body.addedBy = req.user.userId
    const cart = await Cart.create(req.body)
    res.status(StatusCodes.CREATED).json({ cart })
}

module.exports = { getUsersCart, addToCart }