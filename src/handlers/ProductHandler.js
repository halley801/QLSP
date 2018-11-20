import ProductModel from '../models/ProductModel'

class ProductHandler {
  /**
   * Create a product
   * @param {*} product an object {name, import, type, price, amount, desprostion}
   */
  async createProduct (product) {
    let create = await ProductModel.create({
      name: product.name,
      importer: product.userId,
      type: product.type,
      price: product.price,
      amount: product.amount,
      despristion: product.despristion
    })
    return create
  }
  /**
   * Get all product in store
   */
  async getAllProduct () {
    let lists = await ProductModel.find().sort({ name: 1 })
    return lists
  }
  /**
   * Get product by productId
   */
  async getProduct (productId) {
    let product = await ProductModel.findById(productId)
    if (!product) return false
    return product
  }
  /**
   * Update price of a product
   * @param {*} _id productId
   * @param {*} price price of product
   */
  async updatePriceProduct (_id, price) {
    await ProductModel.update({ _id }, { price: price })
    return true
  }
  /**
   * Update amount of a product
   * @param {*} _id productId
   * @param {*} amount amount of product
   */
  async updateAmountProduct (_id, amount) {
    await ProductModel.update({ _id }, { amount: amount })
    return true
  }
  /**
   * Delete a product
   * @param {*} _id productId
   */
  async deleteProduct (_id) {
    await ProductModel.deleteOne({ _id })
    return true
  }
}
export default ProductHandler
