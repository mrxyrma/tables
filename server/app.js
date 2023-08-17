const express = require('express')
const cors = require('cors')
const path = require('path')
const { MongoClient } = require('mongodb')

const PORT = process.env.PORT || 80
const uri = 'mongodb://192.168.102.211:27017'

const app = express()
const client = new MongoClient(uri)

app.use(cors())
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/api', async (req, res) => {
  await client.connect()
  const data = await client.db('tables').collection('product-cards').find().toArray()
  client.close()
  res.json(data)
})

app.get('/api/:selectionPage', async (req, res) => {
  const data = []

  await client.connect()

  const table = await client.db('tables').collection(req.params.selectionPage).find().toArray()
  const title = await client.db('tables').collection('product-cards').find({link: req.params.selectionPage}).toArray()

  client.close()

  data.push(table, title)

  res.json(data)
})

app.get('/api/:selectionPage/:productPage', async (req, res) => {
  const data = []
  
  await client.connect()

  let productInfo = await client.db('tables').collection(req.params.selectionPage).find({Артикул: req.params.productPage}).toArray()

  // if (productInfo.length == 0) {
  //   productInfo = await client.db('tables').collection(req.params.selectionPage).find({Артикул: Number(req.params.productPage)}).toArray()
  // }

  const accessoriesInfo = await client.db('accessories').collection(req.params.selectionPage).find({Серия: productInfo[0].Серия}).toArray()

  client.close()

  data.push(productInfo[0], accessoriesInfo)

  res.json(data)
})

app.use('*',  (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT)