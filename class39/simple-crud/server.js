const express = require('express')
const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(PORT, function() {
    console.log('listening on 3000');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body);
})