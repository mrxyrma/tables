const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')

const app = express()
app.use(cors())
const uri = 'mongodb://localhost:27017'

const client = new MongoClient(uri)

app.get('/:selectionPage', async (req, res) => {
  await client.connect()
  const data = await client.db('test').collection(req.params.selectionPage).find().toArray()
  client.close()
  res.json(data)
})

app.get('/:selectionPage/:productPage', async (req, res) => {
  console.log(req.params.productPage)
  await client.connect()
  const data = await client.db('test').collection(req.params.selectionPage).find({Артикул: req.params.productPage}).toArray()
  client.close()
  res.json(data)
})

app.listen(5000)