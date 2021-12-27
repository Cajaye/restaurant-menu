const Reviews = require('../models/Reviews')


const getAllReviews = async (req, res) => {
    const reviews = await Reviews.find({})
    res.status(200).json({ reviews })
}

const postReview = async (req, res) => {
    const reviews = await Reviews.create(req.body)
    res.status(200).json({ reviews })
}

module.exports = { getAllReviews, postReview }