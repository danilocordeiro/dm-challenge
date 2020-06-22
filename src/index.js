const app = require('./config/app')
require('dotenv').config()

app.listen(process.env.PORT, () => {
  console.log('Server up in port: ' + process.env.PORT)
})
