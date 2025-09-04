import mongoose from 'mongoose'
import Product from '../models/products.model.js'
import httpStatus from '../utils/httpStatus.js'
const getProducts = async (_, res)=>{
  try {
    res.status(200).json({status: httpStatus.SUCCESS, data: await Product.find({}, {name: true, price: true, image: true, _id: true})})
  } catch (error) {
    res.status(500).json({data: null, status: httpStatus.ERROR})
  }
}

const addProduct = async (req, res)=>{
  const product = req.body;
  if(!product.name || !product.price || !product.image){
    return res.status(400).json({status: httpStatus.FAIL})
  }

  try {
    const returnedProduct = new Product(req.body)
    await returnedProduct.save()

    const newProduct = {
      name: returnedProduct.name,
      price: returnedProduct.price,
      image: returnedProduct.image,
      _id: returnedProduct._id
    }

    res.status(201).json({status: httpStatus.SUCCESS, data: newProduct})
  } catch (error) {
    res.status(400).json({status: httpStatus.ERROR, message: error.message, data: null})
  }
}

const deleteProduct = async (req, res) =>{
  const { id } = req.params
  try {
    await Product.findByIdAndDelete(id)
    res.status(204).json({status: httpStatus.SUCCESS, data: null})
  } catch (error) {
    res.status(400).json({status: httpStatus.FAIL, data: null, message: error.message})
  }
}

const editProduct = async (req, res) =>{
  
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({status: httpStatus.FAIL, data: null, message: "This is not a valid ID, make sure to write the ID as it is "})
  }

  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {new: true})
    const responseProduct = {
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
    }
    res.status(200).json({status: httpStatus.SUCCESS, data: responseProduct})
  } catch (error) {
    res.status(500).json({status: httpStatus.FAIL, data: null, message: error.message})
  }
}

export default {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct
}
