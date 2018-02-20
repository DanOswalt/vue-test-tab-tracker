const AuthenticationController = require('./controllers/AuthenticationController.js')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('hi')
  })

  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
}
