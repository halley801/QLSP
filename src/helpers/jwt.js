import { SECRET_KEY } from '../config/Server'
import jwt from 'jsonwebtoken'
class JWT {
  // sign
  async sign (obj) {
    return new Promise((resolve, reject) => {
      jwt.sign(obj, SECRET_KEY, { expiresIn: '10d' }, (error, token) => {
        if (error) return reject(error)
        resolve(token)
      })
    })
  }
  // verify
  async verify (token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, SECRET_KEY, (error, obj) => {
        if (error) return reject(error)
        delete obj.iat
        delete obj.exp
        resolve(obj)
      })
    })
  }
}
export default JWT
