import autoBind from 'auto-bind'

class BaseAutoBindedClass {
  constructor () {
    autoBind(this)
  }
}
module.exports = BaseAutoBindedClass
