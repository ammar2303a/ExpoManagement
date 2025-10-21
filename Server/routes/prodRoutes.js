import mongoose, { get } from "mongoose";
import express from "express"
import Product from "../models/Product.js";

const router = express.Router()

router.post('/create', async (req, res)=>{
    const  {title, price, image , description} = req.body;
    const prod = await Product({title,price,image,description})

    await prod.save();
    res.status(201).send("Product Inserted")
})

router.put('/:id', async (req,res)=>{
    const {id} = req.params;
   const updProduct = await Product.findByIdAndUpdate(id, req.body, {new:true});
   res.json(updProduct)
})

router.delete('/:id', async (req, res) =>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id)
    res.json({message: 'Product deleted successfully' })
})

router.get('/', async (req,res) =>{
    const getProd = await Product.find();
    res.json(getProd)
})

export default  router