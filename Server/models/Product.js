import mongoose from "mongoose";

const Productschema = new mongoose.Schema({
    title: String,
    price:Number,
    image: String,
    description: String
    
})

export default mongoose.model('products', Productschema)