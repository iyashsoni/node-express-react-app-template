const express = require('express');
const app = express();
const port = 8080;
const data = require('./data/sample.json');

app.use(express.static("./client/build"));


app.get('/', (req, res) => {
    res.status(200).send('index.html');
});

app.get('/greet', (req, res) => {
    res.status(200).send(data);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})