const express = require('express')
const app = express()
const setupApp = require('./setup')

setupApp(app)

app.get('/', (req, res) => {
  res.send('App')
})

module.exports = app
