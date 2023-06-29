const express = require('express')
const cors = require('cors')


// Routes Import

const showRoutes = require('./routes/showRoute')

const app = express()


app.use(cors())
app.use(express.json())
app.use('/shows',showRoutes)
// Route connect to app


module.exports = app
