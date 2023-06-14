import mongoose from 'mongoose'

export async function dbConnection() {
  try {
    const dbUrl = process.env.DATABASE_URL || ''
    mongoose.set('strictQuery', true)
    await mongoose.connect(dbUrl)
    console.log('🌱 mongodb connected 🌱')
  } catch (error) {
    console.log(error)
  }
}
