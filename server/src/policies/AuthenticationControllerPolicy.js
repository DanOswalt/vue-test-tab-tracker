const Joi = require('joi')

module.exports = {
  require (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
    }
    const {error, value} = Joi.validate(req.body, schema)

    next()
  }
}
