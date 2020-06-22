const HttpResponse = require('../utils/helpers/http-response')
const {
  InvalidNumberOfParamsError,
  MissingParamError
} = require('../utils/errors')
const externalApiController = require('./external-api.controller')

module.exports = class RecipeController {
  async getRecipes (httRequest) {
    try {
      console.log('httprequie', httRequest)
      const ingredientsQueryList = httRequest.query.i
      if (!ingredientsQueryList) {
        return HttpResponse.badRequest(new MissingParamError('i'))
      }

      const keywords = this.transformIngredientsListInArray(ingredientsQueryList)
      console.log(keywords)
      if (!this.checkLengthOfArrayIngredients(keywords)) {
        return HttpResponse.badRequest(new InvalidNumberOfParamsError())
      }
      let getRecipesFromRecipePuppy
      try {
        getRecipesFromRecipePuppy = await externalApiController.getRecipesByIngredients(keywords)
      } catch (error) {
        return HttpResponse.externalApiError('Recipe puppy')
      }

      return HttpResponse.ok(getRecipesFromRecipePuppy)
    } catch (error) {
      return HttpResponse.serverError(error)
    }
  }

  transformIngredientsListInArray (queryList) {
    return (queryList.split('i=')[0]).split(',')
  }

  checkLengthOfArrayIngredients (array) {
    if (array.length > 0 && array.length < 4) {
      return true
    }
    return false
  }
}
