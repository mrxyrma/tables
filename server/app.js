const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')

const app = express()
app.use(cors())
const uri = 'mongodb://localhost:27017'

app.get('/', (req, res) => {
  res.send('hi')
})

app.listen(5000)