const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.mongo_db_url)

const userroutes = require('./routes/user')

const app = express()
app.use(cors())
app.use(express.json())
app.use(userroutes)

app.listen(3000)
