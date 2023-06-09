import mongoose from 'mongoose'

const connectDB = async () => {
  const URL = process.env.MONGODB_URI
  if (URL) {
    mongoose
      .connect(URL)
      .then(() => console.log('Connected to MongoDB'))
      .catch((err) => console.log(`DB connection error ${err}`))
  } else {
    console.log('URL MongoDB Failed')
  }
}

export default connectDB
