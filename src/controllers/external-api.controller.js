const axios = require('axios')
require('dotenv').config()

module.exports = {
  async getRecipesByIngredients (ingredientsList) {
    const recipePuppyApiUrl = `${process.env.RECIPE_API_URL}?i=`

    const recipesPuppy = await axios.get(recipePuppyApiUrl)
    return recipesPuppy.data
  }
}
