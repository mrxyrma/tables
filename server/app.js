const express = require('express')
const cors = require('cors')
const path = require('path')
const { MongoClient } = require('mongodb')

const app = express()
const PORT = process.env.PORT || 5000
const client = new MongoClient(uri)

app.use(cors())
app.use('/', express.static(path.join(__dirname, './client/build')))

const uri = 'mongodb+srv://mrxyrma:Nokiasamsung1@tabledb.xe5ensk.mongodb.net/'
const db = 'tables'

app.get('/:selectionPage', async (req, res) => {
  await client.connect()
  const data = await client.db(db).collection(req.params.selectionPage).find().toArray()
  client.close()
  res.json(data)
})

app.get('/:selectionPage/:productPage', async (req, res) => {
  console.log(req.params.productPage)
  await client.connect()
  const data = await client.db(db).collection(req.params.selectionPage).find({Артикул: req.params.productPage}).toArray()
  client.close()
  res.json(data)
})

app.listen(PORT)