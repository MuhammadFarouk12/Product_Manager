import express from 'express'
import productsController from '../controllers/products.controller.js'
const productsRouter = express.Router()

productsRouter
  .get('/', productsController.getProducts)
  .post('/add', productsController.addProduct)
  .delete('/delete/:id', productsController.deleteProduct)
  .patch('/edit/:id', productsController.editProduct)


export default productsRouter;
