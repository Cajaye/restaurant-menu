const express = require('express');
const { cards, arrOfReviews } = require('./data')
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.status(200).send('Home page')
})
//get all cards
app.get('/api/cards', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).json(cards);
})

//only get cards with id less than whatever we ask for in the front end
app.get('/api/cards/:CardID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    const { CardID } = req.params;
    const firstCards = cards.slice(0, Number(CardID))
    res.status(200).json(firstCards)
})

// app.get('/api/cards/:CardID', (req, res) => {
//     const { CardID } = req.params;
//     const firstThreeCards = cards.filter((card) => card.id < Number(CardID))
//     res.status(200).json(firstThreeCards)
// })

app.all('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(404).send('404 cannot find data')
})

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
})