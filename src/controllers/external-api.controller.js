const axios = require('axios')
require('dotenv').config()

module.exports = {
  async getRecipesByIngredients (ingredientsList) {
    let recipePuppyApiUrl = `${process.env.RECIPE_API_URL}?i=`

    ingredientsList.map((ingredient, index) => {
      index === 0 ? recipePuppyApiUrl += `${ingredient}` : recipePuppyApiUrl += `,${ingredient}`
    })
    const recipesPuppy = await axios.get(recipePuppyApiUrl)
    return recipesPuppy.data
  }
}
