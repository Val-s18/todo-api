require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const { init } = require('./src/services/db')
// Définition du port
const port = 4000
// création de l'application express
const app = express()

// installation des middlewares de sécurité

app.use(helmet())
app.use(cors())

// Middleware de log

app.use(morgan('dev'))

// Middlewares de décodage de requêtes

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Connection à la base de donnée
init()

// Route "/"

app.get('/', (req, res) => {
  res.send('COUCOU')
})

app.use('/Todos', require('./src/routes/todos'))
app.use('/auth', require('./src/routes/auth'))
app.use('/inscription', require('./src/routes/sign'))

// lancement de l'api
app.listen(port, () => {
  console.log('server is listening on port : ' + port)
})
