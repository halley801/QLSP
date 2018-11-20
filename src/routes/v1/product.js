import Controller from '../../controllers/ProductController'
import authentication from '../../middlewares/authentication'
import authenticationAdmin from '../../middlewares/authenticationAdmin'
const router = require('express').Router()

var controllers = new Controller()
// GET
router.get('/', authenticationAdmin, controllers.getUser) // get user
// POST
router.post('/create', authenticationAdmin, controllers.createProduct) // create product
router.post('/register', controllers.register) // register
router.post('/updateInfo', authentication, controllers.updateInfo) // update user
// DELETE
router.delete('/delete', authenticationAdmin, controllers.deleteUser) // delete User
export default router
