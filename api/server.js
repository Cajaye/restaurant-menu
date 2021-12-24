const express = require('express');
require('dotenv').config()
const connectDB = require('./db/connect')
const cors = require('cors');
const app = express();
const PORT = 5000;

//middleware
app.use(cors());
app.use(express.json())

//routes
const cardsRoute = require('./routes/cards')
app.use('/api/v1/cards', cardsRoute)

const reviews = require('./routes/reviews')
app.use('/api/v1/reviews', reviews)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server is running on port:${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()
