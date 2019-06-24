console.clear();

const express = require('express')
const app = express()
const port = 3000

const factorial = require('./factorial.js')


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/get', (req, res) => {
    const { n } = req.query;
    console.log('n', n, req.query);
    res.send(`factorial is ${factorial(n)}`);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))