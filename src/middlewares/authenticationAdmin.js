import loginError from '../errors/Error'
import UserHandler from '../handlers/UserHandler'
import JWT from '../helpers/jwt'

const jwt = new JWT()
var userHandler = new UserHandler()
const authenticatitonAdmin = (req, res, next) => {
  jwt
    .verify(req.headers.token)
    .then(async obj => {
      req.userId = obj._id
      const isAdmin = await userHandler.isAdmin(req.userId)
      if (!isAdmin) {
        return res.send({ success: false, message: loginError.PERMISSION_01 })
      }
      next()
    })
    .catch(() =>
      res
        .status(400)
        .send({ success: false, message: loginError.INVALID_TOKEN })
    )
}

export default authenticatitonAdmin
