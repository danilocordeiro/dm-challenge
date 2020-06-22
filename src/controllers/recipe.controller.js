const HttpResponse = require('../utils/helpers/http-response')
const {
  InvalidNumberOfParamsError,
  MissingParamError
} = require('../utils/errors')
const externalApiController = require('./external-api.controller')
const ExternalApiOutError = require('../utils/errors/external-api-out.error')

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

      const recipesFromRecipePuppy = await externalApiController.getRecipesByIngredients(keywords)

      const recipes = await recipesFromRecipePuppy.results.map(recipe => {
        return {
          title: recipe.title.replace(/\r|\n|\t/, '').trim(),
          ingredients: recipe.ingredients.split(',')
            .map((ingredient) => ingredient.trim())
            .sort(),
          link: recipe.href
        }
      })

      for (let i = 0; i < recipes.length; i++) {
        const gitForRecipe = await externalApiController.getGifForRecipe(recipes[i].title)
        recipes[i].gif = gitForRecipe.data[0].images.original.url
      }

      const recipeObject = {
        keywords: keywords,
        recipes: recipes
      }

      return HttpResponse.ok(recipeObject)
    } catch (error) {
      if (error instanceof ExternalApiOutError) {
        return HttpResponse.externalApiError(error)
      }
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
