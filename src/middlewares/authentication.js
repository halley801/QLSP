import loginError from '../errors/Error'
import JWT from '../helpers/jwt'

const jwt = new JWT()
const authenticatiton = (req, res, next) => {
  jwt
    .verify(req.headers.token)
    .then(obj => {
      req.userId = obj._id
      next()
    })
    .catch(() =>
      res
        .status(400)
        .send({ success: false, message: loginError.INVALID_TOKEN })
    )
}

export default authenticatiton
