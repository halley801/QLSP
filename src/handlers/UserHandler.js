import JWT from '../helpers/jwt'
import UserModel from '../models/UserModel'
import validator from 'validator'
import loginError from '../errors/Error'

var jwt = new JWT()
class UserHandler {
  // login
  async login (data) {
    let user = await UserModel.findOne({ username: data.username })
    if (!user) return loginError.LOGIN_01 // not found user
    const isMatch = await user.comparePassword(data.password)
    if (!isMatch) return loginError.LOGIN_02 // incorrect password
    let token = await this.getToken(user)
    return token
  }
  // get token
  async getToken (user) {
    const token = await jwt.sign({ _id: user._id })
    return token
  }
  // register
  async register (data) {
    let isExistUsername = await UserModel.findOne({ username: data.username })
    if (isExistUsername) return loginError.REGISTER_01
    let created = await UserModel.create({
      username: data.username,
      password: validator.trim(data.password)
    })
    let token = await this.getToken(created)
    return token
  }
  // check admin
  async isAdmin (userId) {
    let user = await UserModel.findOne({
      _id: userId,
      isAdmin: true
    })
    if (!user) return false
    return true
  }
  // update infomation
  async updateInfo (userId, data = {}) {
    await UserModel.update(
      { _id: userId },
      {
        ...data
      }
    )
    let updated = await UserModel.findById(userId).select({
      fullName: 1,
      phoneNumber: 1,
      address: 1,
      birthDay: 1
    })
    return updated
  }
  // get users is not admin
  async getUser () {
    let users = await UserModel.find({ isAdmin: false })
    return users
  }
  // delete user
  async deleteUser (username) {
    let user = await UserModel.deleteOne({ username: username })
    return user
  }
}
export default UserHandler
