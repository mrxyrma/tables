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
  const tableData = { title: '', data: [] }

  await client.connect()

  const tableCard = await client
    .db('tables')
    .collection('product-cards')
    .findOne({ link: req.params.selectionPage })
  tableData.title = tableCard.title

  const data = await client.db('tables').collection(req.params.selectionPage).find().toArray()
  tableData.data = data

  client.close()

  res.json(tableData)
})

app.get('/api/:selectionPage/:productPage', async (req, res) => {
  const data = {}

  await client.connect()

  let productInfo = await client
    .db('tables')
    .collection(req.params.selectionPage)
    .find({ Артикул: req.params.productPage })
    .toArray()

  if (productInfo.length === 0) {
    productInfo = await client
      .db('tables')
      .collection(req.params.selectionPage)
      .find({ Артикул: Number(req.params.productPage) })
      .toArray()
  }

  let pureArrWithAccessories = []
  if (productInfo[0].Серия) {
    const arrWithParams = productInfo[0].Серия.split(', ') //Массив, состоящий из параметров для поиска аксессуаров
    const tempArr = [] //Массив с повторяющимися значениями аксессуаров
    await Promise.all(
      arrWithParams.map(async (param) => {
        const arrWithAccessories = await client
          .db('accessories')
          .collection(req.params.selectionPage)
          .find({ Серия: param })
          .toArray()
        arrWithAccessories.forEach((i) => tempArr.push(i))
        return [] //Возвращаю итеррируемый объект, чтобы работал Promise.all
      })
    )

    pureArrWithAccessories = tempArr.reduce(
      (acc, item) => {
        if (acc.map[item.Артикул])
          // если данный аксессуар уже был
          return acc // ничего не делаем, возвращаем уже собранное

        acc.map[item.Артикул] = true // помечаем аксессуар, как обработанный
        acc.unicAccessories.push(item) // добавляем объект в массив аксессуаров
        return acc // возвращаем собранное
      },
      {
        map: {}, // здесь будут отмечаться обработанные аксессуары
        unicAccessories: [], // здесь конечный массив уникальных аксессуаров
      }
    ).unicAccessories // получаем конечный массив
  }

  client.close()

  data.product = productInfo[0]
  data.accessories = pureArrWithAccessories

  res.json(data)
})

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT)
