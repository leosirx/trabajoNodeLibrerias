const passport = require('passport')
const { NotAuthorizedException } = require('../exceptions/exceptions')


const isAuthenticated = (req, res, next) => {
  passport.authenticate('jwt', {session: false}, (err, user, info) => {
    console.log('Validando autenticacion')

    if (err || !user) {
      const error = new NotAuthorizedException("Usuario no autorizado")

      return next(error)
    }

    next()
  })(req, res, next)
}


module.exports = { isAuthenticated }