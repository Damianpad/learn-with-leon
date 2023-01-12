const express = require('express')
const bodyParser = require('body-parser')
const { response } = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()
const PORT = 3000

const connectionString = `mongodb+srv://yoda:Lilelizabeth1.@cluster0.ejqzl9h.mongodb.net/?retryWrites=true&w=majority`


MongoClient.connect(connectionString, { useUnifiedTopology : true })
    .then (client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    // app.use()
    // app.get()
    // app.post()
    // app.listen()

    app.use(bodyParser.urlencoded({ extended: true }))

    app.get('/', (req, res) => {
        db.collection('quotes').find().toArray()
        .then(data => {
            console.log(data);
            res.sendFile(__dirname + '/index.html')
            // res.render('index.ejs', { info: data})
        })
       
        .catch(error => console.error(error))
        
    })

    app.post('/quotes', (req, res) => {
        quotesCollection.insertOne(req.body)
            .then(result => {
                
                console.log(result);
            })
            .catch(error => console.error(error))
    })
})
    .catch(console.error)

app.listen(PORT, function() {
    console.log('listening on 3000');
})



