module.exports = class ExpressRouterAdapter {
  static adapt (router) {
    return async (req, res) => {
      const httpRequest = req
      const httpResponse = await router.getRecipes(httpRequest)

      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}
