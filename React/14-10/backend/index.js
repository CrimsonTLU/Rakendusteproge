// ES5 vs ES6 import
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const PORT = 8080
require('dotenv')

const catsRoutes = require('./routes/cats.routes.js')
const dogsRoutes = require('./routes/dogs.routes.js')
const authRoutes = require('./routes/auth.routes')

app.use(morgan('dev'))
app.use(express.json()) // body-parser asemel

const uri = "mongodb+srv://chris:<password>@cluster0.u49hmd4.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(uri)
  .then(() => console.log('Database connection established'))
  .catch((e) => console.error(e))

app.use('/cats', catsRoutes)
app.use('/dogs', dogsRoutes)
app.use('/auth', authRoutes)

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