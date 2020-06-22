const ServerError = require('../errors/server.error')

module.exports = class HttpResponse {
  static badRequest (error) {
    return {
      statusCode: 400,
      body: {
        error: error.message
      }
    }
  }

  static serverError (error) {
    return {
      statusCode: 500,
      body: {
        error: new ServerError(error).message
      }
    }
  }
}
