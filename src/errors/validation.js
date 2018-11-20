/**
 * Created by crosp on 5/11/17.
 */

const BaseError = require('./base')

class ValidationError extends BaseError {
  constructor (message) {
    super(message, 400)
  }
}

module.exports = ValidationError
