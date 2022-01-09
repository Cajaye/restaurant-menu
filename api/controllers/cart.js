const Cart = require('../models/Cart')
const Card = require('../models/Card')
const { StatusCodes } = require('http-status-codes')
const { NotFoundError } = require('../errors/index')

const getUsersCart = async (req, res) => {
    //find everything item was added by user with id
    const cart = await Cart.find({ addedBy: req.user.userId })
    //iterarte through what was added by the user and store the array of ids in a variable
    const added = cart.map((item) => item.added)
    //use the array of ids to get all the items that was added by the user
    const card = await Card.find({ _id: { $in: added } })
    res.status(StatusCodes.OK).json({ card, amount: card.length })
}

const addToCart = async (req, res) => {
    req.body.addedBy = req.user.userId
    const cart = await Cart.create(req.body)
    res.status(StatusCodes.CREATED).json({ cart })
}

module.exports = { getUsersCart, addToCart }