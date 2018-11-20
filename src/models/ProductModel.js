import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
const Schema = mongoose.Schema

const Product = new Schema({
  name: {
    type: String,
    required: true
  },
  importer: {
    type: Schema.Types.ObjectId,
    required: true
  },
  type: {
    type: String,
    default: 'OTHER'
  },
  price: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  img: {
    type: String
  },
  despristion: {
    type: String,
    default: ''
  }
})

Product.plugin(mongoosePaginate)
export default mongoose.model('Product', Product)
