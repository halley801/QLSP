import Controller from '../../controllers/ProductController'
import authentication from '../../middlewares/authentication'
import authenticationAdmin from '../../middlewares/authenticationAdmin'
const router = require('express').Router()

var controllers = new Controller()
// GET
router.get('/', authenticationAdmin, controllers.getAllProducts) // get product
// POST
router.post('/create', authenticationAdmin, controllers.createProduct) // create product
router.post('/getProductById', authentication, controllers.getProduct) // get Product By Id
router.post('/getProductsByType', authentication, controllers.getProductsByType) // get Product By Id
// UPDATE
router.put(
  '/updatePriceProduct',
  authentication,
  controllers.updatePriceProduct
) // updatePriceProduct
router.put(
  '/updateAmountProduct',
  authentication,
  controllers.updateAmountProduct
) // updatePriceProduct
// DELETE
router.delete('/delete', authenticationAdmin, controllers.deleteProduct) // delete User
export default router
