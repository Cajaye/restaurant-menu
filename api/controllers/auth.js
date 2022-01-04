const { StatusCodes } = require('http-status-codes')
const User = require('../models/User')
const register = async (req, res) => {
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { fullname: `${user.firstname} ${user.lastname}` }, token })
}

const login = async (req, res) => {

}

module.exports = { register, login };