const RecipeController = require('../controllers/recipe.controller')

module.exports = class RecipeRouterCompose {
  static compose () {
    return new RecipeController()
  }
}
