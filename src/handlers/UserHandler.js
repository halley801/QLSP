import JWT from '../helpers/jwt'
import UserModel from '../models/UserModel'
import validator from 'validator'
import loginError from '../errors/Error'

var jwt = new JWT()
class UserHandler {
  // login
  async login (data) {
    let user = await UserModel.findOne({ username: data.username }) // find user by username
    if (!user) return loginError.LOGIN_01 // not found user
    const isMatch = await user.comparePassword(data.password) // check password
    if (!isMatch) return loginError.LOGIN_02 // incorrect password
    let token = await this.getToken(user) // get token
    return token
  }
  // get token
  async getToken (user) {
    const token = await jwt.sign({ _id: user._id })
    return token
  }
  // register
  async register (data) {
    let isExistUsername = await UserModel.findOne({ username: data.username }) // check username exist
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
    }) // check user is admin
    if (!user) return false
    return true
  }
  // get info
  async getUserInfo (userId) {
    let user = await UserModel.findById(userId)
    return user
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
    }) // after update get user info
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
