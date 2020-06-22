const router = require('express').Router()

router.get('/recipes', (req, res) => {
  res.send('recipes')
})

module.exports = (app) => {
  app.use(router)
}
