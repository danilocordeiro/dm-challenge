const router = require('express').Router()
const fg = require('fast-glob')

module.exports = (app) => {
  app.use('/', router)
  fg.sync('**/src/routes/**routes.js').forEach((file) =>
    require(`../../${file}`)(router)
  )
}
