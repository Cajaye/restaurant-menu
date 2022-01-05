const { StatusCodes } = require('http-status-codes')
const { UnauthorizedError, BadRequest } = require('../errors/index')
const User = require('../models/User')
const bcrypt = require('bcryptjs')

const matchPassword = async (enteredpassword, oldPassword) => {
    return await bcrypt.compare(enteredpassword, oldPassword)
}

const register = async (req, res) => {
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { fullname: `${user.firstname} ${user.lastname}` }, token })
}

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new BadRequest('Please provide both email and password')
    }
    const user = await User.findOne({ email: email })
    if (!user) throw new UnauthorizedError('Email address does not exist try signing up')

    const comparePassword = await matchPassword(password, user.password)
    if (!comparePassword) throw new UnauthorizedError('Invalid password')

    res.status(StatusCodes.OK).json('Token')

}

module.exports = { register, login };