import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export default async ()=> {
  try {
    const conn = await mongoose.connect(process.env.DB_URL)
    console.log(`connected successfully to ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}
