import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
}, 
{timestamps: true})

export default mongoose.model("Product", productsSchema)
