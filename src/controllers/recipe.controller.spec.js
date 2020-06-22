const request = require('supertest')
const app = require('../config/app')

const {
  MissingParamError,
  InvalidNumberOfParamsError
} = require('../utils/errors')

describe('RecipeController', () => {
  test('Should return 400 with i param is not provided', async () => {
    app.get('/recipes', (req, res) => {
      res.send('')
    })

    const res = await request(app).get('/recipes')
    expect(res.status).toBe(400)
    expect(res.body.error).toEqual(new MissingParamError('i').message)
  })

  test('Should return 400 with invalid number of params are provided', async () => {
    app.get('/recipes', (req, res) => {
      res.send('')
    })

    const res = await request(app).get('/recipes?i=potato,onion,tomato,cheese')
    expect(res.status).toBe(400)
    expect(res.body.error).toEqual(new InvalidNumberOfParamsError().message)
  })
})
