const ServerError = require('../errors/server.error')
const ExternalApiOutError = require('../errors/external-api-out.error')

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

  static externalApiError (error) {
    return {
      statusCode: 502,
      body: {
        error: new ExternalApiOutError(error).message
      }
    }
  }

  static ok (body) {
    return {
      statusCode: 200,
      body
    }
  }
}
