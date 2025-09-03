import express from 'express'
import connectDB from './db.js'
import productsRouter from './routers/products.router.js'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/products', productsRouter)

app.listen(process.env.PORT, "localhost", ()=>{
  console.log(`listening on port ${process.env.PORT}`)
  connectDB()
})
