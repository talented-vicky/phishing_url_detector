const mongoose = require('mongoose')
const express = require('express')

require('dotenv').config()
const db_url = process.env.db_url
const port_no = process.port_no

const phishRoute = require('./routes/phishing')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(phishRoute)

mongoose.connect(db_url)
    .then( conn => {
        console.log("Connected to MongoDB")
        app.listen(port_no)
    })
    .catch( err => console.log(err))