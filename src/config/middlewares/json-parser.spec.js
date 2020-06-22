const request = require('supertest')
const app = require('../app')

describe('JSON Parser Middleware', () => {
  test('should parse body as json', async () => {
    app.post('/test_json_parser', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .post('/test_json_parser')
      .send({
        name: 'danilo'
      })
      .expect({
        name: 'danilo'
      })
  })
})
