module.exports = class ExternalApiOutError extends Error {
  constructor (apiName) {
    super(`External Api ${apiName} is out.`)
    this.name = 'ExternalApiOut'
  }
}
