const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
    }
    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      console.log('****** ERR', error.details[0].context);
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Gotta be a real email bro.'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Your password needs to listen up and:
              <br>
              1. It must be lowercase, uppercase, numbers....
              <br>
              2. Be 8-32 characters
              `
          })
          break
        default:
          res.status(400).send({
            error: 'Your login shoud be a better.'
          })
          break
      }
    } else {
      next()
    }
  }
}
