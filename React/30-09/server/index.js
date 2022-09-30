// ES5 vs ES6 import
const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 8080
const catsRoutes = require('./routes/cats.routes.js')
const dogsRoutes = require('./routes/dogs.routes.js')
require('dotenv')

app.use(morgan('dev'))
app.use(express.json()) // body-parser asemel

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}...`
mongoose
  .connect(uri)
  .then(() => console.log('Database connection established'))
  .catch((e) => console.error(e))

app.use('/cats', catsRoutes)
app.use('/dogs', dogsRoutes)

// CRUD
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/flights/:from-:to', (req, res) => {
  console.log(req.body)

  res.send({
    params: req.params,
    body: req.body,
  })
})

app.get('*', (req, res) => {
  res.send('404')
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})