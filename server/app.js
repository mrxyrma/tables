const express = require('express')
const cors = require('cors')
const path = require('path')
const { MongoClient } = require('mongodb')

const PORT = process.env.PORT || 80
const uri = 'mongodb://localhost:27017'

const app = express()
const client = new MongoClient(uri)

app.use(cors())
app.use('/', express.static(path.join(__dirname, '../client/build')))

app.get('/:selectionPage', async (req, res) => {
  await client.connect()
  const data = await client.db('tables').collection(req.params.selectionPage).find().toArray()
  client.close()
  res.json(data)
})

app.get('/:selectionPage/:productPage', async (req, res) => {
  const data = []
  
  await client.connect()

  const productInfo = await client.db('tables').collection(req.params.selectionPage).find({Артикул: req.params.productPage}).toArray()

  const accessoriesInfo = await client.db('accessories').collection(req.params.selectionPage).find({Серия: productInfo[0].Серия}).toArray()

  client.close()

  data.push(productInfo[0], accessoriesInfo)

  res.json(data)
})

app.listen(PORT)