const express = require('express');
require('dotenv').config()
const connectDB = require('./db/connect')
const cors = require('cors');
const path = require('path')
const app = express();
require('express-async-errors')

//middleware
app.use(cors());
app.use(express.json())

app.use(express.static(path.join(__dirname, '../dist')))
app.get('/', (req, res) => {
    res.set({ 'content-type': 'text/html' });
    res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})


//custom middlewares
const errorHandlerMiddleware = require('./middlewares/error-handler')

//routes
const cardsRoute = require('./routes/cards')
app.use('/api/v1/cards', cardsRoute)

const reviews = require('./routes/reviews')
app.use('/api/v1/reviews', reviews)

//404
const notFound = require('./middlewares/not-found')
app.use(notFound)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5000;

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
