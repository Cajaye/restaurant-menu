const Reviews = require('../models/Reviews')

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Reviews.find({})
        res.status(200).json({ reviews })
    } catch (error) {
        res.status(404).json({ msg: error })
    }
}

const postReview = async (req, res) => {
    try {
        const reviews = await Reviews.create(req.body)
        res.status(200).json({ reviews })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = { getAllReviews, postReview }