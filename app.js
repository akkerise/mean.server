const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

mongoose.connect(config.database)

mongoose.connection.on('Connected', () => {
    console.log('Connected Success' + config.database)
    if (err) return err
    // let collection = db.collection('foods')
    // collection.insert({name: 'taco', tasty: true}, function (err, result) {
    //     collection.find({name: 'taco'}).toArray(function (err, docs) {
    //         console.log(docs[0])
    //         db.close()
    //     })
    // })
})

const users = require('./routes/users')

// Port
const port = 3000;

const app = express();

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', users)

// Body Parser Middleware
app.use(bodyParser.json())

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint')
})

app.listen(port, () => {
    console.log('Server started on port ' + port)
})
