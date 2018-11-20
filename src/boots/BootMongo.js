import mongoose from 'mongoose'

import { MONGO_URL } from '../config/Database'

export default async () => {
  let link = MONGO_URL
  if (process.env.NODE_ENV === 'production' && process.env.MONGO_URL) {
    link = process.env.MONGO_URL
  }
  await mongoose.connect(
    link,
    { useNewUrlParser: true }
  )
  console.log('Connect to MongoDB success')
}
