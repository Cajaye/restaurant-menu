const express = require('express');
const { cards, arrOfReviews } = require('./data')
const app = express();
const PORT = 5000;

app.get('/api/cards', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).json(cards);
})

app.all('*', (req, res) => {
    res.status(404).send('404 cannot find data')
})

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
})