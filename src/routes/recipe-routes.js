const {
  adapt
} = require('../adapters/express-router-adapter')
const RecipeRouterCompose = require('../composers/RecipeRouterComposer')

module.exports = (router) => {
  router.get('/recipes', adapt(RecipeRouterCompose.compose()))
}
