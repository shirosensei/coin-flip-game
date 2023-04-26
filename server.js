const express = require('express');
const app = express();

app.get('/flip', (req, res, next) => {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    res.send(result);
});

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}! You better catch it!`);
})