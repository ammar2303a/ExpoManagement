import mongoose from "mongoose";
import express from "express";
import User from "../models/User.js"
import bcrypt from "bcryptjs"

const router = express.Router();

router.post('/register', async (req,res) =>{
    const {name, email, password} = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const newuser = User({name, email, password: hashed});

    await newuser.save()
    res.status(201).send("user registered")

})

router.get('/', async(req,res) =>{
    const getUsers = await User.find()
    res.json(getUsers)
})

router.post('/login', async (req,res)=>{
    const {email, password} =req.body;

    const user = await User.findOne({email})
    if (!user) {
        res.status(404).send("User not found")
    }
    
    const passmatch = await bcrypt.compare(password, user.password)

    if(!passmatch){
        res.status(400).send('Invalid Credentias')
    }
    res.status(200).send('User logged In')

})
export default router