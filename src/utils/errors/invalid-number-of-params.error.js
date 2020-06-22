module.exports = class InvalidNumberOfParamsError extends Error {
  constructor () {
    super('A Invalid number of params was sended. Must be between 1 and 3')
    this.name = 'InvalidNumberOfParamsError'
  }
}
