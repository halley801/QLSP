import Controller from '../../controllers/UserController'
import authentication from '../../middlewares/authentication'
import authenticationAdmin from '../../middlewares/authenticationAdmin'
const router = require('express').Router()

var controllers = new Controller()
// GET
router.get('/getUser', authenticationAdmin, controllers.getUser) // get user
// POST
router.post('/login', controllers.login) // login
router.post('/register', controllers.register) // register
router.post('/updateInfo', authentication, controllers.updateInfo) // update user
// DELETE
router.delete('/delete', authenticationAdmin, controllers.deleteUser) // delete User
export default router
