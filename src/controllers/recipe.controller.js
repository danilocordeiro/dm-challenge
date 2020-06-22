const HttpResponse = require('../utils/helpers/http-response')
const {
  MissingParamError
} = require('../utils/errors')

module.exports = class RecipeController {
  async getRecipes (httRequest) {
    console.log(httRequest)

    if (!httRequest.query || !httRequest.query.i) {
      return HttpResponse.badRequest(new MissingParamError('i'))
    }
  }
}
