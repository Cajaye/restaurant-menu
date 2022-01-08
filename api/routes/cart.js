const express = require('express')
const Router = express.Router()

const { getUsersCart, addToCart } = require('../controllers/cart')

Router.route('/')
    .get(getUsersCart)
    .post(addToCart)

module.exports = Router