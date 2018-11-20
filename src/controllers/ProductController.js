import ValidateError from '../errors/validation'
import {
  CREATE_PRODUCT,
  VALIDATE_TYPE_PRODUCT
} from '../validationSchema/Product'
import codeError from '../errors/Error'
import BaseController from './BaseController'
import ProductHandler from '../handlers/ProductHandler'
import ProductModel from '../models/ProductModel'
const handlers = new ProductHandler()
class ProductControllers extends BaseController {
  /**
   * Create a product
   * @param {*} data an object {name, img, import, type, price, amount, desprostion}
   */
  async createProduct (req, res, next) {
    let data = req.body
    try {
      // check body
      let errors = await this.getErrorsParameters(req, CREATE_PRODUCT) // check parameters
      if (errors.length > 0) res.onError(new ValidateError(errors))
      let product = await handlers.createProduct(data) // register
      return res.onSuccess(product)
    } catch (error) {
      return res.onError(new ValidateError(error))
    }
  }
  /**
   * Get all product in store
   */
  async getAllProducts (req, res, next) {
    try {
      let lists = await handlers.getAllProducts()
      return res.onSuccess(lists)
    } catch (error) {
      return res.onError(new ValidateError(error))
    }
  }
  /**
   * Get product by productId
   */
  async getProduct (req, res, next) {
    let { data } = req.body
    try {
      let product = await handlers.getProduct(data)
      return res.onSuccess(product)
    } catch (error) {
      return res.onError(new ValidateError(error))
    }
  }
  /**
   * Get products by type
   */
  async getProductsByType (req, res, next) {
    let { data } = req.body
    try {
      let errors = await this.getErrorsParameters(req, VALIDATE_TYPE_PRODUCT) // check parameters
      if (errors.length > 0) res.onError(new ValidateError(errors))
      let product = await handlers.getProductsByType(data)
      return res.onSuccess(product)
    } catch (error) {
      return res.onError(new ValidateError(error))
    }
  }
  /**
   * Update price of a product
   * @param {*} _id productId
   * @param {*} price price of product
   */
  async updatePriceProduct (req, res, next) {
    let { productId, price } = req.body
    try {
      // check price
      if (price === 0) {
        return res.onError(new ValidateError(codeError.PRODUCT_01))
      }
      let product = await handlers.updatePriceProduct(productId, price)
      return res.onSuccess(product)
    } catch (error) {
      return res.onError(new ValidateError(error))
    }
  }
  /**
   * Update amount of a product
   * @param {*} _id productId
   * @param {*} amount amount of product
   */
  async updateAmountProduct (req, res, next) {
    let { productId, amount } = req.body
    try {
      let product = await handlers.updateAmountProduct(productId, amount)
      return res.onSuccess(product)
    } catch (error) {
      return res.onError(new ValidateError(error))
    }
  }
  /**
   * Delete a product
   * @param {*} _id productId
   */
  async deleteProduct (req, res, next) {
    let { productId } = req.params
    try {
      // check exist
      let isExist = await ProductModel.findById(productId)
      if (!isExist) return res.onError(new ValidateError(codeError.PRODUCT_02))
      let product = await handlers.deleteProduct(productId)
      return res.onSuccess(product)
    } catch (error) {
      return res.onError(new ValidateError(error))
    }
  }
}
export default ProductControllers
