const app = require('./config/app')
require('dotenv').config()

const localhost = '0.0.0.0'

app.listen(process.env.PORT, localhost, () => {
  console.log('Server up in port: ' + process.env.PORT)
})
