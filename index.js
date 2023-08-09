const mongoose = require('mongoose')
const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')

require('dotenv').config()
const db_url = process.env.db_url
const port_no = process.env.port_no

const phishRoute = require('./routes/phishing')

const app = express()

app.use(bodyparser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(phishRoute)

mongoose.connect(db_url)
    .then( conn => {
        console.log("Connected to MongoDB")
        app.listen(port_no)
    })
    .catch( err => console.log(err))