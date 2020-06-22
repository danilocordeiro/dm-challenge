const axios = require('axios')
const ExternalApiOutError = require('../utils/errors/external-api-out.error')
require('dotenv').config()

module.exports = {
  async getRecipesByIngredients (ingredientsList) {
    try {
      let recipePuppyApiUrl = `${process.env.RECIPE_API_URL}?i=`

      ingredientsList.map((ingredient, index) => {
        index === 0 ? recipePuppyApiUrl += `${ingredient}` : recipePuppyApiUrl += `,${ingredient}`
      })
      const recipesPuppy = await axios.get(recipePuppyApiUrl)
      return recipesPuppy.data
    } catch (error) {
      throw new ExternalApiOutError('Recipe Puppy Api')
    }
  },

  async getGifForRecipe (recipeTitle) {
    try {
      const url = `${process.env.GIPHY_URL}?api_key=${process.env.GIPHY_KEY}&q=${recipeTitle}&limit=1&lang=en`
      const returnOfApi = await axios.get(url)
      return returnOfApi.data
    } catch (error) {
      throw new ExternalApiOutError('Giphy')
    }
  }
}
